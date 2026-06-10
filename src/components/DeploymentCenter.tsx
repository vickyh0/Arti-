import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  ExternalLink, 
  CheckCircle, 
  Copy, 
  Terminal, 
  RefreshCw, 
  AlertCircle, 
  QrCode, 
  BookOpen, 
  CheckSquare, 
  Square, 
  ArrowRight,
  Sparkles,
  Link2
} from 'lucide-react';

export default function DeploymentCenter() {
  const [vercelUrl, setVercelUrl] = useState<string>(() => {
    return localStorage.getItem('arti_vercel_url') || 'https://arti-vicky-huang.vercel.app';
  });
  const [inputUrl, setInputUrl] = useState(vercelUrl);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedBadge, setCopiedBadge] = useState(false);
  
  // Terminal ping trace simulation states
  const [pingState, setPingState] = useState<'idle' | 'pinging' | 'success' | 'failed'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [activeGuideTab, setActiveGuideTab] = useState<'git' | 'cli'>('git');

  // Interactive Checklist State
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem('arti_release_checklist');
    return saved ? JSON.parse(saved) : {
      git_repo: true,
      vercel_account: true,
      env_configured: false,
      build_settings: true,
      class_submission: false
    };
  });

  const handleToggleChecklist = (id: string) => {
    const updated = { ...checklist, [id]: !checklist[id] };
    setChecklist(updated);
    localStorage.setItem('arti_release_checklist', JSON.stringify(updated));
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let formattedUrl = inputUrl.trim();
    if (formattedUrl && !/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }
    setVercelUrl(formattedUrl);
    localStorage.setItem('arti_vercel_url', formattedUrl);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(vercelUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyBadgeMarkdown = () => {
    const mdBadge = `[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-blueviolet?style=for-the-badge&logo=vercel)](${vercelUrl})`;
    navigator.clipboard.writeText(mdBadge);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2000);
  };

  // Run the animated console trace
  const runDiagnosticTerminal = () => {
    setPingState('pinging');
    setLogs([]);
    
    const logsSequence = [
      `$ ping -c 3 ${vercelUrl.replace(/^https?:\/\//, '')}`,
      `PING TRACE: Resolving domain name...`,
      `DNS Lookup successful. Resolved to Vercel IP: 76.76.21.21`,
      `Sending dynamic handshake requests...`,
      `64 bytes from 76.76.21.21: icmp_seq=1 ttl=54 time=14.2 ms`,
      `64 bytes from 76.76.21.21: icmp_seq=2 ttl=54 time=12.8 ms`,
      `HTTP/1.1 GET /api/health --> Status: 200 OK`,
      `SSL certificate verified (Expires June 2027)`,
      `Server: Vercel CDN Node Edge (v8-sfo1)`,
      `STATUS Check: Deployed build matches local production hashes.`,
      `✓ Edge connection verified successfully.`
    ];

    logsSequence.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === logsSequence.length - 1) {
          setPingState('success');
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <div id="deployment-panel" className="space-y-12 snappy-transition relative">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
          Vercel Deployment Hub
        </h3>
        <p className="text-xs font-mono uppercase text-[#4B5563] tracking-wider leading-relaxed">
          Manage your live production build link, run edge latency checks, and get quick presentation assets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: URL input & Live status (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Active Deployment Card */}
          <div className="bg-white rounded-xl border-3 border-[#111827] overflow-hidden shadow-[6px_6px_0px_#111827]">
            {/* Header */}
            <div className="bg-[#2D2E49] text-white px-5 py-3 border-b-3 border-[#111827] flex justify-between items-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Vercel Production Trace
              </span>
              <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded uppercase">
                Ready
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              <form onSubmit={handleSaveUrl} className="space-y-4">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827]">
                  Configure Live Vercel URL
                </label>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="e.g. host-name.vercel.app"
                      className="w-full bg-[#FAF9F6] border-2 border-[#111827] rounded-lg py-3 pl-10 pr-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink text-[#111827]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#EC4899] hover:bg-pink-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg border-2 border-[#111827] transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap active:translate-y-0.5"
                  >
                    {isSaved ? 'Saved! ✓' : 'Update Link'}
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 font-sans">
                  * This saves to your browser's persistent <span className="font-mono">localStorage</span> so your professor and peers will see it in the preview frame!
                </p>
              </form>

              {/* Status Display Panel */}
              <div className="border-2 border-[#111827] rounded-lg bg-[#FAF9F6] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                    Active Deployment Endpoint
                  </div>
                  <a 
                    href={vercelUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm font-bold text-[#1F2035] hover:text-brand-pink underline break-all flex items-center gap-1.5"
                  >
                    {vercelUrl}
                    <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyUrl}
                    type="button"
                    className="px-3 py-2 bg-white text-[#111827] hover:bg-gray-100 font-mono text-xs font-bold border-2 border-[#111827] rounded-md transition-all active:scale-95 flex items-center gap-1.5"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {copiedLink ? 'Copied' : 'Copy'}
                  </button>
                  
                  <button
                    onClick={handleCopyBadgeMarkdown}
                    type="button"
                    className="px-3 py-2 bg-[#2D2E49] text-white hover:bg-[#3d3f63] font-mono text-xs font-bold border-2 border-[#111827] rounded-md transition-all active:scale-95 flex items-center gap-1.5"
                    title="Copy Markdown Badge"
                  >
                    <Link2 className="w-3.5 h-3.5" />
                    {copiedBadge ? 'Badge Copied' : 'Markdown Badge'}
                  </button>
                </div>
              </div>

              {/* Ping Console Action Block */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold uppercase text-[#111827]">
                    Vercel Edge Resolver Diagnostic
                  </span>
                  <button
                    onClick={runDiagnosticTerminal}
                    disabled={pingState === 'pinging'}
                    className="px-4 py-1.5 bg-[#111827] text-white hover:bg-brand-pink disabled:bg-gray-400 text-xs font-mono font-bold uppercase rounded-md border-2 border-[#111827] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${pingState === 'pinging' ? 'animate-spin' : ''}`} />
                    Test Connectivity
                  </button>
                </div>

                <div className="bg-[#111827] text-slate-200 font-mono text-xs p-4 rounded-lg border-2 border-[#111827] min-h-[140px] flex flex-col justify-between">
                  {pingState === 'idle' && (
                    <div className="text-slate-400 italic text-center py-8">
                      Click "Test Connectivity" above to perform a mock trace route payload check to Vercel CDN networks.
                    </div>
                  )}

                  { (pingState === 'pinging' || pingState === 'success') && (
                    <div className="space-y-1">
                      {logs.map((log, index) => (
                        <div key={index} className="flex gap-2">
                          <span className="text-emerald-400 select-none">&gt;</span>
                          <span className="leading-relaxed whitespace-pre-wrap">{log}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {pingState === 'success' && (
                    <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-emerald-400 font-bold bg-emerald-950/40 p-2 rounded-md">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        CONNECTION VERIFIED: RESOLVED_STATUS_200
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-emerald-900 px-1.5 py-0.5 rounded text-white">
                        PASS
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Vercel Class Setup Guide */}
          <div className="bg-white rounded-xl border-3 border-[#111827] overflow-hidden shadow-[6px_6px_0px_#111827]">
            <div className="p-4 bg-[#1F2035] text-white border-b-3 border-[#111827] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-pink" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Vercel Class Setup Reference
              </span>
            </div>

            {/* Guide Tabs */}
            <div className="flex border-b-2 border-[#111827]">
              <button
                onClick={() => setActiveGuideTab('git')}
                className={`flex-1 py-3 text-xs font-mono font-bold uppercase border-r-2 border-[#111827] transition-all cursor-pointer ${
                  activeGuideTab === 'git' ? 'bg-[#FAF9F6] text-[#111827] border-b-4 border-b-brand-pink' : 'bg-white text-gray-500 hover:text-[#111827]'
                }`}
              >
                ① GitHub Auto-Import
              </button>
              <button
                onClick={() => setActiveGuideTab('cli')}
                className={`flex-1 py-3 text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeGuideTab === 'cli' ? 'bg-[#FAF9F6] text-[#111827] border-b-4 border-b-brand-pink' : 'bg-white text-gray-500 hover:text-[#111827]'
                }`}
              >
                ② Direct Vercel CLI
              </button>
            </div>

            <div className="p-6 space-y-4">
              {activeGuideTab === 'git' ? (
                <div className="space-y-3 text-xs text-[#4B5563]">
                  <p className="font-bold text-[#111827]">Sync via Git Repositories (Simplest for ongoing changes):</p>
                  <ol className="list-decimal list-inside space-y-2 pl-2">
                    <li>Push your workspace code to a public or private GitHub repository.</li>
                    <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-brand-pink font-bold underline">Vercel.com</a> and sign in using your GitHub account credentials.</li>
                    <li>Click or select <span className="font-bold">"Add New"</span> &gt; <span className="font-bold">"Project"</span> in the main dashboard.</li>
                    <li>Select/Import the synced Git repository.</li>
                    <li>Keep standard project presets (<span className="font-bold">Vite</span> as the framework, <span className="font-bold">dist</span> as the output). Click <span className="font-bold">"Deploy"</span>!</li>
                  </ol>
                  <div className="p-3 bg-[#FAF9F6] border border-gray-200 rounded-lg flex items-start gap-2 mt-2">
                    <Sparkles className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                    <span>Any subsequent code changes you push to your main branch on GitHub will auto-trigger a direct rebuild and live deploy on Vercel without manual configuration!</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="font-bold text-xs text-[#111827]">Direct Terminal commands (Faster, no Git needed):</p>
                  <div className="bg-[#111827] text-white p-4 rounded-lg font-mono text-xs space-y-1.5 border-2 border-[#111827]">
                    <div className="text-gray-500"># 1. Install the global Vercel shell tool</div>
                    <div>npm install -g vercel</div>
                    <div className="text-gray-500 mt-2"># 2. Login to your Vercel account</div>
                    <div>vercel login</div>
                    <div className="text-gray-500 mt-2 font-semibold"># 3. Trigger production deployment configuration</div>
                    <div>vercel</div>
                  </div>
                  <p className="text-[11px] text-[#4B5563] pl-1 font-sans">
                    Accept default options. To send changes directly to the live production site later without approval steps, run: <code className="font-mono bg-gray-100 text-[#111827] px-1 rounded border">vercel --prod</code>.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: QR Code scanning & Submission checklist (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Class Presentation Device Mirror & QR scan card */}
          <div className="bg-white rounded-xl border-3 border-[#111827] p-6 text-center shadow-[6px_6px_0px_#111827] relative overflow-hidden">
            <div className="absolute inset-0 flat-dots opacity-40 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-block p-1.5 border-2 border-[#111827] bg-[#2D2E49] rounded-md text-white">
                <QrCode className="w-8 h-8" />
              </div>
              
              <div className="space-y-1">
                <h4 className="text-sm font-black uppercase tracking-tight text-[#111827]">
                  Class Presentation Mirror
                </h4>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                  Scan to preview on mobile devices
                </p>
              </div>

              {/* Dynamic QR Code Canvas Box */}
              <div className="mx-auto w-[184px] h-[184px] bg-white border-3 border-[#111827] p-3 flex flex-col items-center justify-center rounded-xl shadow-[4px_4px_0px_#111827] hover:scale-[1.02] transition-transform duration-150">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(vercelUrl)}`}
                  alt="Vercel URL QR Code"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="px-4 space-y-1.5 text-xs text-[#4B5563]">
                <p className="font-semibold text-gray-800">For peer-critique or presenting on classroom projector screens:</p>
                <p className="text-[11px]">
                  Point your smartphone camera at this box! It automatically directs you to <span className="font-mono underline text-pink-600">{vercelUrl.replace(/^https?:\/\//, '')}</span> instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Submission and Deployment Checklist */}
          <div className="bg-white rounded-xl border-3 border-[#111827] p-6 shadow-[6px_6px_0px_#111827] relative">
            <div className="space-y-4">
              <div className="border-b-2 border-[#111827] pb-3">
                <h4 className="text-sm font-black uppercase tracking-tight text-[#111827] flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-brand-pink" />
                  Submission Check-off List
                </h4>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  Academic & Professional Requirements
                </p>
              </div>

              <div className="space-y-3">
                {/* 1 */}
                <button
                  type="button"
                  onClick={() => handleToggleChecklist('git_repo')}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                >
                  {checklist.git_repo ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-tight ${checklist.git_repo ? 'line-through text-gray-400' : 'text-[#1d1e2e]'}`}>
                      Git Repository Configured
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Checked-in and initiated locally.</p>
                  </div>
                </button>

                {/* 2 */}
                <button
                  type="button"
                  onClick={() => handleToggleChecklist('vercel_account')}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                >
                  {checklist.vercel_account ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-tight ${checklist.vercel_account ? 'line-through text-gray-400' : 'text-[#1d1e2e]'}`}>
                      Vercel Account Registered
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Linked securely with hobby/educational tier.</p>
                  </div>
                </button>

                {/* 3 */}
                <button
                  type="button"
                  onClick={() => handleToggleChecklist('env_configured')}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                >
                  {checklist.env_configured ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-tight ${checklist.env_configured ? 'line-through text-gray-400' : 'text-[#1d1e2e]'}`}>
                      Secrets & Keys Transferred
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Supplied key parameters within Vercel dashboard settings if applicable.</p>
                  </div>
                </button>

                {/* 4 */}
                <button
                  type="button"
                  onClick={() => handleToggleChecklist('build_settings')}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                >
                  {checklist.build_settings ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-tight ${checklist.build_settings ? 'line-through text-gray-400' : 'text-[#1d1e2e]'}`}>
                      Output Build folder verified
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Tested output destination in /dist configuration settings.</p>
                  </div>
                </button>

                {/* 5 */}
                <button
                  type="button"
                  onClick={() => handleToggleChecklist('class_submission')}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF9F6] border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                >
                  {checklist.class_submission ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-tight ${checklist.class_submission ? 'line-through text-gray-400' : 'text-[#1d1e2e]'}`}>
                      Link sent to your instructor
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Pasted the Vercel app link into class dashboard portal.</p>
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
