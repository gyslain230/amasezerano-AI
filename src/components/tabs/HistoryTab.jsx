import React from 'react';

export default function HistoryTab({ 
  savedContracts, setContractOutput, setAgreementType, 
  setPartyAPersons, setPartyBPersons, setActiveTab, 
  showAlert, deleteSavedContract 
}) {
  return (
    <div className="space-y-6">
      <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl animate-fadeIn">
        <h2 className="text-lg font-bold text-amber-400 mb-2">Inyandiko zawe Zabitswe (Your Saved Contracts)</h2>
        <p className="text-xs text-gray-400">
          Uru rutonde rurimo amasezerano yose wakoze ukayabika muri iyi browser. Ushobora kuyareba, kuyavugurura, cyangwa kuyasiba igihe cyose.
        </p>
      </div>

      {savedContracts.length === 0 ? (
        <div className="bg-[#111827] border border-gray-850 p-12 rounded-2xl text-center">
          <span className="text-4xl block mb-2">📁</span>
          <h4 className="font-bold text-gray-200">Nta masezerano arabikwa</h4>
          <p className="text-xs text-gray-500 mt-2">Kora amasezerano mashya maze ukande ku kifungo rya "Bika" kugira ngo aze hano.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
          {savedContracts.map((con) => (
            <div key={con.id} className="bg-[#111827] border border-gray-850 p-5 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                    {con.type}
                  </span>
                  <span className="text-[10px] text-gray-500">{con.date}</span>
                </div>
                <h4 className="font-bold text-sm text-gray-100 mt-3 truncate">{con.title}</h4>
                <div className="grid grid-cols-2 gap-2 mt-2 bg-[#0b0f19] p-2 rounded-lg text-[11px] text-gray-400">
                  <div>
                    <span className="text-amber-500 block">Uruhande A:</span>
                    <span className="truncate block font-semibold">{con.partyA || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-amber-500 block">Uruhande B:</span>
                    <span className="truncate block font-semibold">{con.partyB || 'N/A'}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 flex justify-between gap-2">
                <button 
                  onClick={() => {
                    setContractOutput(con.content);
                    setAgreementType(con.type);
                    if (con.partyAPersons) setPartyAPersons(con.partyAPersons);
                    if (con.partyBPersons) setPartyBPersons(con.partyBPersons);
                    setActiveTab('draft');
                    showAlert("Amasezerano yafunguwe mu buryo bwo kwandika!", "success");
                  }}
                  className="flex-1 py-1.5 bg-[#152033] hover:bg-gray-800 text-amber-400 font-bold text-xs rounded-lg transition"
                >
                  🔍 Fungura
                </button>
                <button 
                  onClick={() => deleteSavedContract(con.id)}
                  className="px-3 py-1.5 bg-red-950 text-red-400 hover:bg-red-900 rounded-lg text-xs"
                  title="Siba"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}