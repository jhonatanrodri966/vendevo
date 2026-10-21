"use client";

import { useState, useEffect } from "react";

type Produto = {
  id: string;
  name: string;
  description: string | null;
  priceCents: number;
  stock: number | null;
  imageUrl: string | null;
};

export default function Produtos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Produto | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", description: "", price: "", stock: "", imageUrl: "" });

  async function carregarProdutos() {
    const res = await fetch("/api/produtos");
    const data = await res.json();
    setProdutos(data);
  }

  useEffect(() => {
    let mounted = true;
    async function load() {
      const res = await fetch("/api/produtos");
      const data = await res.json();
      if (mounted) setProdutos(data);
    }
    load();
    return () => { mounted = false; };
  }, []);

  function openCreateModal() {
    setEditingProduct(null);
    setFormData({ name: "", description: "", price: "", stock: "", imageUrl: "" });
    setIsModalOpen(true);
  }

  function openEditModal(prod: Produto) {
    setEditingProduct(prod);
    setFormData({
      name: prod.name,
      description: prod.description || "",
      price: (prod.priceCents / 100).toFixed(2),
      stock: prod.stock?.toString() || "",
      imageUrl: prod.imageUrl || "",
    });
    setIsModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      name: formData.name,
      description: formData.description,
      priceCents: Math.round(parseFloat(formData.price.replace(",", ".")) * 100),
      stock: parseInt(formData.stock) || 0,
      imageUrl: formData.imageUrl || null,
    };

    const url = editingProduct ? `/api/produtos/${editingProduct.id}` : "/api/produtos";
    const method = editingProduct ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setIsModalOpen(false);
      setFormData({ name: "", description: "", price: "", stock: "", imageUrl: "" });
      carregarProdutos();
    } else {
      alert("Erro ao salvar produto.");
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Tem certeza que quer excluir este produto?")) {
      await fetch(`/api/produtos/${id}`, { method: "DELETE" });
      carregarProdutos();
    }
  }

  const filtered = produtos.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Produtos</h1>
          <p className="text-gray-400 mt-2">Gerencie o catálogo que sua IA vai vender.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Novo Produto
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:border-emerald-500"
        />
        <svg className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Nenhum produto cadastrado</h2>
          <p className="text-gray-400 mb-6 max-w-md">Adicione os produtos que você vende para que o vendedor de IA saiba o que oferecer.</p>
          <button onClick={openCreateModal} className="text-emerald-400 font-medium hover:text-emerald-300">Cadastrar meu primeiro produto</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((prod) => (
            <div key={prod.id} className="bg-[#111111] border border-white/10 p-5 rounded-2xl flex flex-col group relative">
              {prod.imageUrl && (
                <img src={prod.imageUrl} alt={prod.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              )}
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg pr-8">{prod.name}</h3>
                <span className="text-emerald-400 font-bold">R$ {(prod.priceCents / 100).toFixed(2)}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 flex-1">{prod.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-3">
                <span>Estoque: {prod.stock}</span>
              </div>

              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => openEditModal(prod)} className="text-blue-400 hover:text-blue-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </button>
                <button onClick={() => handleDelete(prod.id)} className="text-red-500 hover:text-red-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">{editingProduct ? "Editar Produto" : "Novo Produto"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Nome do Produto</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none" placeholder="Ex: Camiseta Preta" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Descrição</label>
                <input type="text" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none" placeholder="Ex: 100% algodão" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">URL da Imagem (opcional)</label>
                <input type="text" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none" placeholder="https://exemplo.com/foto.jpg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Preço (R$)</label>
                  <input required type="text" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none" placeholder="59.90" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Estoque</label>
                  <input type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none" placeholder="10" />
                </div>
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 mt-2">
                {editingProduct ? "Salvar Alterações" : "Salvar Produto"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}