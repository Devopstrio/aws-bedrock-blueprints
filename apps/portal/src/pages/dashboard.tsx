import React from 'react';

// Devopstrio AWS Bedrock Blueprints
// Executive Generative AI Operations & Governance Command Center

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-orange-500/30">
            {/* Global AI Operations Header */}
            <header className="border-b border-white/5 bg-black/60 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(249,115,22,0.4)] border border-white/10 relative overflow-hidden">
                            BB
                            <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full m-1 border border-black shadow-[0_0_50px_10px_rgba(251,146,60,0.5)]"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none">BEDROCK BLUEPRINTS</h1>
                            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.3em] mt-2 italic">Foundational GenAI Intelligence</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-orange-400 border-b-2 border-orange-500 pb-10 pt-10">AI Dash</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Blueprint Center</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">RAG Pipelines</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">PromptOps</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Governance</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Global AI Performance & Budget Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Token Consumption (24h)', value: '1.4M', status: 'Optimal', color: 'orange' },
                        { label: 'AI Cost Attribution', value: '$142.45', status: 'In Budget', color: 'emerald' },
                        { label: 'Avg. Model Latency', value: '1.1s', status: 'Claude-3-S', color: 'orange' },
                        { label: 'Guardrail Events', value: '0', status: 'Secure', color: 'emerald' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-neutral-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-orange-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Primary AI Intelligence Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Live Inference & Vector Stream Dashboard */}
                    <div className="xl:col-span-2 bg-neutral-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Real-Time Ingest & Inference</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-lg">Monitoring global vector indexing, model routing efficiency, and prompt guardrail performance across AWS regions.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10">
                                    Export Usage PDF
                                </button>
                                <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-orange-900/40">
                                    New AI Blueprint
                                </button>
                            </div>
                        </div>

                        {/* AI Accelerator Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {[
                                { title: 'RAG Knowledge Center', desc: 'S3 Sync -> OpenSearch Index', status: 'Syncing', icon: 'KB' },
                                { title: 'Agentic Workflows', desc: 'Multi-Step Execution Hub', status: 'Active', icon: 'AX' },
                                { title: 'Responsible AI Ops', desc: 'Guardrails & PII Filter', status: 'Enforced', icon: 'RA' }
                            ].map((card, i) => (
                                <div key={i} className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-orange-500/20 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-orange-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all border border-orange-500/20">
                                        <span className="text-orange-400 text-sm font-black">{card.icon}</span>
                                    </div>
                                    <div className="text-sm font-black text-white mb-2">{card.title}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">{card.desc}</div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-black px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 uppercase">{card.status}</span>
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto p-10 bg-black/60 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                            <div className="flex justify-between items-center relative z-10">
                                <div>
                                    <div className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2 leading-none">Model Health Center</div>
                                    <div className="text-xl font-black text-white tracking-tight">Foundational Models Accessible via PrivateLink</div>
                                </div>
                                <div className="flex gap-2">
                                    {['Claude-3', 'Llama-3', 'Titan-V2', 'Mistral'].map((m) => (
                                        <span key={m} className="px-4 py-1.5 bg-neutral-800 text-white text-[9px] font-black rounded-lg border border-white/5 uppercase tracking-widest">{m}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-1 h-full bg-orange-600"></div>
                        </div>
                    </div>

                    {/* Active Ingestion & Cost Stack */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-neutral-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-8 border-b border-orange-500/20 pb-6">Knowledge Ingestion Sync</h3>
                            <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                {[
                                    { source: 'S3: Corporate Policy', docs: 1420, rate: '42 docs/m', status: 'Indexing' },
                                    { source: 'SharePoint: HR Hub', docs: 840, rate: '9 docs/m', status: 'Healthy' },
                                    { source: 'Confluence: Engineering', docs: 3200, rate: '112 docs/m', status: 'Healthy' },
                                    { source: 'Jira: Service Desk', docs: 120, rate: '0 docs/m', status: 'Idle' }
                                ].map((row, idx) => (
                                    <div key={idx} className="p-6 bg-black/40 rounded-2xl border border-white/5 group hover:border-orange-500/20 transition-all cursor-pointer">
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="text-xs font-black text-white">{row.source}</div>
                                            <div className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${row.status === 'Indexing' ? 'bg-orange-500/20 text-orange-400 animate-pulse' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                                {row.status}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                            <span>{row.docs} Documents Indexed</span>
                                            <span>{row.rate}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-orange-600 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(249,115,22,0.3)] relative overflow-hidden group border border-white/10">
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                            <h4 className="text-[10px] font-black text-orange-200 uppercase tracking-widest mb-2 leading-none">Cost Optimization</h4>
                            <div className="text-2xl font-black text-white tracking-tight mb-2">Smart Model Routing Active</div>
                            <p className="text-xs text-orange-100 font-medium leading-relaxed">
                                Routing low-latency tasks to Claude-3-Haiku. Estimated monthly savings: <span className="font-bold underline">$1,420.00</span>.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Sub-Internal AI Governance & Drift Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-neutral-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-3">Token Usage Allocation</h5>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter">72% <span className="text-xs font-bold text-orange-400 underline ml-1 uppercase tracking-normal">KNOWLEDGE RAG</span></div>
                            </div>
                            <div className="text-right text-[10px] font-black text-slate-500 uppercase">Operational Split</div>
                        </div>
                        <div className="flex items-end gap-1.5 h-32 px-2">
                            {[12, 18, 14, 22, 10, 8, 14, 24, 38, 12, 8, 6, 9, 11, 24, 32, 28, 14, 12, 10, 8, 12].map((v, i) => (
                                <div key={i} className="flex-1 bg-orange-500/20 rounded-t-lg hover:bg-orange-500 transition-all relative group cursor-pointer" style={{ height: `${v * 2}%` }}>
                                    <div className="absolute -top-10 left-1/2 -ms-4 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl pointer-events-none transition-all">
                                        {v}M
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-neutral-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl">
                        <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10">Responsible AI Compliance Scorecard</h5>
                        <div className="space-y-6">
                            {[
                                { ctrl: 'Prompt PII Redaction Engine', status: 'Compliant', col: 'emerald' },
                                { ctrl: 'Model Guardrail Enforcement', status: 'Active', col: 'emerald' },
                                { ctrl: 'IAM Data Sovereignty Policy', status: 'Compliant', col: 'emerald' },
                                { ctrl: 'Bias and Drift Monitoring', status: 'In-Scope', col: 'orange' }
                            ].map((row, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 hover:border-white/10 transition-colors cursor-pointer group">
                                    <div>
                                        <div className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{row.ctrl}</div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Continuous Governance Monitoring</div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest bg-${row.col}-500/10 text-${row.col}-400`}>{row.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 bg-white hover:bg-slate-200 text-black text-[11px] font-black py-4 rounded-2xl uppercase tracking-widest transition-all">
                            Review AI Ethics Report
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
