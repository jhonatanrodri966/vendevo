"use client";

import { useEffect, useState } from "react";

export default function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-[100] px-6 py-4 rounded-xl border shadow-2xl transition-all duration-300 flex items-center gap-3 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      } ${
        type === "success" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"
      }`}
    >
      {type === "success" ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      )}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}