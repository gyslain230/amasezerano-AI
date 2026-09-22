import React from 'react';

export default function ToastAlert({ alertMessage }) {
  if (!alertMessage) return null;
  
  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl transition-all border ${
      alertMessage.type === 'error' ? 'bg-red-900/90 border-red-500 text-white' : 'bg-[#152033]/90 border-emerald-500 text-emerald-300'
    }`}>
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      <span className="text-sm font-medium">{alertMessage.message}</span>
    </div>
  );
}