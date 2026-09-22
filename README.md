# AMASEZERANO AI ⚖️ (Nkiza AI Legal Writer)

AMASEZERANO AI is a React-based legal technology application designed specifically for the Rwandan legal framework. It leverages the Google Gemini API to automatically draft, analyze, and format professional legal contracts in Kinyarwanda (and bilingual formats) based on simple user prompts or voice inputs.

The system uses a Retrieval-Augmented Generation (RAG) architecture, grounding the AI's contract generation in pre-loaded Rwandan laws (such as Land Law, Contract Law, and Labor Law) and allowing users to upload custom legal documents for context.

## ✨ Key Features

* **AI-Powered Contract Generation:** Draft comprehensive contracts (Rent, Loan, Labor, Land Sale, NDAs) by typing a simple story or requirement in Kinyarwanda.
* **Smart Entity Extraction:** Automatically parses Kinyarwanda text to extract party names, ID numbers, phone numbers, amounts, and durations to auto-fill the contract form.
* **Voice-to-Text Integration:** Speak your contract requirements directly into the app using the built-in Kinyarwanda speech recognition (Web Speech API).
* **RAG Document Vault:** Pre-loaded with core Rwandan laws. Users can also upload custom `.txt` or `.json` legal documents to act as reference context for the AI.
* **Legal Risk Audit:** Features an AI legal consultant tool that scans generated contracts, provides a compliance score (0-100%), highlights potential risks, and suggests missing clauses based on Rwandan Civil Law.
* **Export & Output:** Download generated contracts as formatted Word Documents (`.docx`), print to PDF, or copy directly to the clipboard.
* **Local Storage Vault:** Securely saves your generated contracts directly in the browser's local storage for future reference, editing, or auditing.
* **Dark/Light Mode:** Full UI theme toggling for comfortable reading.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS v4
* **AI Integration:** Google Gemini Pro/Flash API (via `@google/generative-ai` or direct REST calls)
* **Icons:** SVG inline
* **Storage:** Browser `localStorage`

## 📂 Project Structure

```text
src/
├── components/
│   ├── Sidebar.jsx              # App navigation and theme toggle
│   ├── ToastAlert.jsx           # Global notification system
│   └── tabs/
│       ├── DraftTab.jsx         # Main contract generator and form inputs
│       ├── VaultTab.jsx         # RAG document upload and law database
│       ├── HistoryTab.jsx       # Saved contracts local storage viewer
│       └── AuditTab.jsx         # Legal risk scoring and analysis view
├── constants/
│   ├── config.js                # API keys and environment variables
│   └── lawsData.js              # Static database of Rwandan laws
├── App.jsx                      # Main orchestrator and state management
├── index.css                    # Tailwind CSS v4 entry point
└── main.jsx                     # React application entry