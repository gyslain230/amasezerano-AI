import React from 'react';

export default function Sidebar({ theme, setTheme, activeTab, setActiveTab, savedContractsCount }) {
  return (
    <aside className="w-full lg:w-72 bg-[#111827] border-b lg:border-r border-gray-800 flex flex-col justify-between shrink-0">
      <div>
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">AMASEZERANO AI</h1>
              <span className="text-xs text-gray-400 font-semibold tracking-wide">NKIZA AI LEGAL WRITER</span>
            </div>
          </div>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            title="Hindura Umucyo"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('draft')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              activeTab === 'draft' ? 'bg-[#1e293b] text-amber-400 font-bold border-l-4 border-amber-500' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Gukora Amasezerano
          </button>

          <button 
            onClick={() => setActiveTab('vault')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              activeTab === 'vault' ? 'bg-[#1e293b] text-amber-400 font-bold border-l-4 border-amber-500' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            Ubutaka & Amategeko
          </button>

          <button 
            onClick={() => setActiveTab('history')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              activeTab === 'history' ? 'bg-[#1e293b] text-amber-400 font-bold border-l-4 border-amber-500' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Inyandiko Zabitswe
            {savedContractsCount > 0 && (
              <span className="ml-auto bg-amber-600 text-white text-xs px-2 py-0.5 rounded-full">{savedContractsCount}</span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab('audit')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              activeTab === 'audit' ? 'bg-[#1e293b] text-amber-400 font-bold border-l-4 border-amber-500' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Sura Ibibazo (Audit)
          </button>
        </nav>
      </div>

      <div className="p-6 border-t border-gray-800 bg-[#152033] m-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            🇷🇼
          </div>
          <div>
            <span className="text-xs text-amber-400 font-bold tracking-wide uppercase">Bilingual Edition</span>
            <p className="text-xs text-gray-400 mt-0.5">Rwanda Legal Framework</p>
          </div>
        </div>
      </div>
    </aside>
  );
}