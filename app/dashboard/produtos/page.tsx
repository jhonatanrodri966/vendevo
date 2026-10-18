"use client";

import { useState, useEffect } from "react";

export default function Produtos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: "", description: "", price: "", stock: "" });

  // Função para buscar os produtos no banco
  async function carregarProdutos() {
    const res = await fetch("/api/produtos");
    const data = await res.json();
    setProdutos(data);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        priceCents: Math.round(parseFloat(formData.price.replace(",", ".")) * 100),
        stock: parseInt(formData.stock) || 0
      }),
    });

    if (res.ok) {
      setIsModalOpen(false);
      setFormData({ name: "", description: "", price: "", stock: "" });
      carregarProdutos(); // Atualiza a lista sem recarregar a página
    } else {
      alert("Erro ao cadastrar produto.");
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Tem certeza que quer excluir este produto?")) {
      await fetch(`/api/produtos/${id}`, { method: "DELETE" });
      carregarProdutos();
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Produtos</h1>
          <p className="text-gray-400 mt-2">Gerencie o catálogo que sua IA vai vender.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Novo Produto
        </button>
      </div>

      {produtos.length === 0 ? (
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Nenhum produto cadastrado</h2>
          <p className="text-gray-400 mb-6 max-w-md">Adicione os produtos que você vende para que o vendedor de IA saiba o que oferecer.</p>
          <button onClick={() => setIsModalOpen(true)} className="text-emerald-400 font-medium hover:text-emerald-300">Cadastrar meu primeiro produto</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((prod) => (
            <div key={prod.id} className="bg-[#111111] border border-white/10 p-5 rounded-2xl flex flex-col group relative">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg pr-8">{prod.name}</h3>
                <span className="text-emerald-400 font-bold">R$ {(prod.priceCents / 100).toFixed(2)}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 flex-1">{prod.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-3">
                <span>Estoque: {prod.stock}</span>
              </div>
              
              {/* Botão de Excluir (aparece no hover) */}
              <button 
                onClick={() => handleDelete(prod.id)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400"
                title="Excluir produto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Novo Produto</h2>
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
              <button type="submit" className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 mt-2">Salvar Produto</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}