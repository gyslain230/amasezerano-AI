import React from 'react';
import { RWANDA_LAW_DATABASE } from '../../constants/lawsData';

export default function VaultTab({ uploadedFiles, setUploadedFiles, handleFileUpload }) {
  return (
    <div className="space-y-6">
      <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl animate-fadeIn">
        <h2 className="text-lg font-bold text-amber-400 mb-2">Umutekano n'Ibikoresho bya RAG (Document Vault)</h2>
        <p className="text-xs text-gray-400 max-w-2xl">
          Aha niho ushobora gushyira amategeko y'u Rwanda cyangwa amasezerano wari ufite mu nzu. AI yacu izahita isoma inyandiko maze iyikoreshe nk'icyitegererezo cyangwa ishingiro rya RAG mu gihe cyo kwandika.
        </p>
        <div className="mt-6 border-2 border-dashed border-gray-800 rounded-2xl p-8 text-center bg-[#0b0f19] hover:border-amber-500 transition relative">
          <input 
            type="file" 
            accept=".txt,.json" 
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <span className="text-3xl block mb-2">📄</span>
          <p className="text-sm font-bold text-gray-200">Kanda hano cyangwa ukurure inyandiko y'amategeko (.txt cyangwa .json)</p>
          <p className="text-xs text-gray-500 mt-1">Inyandiko ntizizoherezwa ku rindi rubuga. Ziguma muri browser yawe.</p>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl animate-fadeIn">
          <h3 className="font-bold text-sm text-gray-200 mb-4">Inyandiko washyizemo (RAG active assets)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedFiles.map((file, idx) => (
              <div key={idx} className="bg-[#0b0f19] border border-gray-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-200 truncate max-w-[180px]">{file.name}</p>
                  <span className="text-[10px] text-emerald-400 mt-1 block">Yiteguye mu bubiko ({file.size})</span>
                </div>
                <button 
                  onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))}
                  className="p-1.5 bg-red-950 text-red-400 rounded-lg text-xs hover:bg-red-900"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl animate-fadeIn">
        <h3 className="font-bold text-sm text-gray-200 mb-4">📚 Ibitabo by'Amategeko y'u Rwanda bisanzwe mo (Pre-loaded RAG Database)</h3>
        <div className="space-y-6">
          {RWANDA_LAW_DATABASE.map((law, idx) => (
            <div key={idx} className="bg-[#0b0f19] border border-gray-850 rounded-xl p-5">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                  🇷🇼
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">{law.title}</h4>
                  <span className="text-[10px] text-amber-400 uppercase font-semibold">{law.category} Framework</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {law.articles.map((art, aIdx) => (
                  <div key={aIdx} className="bg-[#111827] border border-gray-800 p-3 rounded-lg text-xs">
                    <span className="text-[10px] font-bold text-amber-500 block mb-1">{art.number}: {art.title}</span>
                    <p className="text-gray-400 leading-relaxed text-[11px] text-justify">{art.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}