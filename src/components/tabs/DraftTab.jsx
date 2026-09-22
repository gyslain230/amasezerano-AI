import React from 'react';

export default function DraftTab({
  prompt, setPrompt, agreementType, setAgreementType, bilingualMode, setBilingualMode,
  isGenerating, isExtracting, contractOutput, setContractOutput, isRecording, speechError,
  partyAPersons, setPartyAPersons, partyBPersons, setPartyBPersons, formData, setFormData,
  selectedLawReferences, startSpeechRecognition, autoFillFromPrompt, handleGenerateContract,
  saveContractToHistory, handleDownloadDocx, handleDownloadPDF, handleCopyText
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      <div className="xl:col-span-5 space-y-6">
        <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-semibold text-gray-300">Ntekerezo y'Amasezerano (Kinyarwanda Request)</label>
            <div className="flex gap-2">
              <button 
                onClick={startSpeechRecognition}
                className={`p-2 rounded-lg transition ${isRecording ? 'bg-red-600 animate-pulse text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
                title="Vuga ku gatsiko (Speech to Text)"
              >
                🎙️ {isRecording ? 'Tega ugutwi...' : 'Vuga'}
              </button>
              <button 
                onClick={autoFillFromPrompt}
                disabled={isExtracting}
                className="bg-gray-805 hover:bg-amber-650 text-amber-300 font-medium text-xs px-3 py-1.5 rounded-lg border border-amber-600/30 transition flex items-center gap-2"
              >
                {isExtracting ? (
                  <div className="w-3.5 h-3.5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                ) : '🤖 Mvura ishusho'}
              </button>
            </div>
          </div>
          <textarea 
            value={prompt || ''}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Andika amasezerano y'ubukode hagati ya Jean Claude na Uwase Aline..."
            className="w-full h-36 bg-[#0b0f19] border border-gray-800 rounded-xl p-4 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-500"
          />
          {speechError && <p className="text-xs text-red-400 mt-2">{speechError}</p>}
        </div>

        <div className="bg-[#111827] border border-gray-850 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-gray-300 flex items-center gap-2 pb-2 border-b border-gray-800">
            📋 Amakuru y'amasezerano (Structured Inputs)
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1 font-semibold">Ubwoko bw'amasezerano</label>
              <select 
                value={agreementType || 'ubukode'}
                onChange={(e) => setAgreementType(e.target.value)}
                className="w-full bg-[#0b0f19] border border-gray-800 rounded-lg p-2.5 text-xs text-gray-200"
              >
                <option value="ubukode">Ubukode bw'Inzu / Land (Rent)</option>
                <option value="inguzanyo">Amasezerano y'Inguzanyo (Loan)</option>
                <option value="umurimo">Amasezerano y'Umurimo (Labor)</option>
                <option value="ugubure">Ubugure bw'Ubutaka (Land Sale)</option>
                <option value="gukodesha-ubutaka">Ubukode bw'Ubutaka (Emphyteutic Lease)</option>
                <option value="confidentiality">Amasezerano yo kubika ibanga (NDA)</option>
                <option value="indi">Ubwoko Bundi (Custom Contract)</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1 font-semibold">Inyandiko ngenderwaho (RAG)</label>
              <select 
                value={formData.lawRef || 'amasezerano'}
                onChange={(e) => setFormData({...formData, lawRef: e.target.value})}
                className="w-full bg-[#0b0f19] border border-gray-800 rounded-lg p-2.5 text-xs text-gray-200"
              >
                <option value="amasezerano">Itegeko rigenga Amasezerano</option>
                <option value="ubutaka">Itegeko rigenga Ubutaka</option>
                <option value="umurimo">Itegeko rigenga Umurimo</option>
                <option value="all">Sura mu mategeko yose</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block">Uruhande Rwa Mbere (Party A)</span>
              <button 
                type="button"
                onClick={() => setPartyAPersons([...partyAPersons, { name: '', id: '', phone: '' }])}
                className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold"
              >
                ➕ Gushyiramo Muntu
              </button>
            </div>
            {partyAPersons.map((person, index) => (
              <div key={index} className="space-y-2 p-3 bg-[#0b0f19] border border-gray-800 rounded-xl relative">
                {partyAPersons.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setPartyAPersons(partyAPersons.filter((_, i) => i !== index))}
                    className="absolute top-2 right-2 text-red-400 hover:text-red-300 text-xs font-bold"
                  >
                    ✕ Siba
                  </button>
                )}
                <span className="text-[10px] text-gray-500 font-bold uppercase">Umuntu wa {index + 1}</span>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" placeholder="Amazina Yombi" value={person.name || ''}
                    onChange={(e) => { const updated = [...partyAPersons]; updated[index].name = e.target.value; setPartyAPersons(updated); }}
                    className="bg-[#111827] border border-gray-800 rounded-lg p-2 text-xs text-gray-200 w-full"
                  />
                  <input 
                    type="text" placeholder="Nomero y'Indangamuntu" value={person.id || ''}
                    onChange={(e) => { const updated = [...partyAPersons]; updated[index].id = e.target.value; setPartyAPersons(updated); }}
                    className="bg-[#111827] border border-gray-800 rounded-lg p-2 text-xs text-gray-200 w-full"
                  />
                </div>
                <input 
                  type="text" placeholder="Telefoni" value={person.phone || ''}
                  onChange={(e) => { const updated = [...partyAPersons]; updated[index].phone = e.target.value; setPartyAPersons(updated); }}
                  className="w-full bg-[#111827] border border-gray-800 rounded-lg p-2 text-xs text-gray-200"
                />
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block">Uruhande Rwa Kabiri (Party B)</span>
              <button 
                type="button"
                onClick={() => setPartyBPersons([...partyBPersons, { name: '', id: '', phone: '' }])}
                className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold"
              >
                ➕ Gushyiramo Muntu
              </button>
            </div>
            {partyBPersons.map((person, index) => (
              <div key={index} className="space-y-2 p-3 bg-[#0b0f19] border border-gray-800 rounded-xl relative">
                {partyBPersons.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setPartyBPersons(partyBPersons.filter((_, i) => i !== index))}
                    className="absolute top-2 right-2 text-red-400 hover:text-red-300 text-xs font-bold"
                  >
                    ✕ Siba
                  </button>
                )}
                <span className="text-[10px] text-gray-500 font-bold uppercase">Umuntu wa {index + 1}</span>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" placeholder="Amazina Yombi" value={person.name || ''}
                    onChange={(e) => { const updated = [...partyBPersons]; updated[index].name = e.target.value; setPartyBPersons(updated); }}
                    className="bg-[#111827] border border-gray-800 rounded-lg p-2 text-xs text-gray-200 w-full"
                  />
                  <input 
                    type="text" placeholder="Nomero y'Indangamuntu" value={person.id || ''}
                    onChange={(e) => { const updated = [...partyBPersons]; updated[index].id = e.target.value; setPartyBPersons(updated); }}
                    className="bg-[#111827] border border-gray-800 rounded-lg p-2 text-xs text-gray-200 w-full"
                  />
                </div>
                <input 
                  type="text" placeholder="Telefoni" value={person.phone || ''}
                  onChange={(e) => { const updated = [...partyBPersons]; updated[index].phone = e.target.value; setPartyBPersons(updated); }}
                  className="w-full bg-[#111827] border border-gray-800 rounded-lg p-2 text-xs text-gray-200"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block">Amafaranga & Urubibi</span>
            <div className="grid grid-cols-2 gap-2">
              <input 
                type="text" placeholder="Agaciro (e.g. 150,000)" value={formData.amount || ''}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                className="bg-[#0b0f19] border border-gray-800 rounded-lg p-2 text-xs text-gray-200"
              />
              <input 
                type="text" placeholder="Igihe cy'amasezerano (Duration)" value={formData.duration || ''}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="bg-[#0b0f19] border border-gray-800 rounded-lg p-2 text-xs text-gray-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input 
                type="date" title="Itariki yo gutangira" value={formData.startDate || ''}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="bg-[#0b0f19] border border-gray-800 rounded-lg p-2 text-xs text-gray-400"
              />
              <input 
                type="text" placeholder="Aho gukorera (Location)" value={formData.location || ''}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="bg-[#0b0f19] border border-gray-800 rounded-lg p-2 text-xs text-gray-200"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="text-xs text-gray-400 block mb-1 font-semibold">Ingingo zihariye ukeneye (Custom Clauses)</label>
            <textarea 
              placeholder="Urugero: Kwishyura buri tariki 5 y'ukwezi, uburanira mu nkiko za Kigali..." value={formData.customTerms || ''}
              onChange={(e) => setFormData({...formData, customTerms: e.target.value})}
              className="w-full h-16 bg-[#0b0f19] border border-gray-800 rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <label className="text-xs text-gray-400 block mb-2 font-semibold">Uburyo bwo gusohora Inyandiko</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-xs text-gray-300">
                <input 
                  type="radio" name="bilingual" checked={bilingualMode === 'rwanda'} onChange={() => setBilingualMode('rwanda')} className="accent-amber-500"
                />
                Ikinyarwanda gusa
              </label>
              <label className="flex items-center gap-2 text-xs text-gray-300">
                <input 
                  type="radio" name="bilingual" checked={bilingualMode === 'bilingual'} onChange={() => setBilingualMode('bilingual')} className="accent-amber-500"
                />
                Indimi Zombi (Bilingual)
              </label>
            </div>
          </div>

          <button 
            onClick={handleGenerateContract}
            disabled={isGenerating}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Uyu munsi wandika...
              </>
            ) : (
              <span>✍️ ANDIKA AMASEZERANO</span>
            )}
          </button>
        </div>
      </div>

      <div className="xl:col-span-7 flex flex-col space-y-4">
        <div className="bg-[#111827] border border-gray-850 p-4 rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs text-gray-300 font-bold">Impanuro y'Amasezerano</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownloadDocx} disabled={!contractOutput}
              className="px-3 py-1.5 bg-[#152033] hover:bg-gray-800 text-amber-400 font-medium text-xs rounded-lg border border-gray-850 transition disabled:opacity-50"
            >
              📁 DOCX (Word)
            </button>
            <button 
              onClick={handleDownloadPDF} disabled={!contractOutput}
              className="px-3 py-1.5 bg-[#152033] hover:bg-gray-800 text-amber-400 font-medium text-xs rounded-lg border border-gray-850 transition disabled:opacity-50"
            >
              🖨️ Gucapa / PDF
            </button>
            <button 
              onClick={handleCopyText} disabled={!contractOutput}
              className="px-3 py-1.5 bg-[#152033] hover:bg-gray-800 text-gray-300 font-medium text-xs rounded-lg border border-gray-850 transition disabled:opacity-50"
            >
              📋 Kopiya
            </button>
            <button 
              onClick={saveContractToHistory} disabled={!contractOutput}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition disabled:opacity-50"
            >
              💾 Bika
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white text-gray-900 rounded-2xl shadow-2xl p-8 min-h-[500px] max-h-[750px] overflow-y-auto border border-gray-200 relative">
          {isGenerating && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="text-sm font-bold text-gray-800 animate-pulse text-center">AMASEZERANO AI iri gusesengura amategeko y'u Rwanda na Ntekerezo yawe...</p>
            </div>
          )}

          {!contractOutput && !isGenerating ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4 text-2xl">⚖️</div>
              <h4 className="font-bold text-lg text-gray-800">Inyandiko Nshyashya</h4>
              <p className="text-xs text-gray-500 max-w-sm mt-2">
                Andika ibisabwa cyangwa ukoreshe uburyo bwo kuvuga. Amasezerano azagaragara hano mu buryo bw'amategeko.
              </p>
            </div>
          ) : (
            <div 
              className="prose prose-sm max-w-none text-justify tracking-wide leading-relaxed font-serif animate-fadeIn"
              dangerouslySetInnerHTML={{ __html: contractOutput }}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setContractOutput(e.currentTarget.innerHTML)}
            />
          )}
        </div>

        {selectedLawReferences.length > 0 && (
          <div className="bg-[#111827] border border-gray-850 p-4 rounded-xl animate-fadeIn">
            <span className="text-xs font-bold text-gray-400 block mb-2">Ingingo z'Amategeko zasomwe (RAG Trace):</span>
            <div className="flex flex-wrap gap-2">
              {selectedLawReferences.map((ref, idx) => (
                <span key={idx} className="bg-amber-500/10 text-amber-400 text-[10px] px-2.5 py-1 rounded-md border border-amber-500/25">
                  📚 {ref.article}: {ref.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}