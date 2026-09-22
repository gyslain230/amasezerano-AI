import React from 'react';

export default function AuditTab({ riskReport }) {
  return (
    <div className="space-y-6">
      <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl animate-fadeIn">
        <h2 className="text-lg font-bold text-amber-400 mb-2">⚖️ Sura Amategeko & Ibibazo by'Inyandiko</h2>
        <p className="text-xs text-gray-400">
          AI yacu isuzuma amasezerano yose yanditswe ikureberamo niba yubahirije inyandiko n'amategeko ya Leta y'u Rwanda (Civil/Contract Law standards).
        </p>
      </div>

      {!riskReport ? (
        <div className="bg-[#111827] border border-gray-850 p-12 rounded-2xl text-center">
          <span className="text-4xl block mb-2">🛡️</span>
          <h4 className="font-bold text-gray-200">Nta masezerano arasuzumwa</h4>
          <p className="text-xs text-gray-500 mt-2">Kora amasezerano muri tab ya "Gukora Amasezerano" maze andika uhitemo gusuzuma hano.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
          <div className="lg:col-span-4 bg-[#111827] border border-gray-850 p-6 rounded-2xl text-center space-y-4 shadow-lg">
            <span className="text-xs text-gray-400 font-bold tracking-wider uppercase block">Risk Safety Level</span>
            <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-8 border-gray-800" />
              <div 
                className={`absolute inset-0 rounded-full border-8 border-t-transparent ${
                  riskReport.riskScore > 75 ? 'border-emerald-500' : 'border-amber-500'
                }`}
                style={{ transform: `rotate(${riskReport.riskScore * 3.6}deg)` }}
              />
              <span className="text-4xl font-extrabold text-white">{riskReport.riskScore}%</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-gray-200">
                {riskReport.riskScore > 75 ? 'Amasezerano Aremerwa (Highly Secure)' : 'Birimo Intege nke (Review Needed)'}
              </h4>
              <p className="text-[11px] text-gray-400">Hashingiwe ku ngingo z'igitabo cy'amategeko mbonezabyifuzo cy'u Rwanda.</p>
            </div>
          </div>
          <div className="lg:col-span-8 bg-[#111827] border border-gray-850 p-6 rounded-2xl space-y-6 shadow-lg">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-2">Umwanzuro w'umunyamategeko AI:</span>
              <p className="text-xs text-gray-300 leading-relaxed bg-[#0b0f19] p-4 rounded-xl border border-gray-800 text-justify">
                {riskReport.verdict}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">⚠️ Ibibazo bishobora kuvuka (Risks Detected):</span>
              <ul className="space-y-2 text-xs text-gray-400 list-disc pl-5">
                {riskReport.risks && riskReport.risks.length > 0 ? (
                  riskReport.risks.map((r, idx) => <li key={idx} className="leading-relaxed">{r}</li>)
                ) : (
                  <li className="text-emerald-400">Nta kibazo gikomeye kibonetse muri iyi nyandiko.</li>
                )}
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-2">📌 Ingingo zikwiye kongerwamo (Missing Recommendations):</span>
              <ul className="space-y-2 text-xs text-gray-400 list-disc pl-5">
                {riskReport.missingClauses && riskReport.missingClauses.length > 0 ? (
                  riskReport.missingClauses.map((mc, idx) => <li key={idx} className="leading-relaxed">{mc}</li>)
                ) : (
                  <li className="text-emerald-400">Inyandiko iruzuye neza mu buryo bwose bwa Kinyamategeko.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}