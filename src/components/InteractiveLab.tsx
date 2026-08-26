import { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Binary, 
  Server, 
  Play, 
  RotateCcw, 
  ArrowRight, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Code2,
  Terminal,
  Activity
} from 'lucide-react';

export function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<'crypto' | 'dsa' | 'api'>('crypto');

  // Cryptography state
  const [plainText, setPlainText] = useState('CYBER_SECURITY_CBSE');
  const [shiftKey, setShiftKey] = useState(7);
  const [isDecryptMode, setIsDecryptMode] = useState(false);

  // Binary search state
  const arrayData = useMemo(() => [3, 8, 14, 22, 35, 47, 59, 68, 77, 88, 95], []);
  const [searchTarget, setSearchTarget] = useState(47);
  const [dsaStep, setDsaStep] = useState(0);
  const [dsaState, setDsaState] = useState<{
    low: number;
    high: number;
    mid: number;
    found: boolean;
    history: string[];
  }>({
    low: 0,
    high: arrayData.length - 1,
    mid: Math.floor((0 + arrayData.length - 1) / 2),
    found: false,
    history: ['Initialized search range: [0..10]']
  });

  // REST API Simulator state
  const [selectedEndpoint, setSelectedEndpoint] = useState<'balance' | 'transfer' | 'auth'>('balance');
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>({
    status: 200,
    latency: '38ms',
    timestamp: new Date().toISOString(),
    service: 'HSBC-Core-Banking-M&S-Gateway',
    payload: {
      accountNumber: 'GB82-HSBC-400515-98765432',
      currency: 'GBP',
      availableBalance: 24850.75,
      tier: 'Premier Retail',
      lastUpdated: '2026-08-26T10:30:00Z'
    }
  });

  // Crypto calculation
  const cipherOutput = useMemo(() => {
    return plainText
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          // Uppercase
          const effectiveShift = isDecryptMode ? (26 - (shiftKey % 26)) : shiftKey;
          return String.fromCharCode(((code - 65 + effectiveShift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          // Lowercase
          const effectiveShift = isDecryptMode ? (26 - (shiftKey % 26)) : shiftKey;
          return String.fromCharCode(((code - 97 + effectiveShift) % 26) + 97);
        }
        return char;
      })
      .join('');
  }, [plainText, shiftKey, isDecryptMode]);

  // Binary search step
  const executeDsaStep = () => {
    if (dsaState.found || dsaState.low > dsaState.high) return;

    const currentMid = Math.floor((dsaState.low + dsaState.high) / 2);
    const midVal = arrayData[currentMid];
    const newHistory = [...dsaState.history];

    if (midVal === searchTarget) {
      newHistory.push(`Found target ${searchTarget} at index ${currentMid}! O(log N) verification complete.`);
      setDsaState({
        ...dsaState,
        mid: currentMid,
        found: true,
        history: newHistory
      });
    } else if (midVal < searchTarget) {
      newHistory.push(`Element ${midVal} at mid index ${currentMid} < target ${searchTarget}. Shifting low pointer to ${currentMid + 1}.`);
      const nextLow = currentMid + 1;
      const nextMid = Math.floor((nextLow + dsaState.high) / 2);
      setDsaState({
        low: nextLow,
        high: dsaState.high,
        mid: nextMid,
        found: false,
        history: newHistory
      });
    } else {
      newHistory.push(`Element ${midVal} at mid index ${currentMid} > target ${searchTarget}. Shifting high pointer to ${currentMid - 1}.`);
      const nextHigh = currentMid - 1;
      const nextMid = Math.floor((dsaState.low + nextHigh) / 2);
      setDsaState({
        low: dsaState.low,
        high: nextHigh,
        mid: nextMid,
        found: false,
        history: newHistory
      });
    }
    setDsaStep(prev => prev + 1);
  };

  const resetDsa = () => {
    setDsaStep(0);
    setDsaState({
      low: 0,
      high: arrayData.length - 1,
      mid: Math.floor((0 + arrayData.length - 1) / 2),
      found: false,
      history: ['Reset search bounds: low=0, high=10']
    });
  };

  // Run API simulation
  const executeApiSimulation = (endpoint: 'balance' | 'transfer' | 'auth') => {
    setSelectedEndpoint(endpoint);
    setIsApiLoading(true);
    setTimeout(() => {
      setIsApiLoading(false);
      if (endpoint === 'balance') {
        setApiResponse({
          status: 200,
          latency: `${Math.floor(Math.random() * 25 + 20)}ms`,
          timestamp: new Date().toISOString(),
          service: 'HSBC-Core-Banking-M&S-Gateway',
          endpoint: 'GET /api/v1/accounts/savings/balance',
          payload: {
            accountNumber: 'GB82-HSBC-400515-98765432',
            currency: 'GBP',
            availableBalance: 24850.75,
            tier: 'Premier Retail',
            lastUpdated: new Date().toISOString()
          }
        });
      } else if (endpoint === 'transfer') {
        setApiResponse({
          status: 201,
          latency: `${Math.floor(Math.random() * 30 + 35)}ms`,
          timestamp: new Date().toISOString(),
          service: 'HSBC-Retail-Transfer-Microservice',
          endpoint: 'POST /api/v1/transfers/retail',
          payload: {
            transactionId: `TXN-${Math.floor(Math.random() * 899999 + 100000)}`,
            status: 'COMPLETED_CLEARED',
            amount: 750.00,
            currency: 'GBP',
            source: 'Savings Acc (...5432)',
            destination: 'Marks & Spencer Financial Services',
            settlementType: 'FASTER_PAYMENT_UK',
            consensusHash: '0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'
          }
        });
      } else {
        setApiResponse({
          status: 200,
          latency: `${Math.floor(Math.random() * 15 + 10)}ms`,
          timestamp: new Date().toISOString(),
          service: 'HSBC-OAuth2-Spring-Security-Service',
          endpoint: 'GET /api/v1/security/tokens/validate',
          payload: {
            valid: true,
            clientId: 'marks-and-spencer-banking-client-app',
            roles: ['ROLE_RETAIL_USER', 'ROLE_API_CONSUMER'],
            issuer: 'https://auth.hsbc.global.internal',
            jwtSignatureVerified: true,
            expiresInSeconds: 3599
          }
        });
      }
    }, 350);
  };

  return (
    <section id="lab" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEMOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            CS & Cryptography Teaching Lab
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live interactive simulators demonstrating concepts Kunal teaches in the classroom and engineered at HSBC.
          </p>
        </div>

        {/* Lab Nav Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            id="lab-tab-crypto"
            onClick={() => setActiveTab('crypto')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'crypto'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Cybersecurity Cryptography Studio</span>
          </button>

          <button
            id="lab-tab-dsa"
            onClick={() => setActiveTab('dsa')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'dsa'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Binary className="w-4 h-4" />
            <span>DSA Binary Search Visualizer</span>
          </button>

          <button
            id="lab-tab-api"
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'api'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Spring Boot Banking API Sandbox</span>
          </button>
        </div>

        {/* TAB 1: Cryptography Playground */}
        {activeTab === 'crypto' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-display font-bold text-white">
                    Caesar & Polyalphabetic Cipher Engine
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    St. John Cyber Club Curriculum
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Mathematical formula: <code className="text-cyan-300 font-mono">C = (P + K) mod 26</code>. Used in Class XII Cryptography club sessions.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsDecryptMode(!isDecryptMode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors ${
                    isDecryptMode
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  }`}
                >
                  {isDecryptMode ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                  <span>Mode: {isDecryptMode ? 'Decrypt' : 'Encrypt'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Configuration */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    INPUT TEXT (Plaintext / Ciphertext):
                  </label>
                  <input
                    type="text"
                    value={plainText}
                    onChange={(e) => setPlainText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 font-mono text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter text to encrypt or decrypt..."
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span>ROTATIONAL SHIFT KEY (K):</span>
                    <span className="text-cyan-400 font-bold text-sm">+{shiftKey}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={shiftKey}
                    onChange={(e) => setShiftKey(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>1 (ROT1)</span>
                    <span>13 (ROT13)</span>
                    <span>25 (ROT25)</span>
                  </div>
                </div>

                {/* Preset test buttons */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono text-slate-400">Try sample presets:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['KUNAL_MORE_PICT', 'SPRING_BOOT_REST_API', 'CYBER_SECURITY_CLUB', 'HSBC_BANKING'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setPlainText(preset)}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 text-xs font-mono transition-colors"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Output & Analysis */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">
                    TRANSFORMED OUTPUT:
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Length: {cipherOutput.length} chars
                  </span>
                </div>

                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 font-mono text-base font-bold text-emerald-400 break-all select-all tracking-widest">
                  {cipherOutput || '...'}
                </div>

                {/* Character Matrix Preview */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    Character Code Mapping (First 8 characters):
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 font-mono text-center text-xs">
                    {plainText.slice(0, 8).split('').map((char, i) => {
                      const outChar = cipherOutput[i] || '';
                      return (
                        <div key={i} className="p-1.5 bg-slate-900/90 rounded border border-slate-800">
                          <div className="text-slate-400 text-[10px]">{char}</div>
                          <div className="text-cyan-400 text-xs">↓</div>
                          <div className="text-emerald-400 font-bold">{outChar}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DSA Binary Search Visualizer */}
        {activeTab === 'dsa' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-display font-bold text-white">
                    Binary Search Algorithm Visualizer
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    DSA Problem Solving Mentorship
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Time Complexity: <code className="text-cyan-300 font-mono">O(log N)</code> • Space Complexity: <code className="text-cyan-300 font-mono">O(1)</code>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetDsa}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Search</span>
                </button>
                <button
                  onClick={executeDsaStep}
                  disabled={dsaState.found || dsaState.low > dsaState.high}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Step Algorithm</span>
                </button>
              </div>
            </div>

            {/* Target Selector */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Select Target Value:</span>
              <div className="flex flex-wrap gap-1.5">
                {arrayData.map((val) => (
                  <button
                    key={val}
                    onClick={() => {
                      setSearchTarget(val);
                      resetDsa();
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      searchTarget === val
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Array Grid */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400">Sorted Array Elements:</div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-2">
                {arrayData.map((val, idx) => {
                  const isLow = idx === dsaState.low;
                  const isHigh = idx === dsaState.high;
                  const isMid = idx === dsaState.mid;
                  const isMatch = isMid && val === searchTarget && dsaState.found;
                  const isInRange = idx >= dsaState.low && idx <= dsaState.high;

                  let borderClass = 'border-slate-800 bg-slate-950/60 opacity-40';
                  if (isMatch) {
                    borderClass = 'border-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/30 scale-105';
                  } else if (isMid) {
                    borderClass = 'border-cyan-400 bg-cyan-500/20 shadow-md scale-105';
                  } else if (isInRange) {
                    borderClass = 'border-slate-700 bg-slate-900 text-slate-100';
                  }

                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${borderClass}`}
                    >
                      <span className="text-[10px] font-mono text-slate-500">[{idx}]</span>
                      <span className="text-base font-display font-bold text-white">{val}</span>
                      
                      <div className="flex gap-1 mt-1 text-[9px] font-mono font-bold">
                        {isLow && <span className="text-amber-400">L</span>}
                        {isMid && <span className="text-cyan-400">M</span>}
                        {isHigh && <span className="text-purple-400">H</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stepper Log */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 font-mono text-xs">
              <div className="text-cyan-400 flex items-center justify-between">
                <span>EXECUTION LOGS (Step {dsaStep}):</span>
                {dsaState.found && (
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Target Located!
                  </span>
                )}
              </div>
              <div className="space-y-1 text-slate-300 max-h-32 overflow-y-auto">
                {dsaState.history.map((log, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-slate-600">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Spring Boot Banking API Sandbox */}
        {activeTab === 'api' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-display font-bold text-white">
                    HSBC Spring Boot Banking Microservice Gateway
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Enterprise Banking API
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Interactive REST API simulation of banking services built in collaboration with Marks & Spencer.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>Gateway Healthy</span>
                </span>
              </div>
            </div>

            {/* Endpoint Trigger Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => executeApiSimulation('balance')}
                className={`p-3 rounded-xl border text-left font-mono text-xs transition-all ${
                  selectedEndpoint === 'balance'
                    ? 'bg-slate-950 border-cyan-400 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">GET</span>
                  <span>/savings/balance</span>
                </div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Fetch live retail account balance & tier
                </div>
              </button>

              <button
                onClick={() => executeApiSimulation('transfer')}
                className={`p-3 rounded-xl border text-left font-mono text-xs transition-all ${
                  selectedEndpoint === 'transfer'
                    ? 'bg-slate-950 border-cyan-400 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30">POST</span>
                  <span>/transfers/retail</span>
                </div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Execute M&S transaction with consensus
                </div>
              </button>

              <button
                onClick={() => executeApiSimulation('auth')}
                className={`p-3 rounded-xl border text-left font-mono text-xs transition-all ${
                  selectedEndpoint === 'auth'
                    ? 'bg-slate-950 border-cyan-400 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-purple-400 font-bold mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30">GET</span>
                  <span>/security/tokens</span>
                </div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Verify OAuth2 JWT token validity
                </div>
              </button>
            </div>

            {/* Live Response Payload Visualizer */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">RESPONSE STATUS:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold">
                    {apiResponse.status} OK
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    Latency: <strong className="text-slate-200">{apiResponse.latency}</strong>
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Service: {apiResponse.service}
                </span>
              </div>

              {isApiLoading ? (
                <div className="py-8 text-center text-slate-400 flex items-center justify-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                  <span>Processing REST API Request on AWS Microservice...</span>
                </div>
              ) : (
                <pre className="text-emerald-300/90 text-xs overflow-x-auto leading-relaxed p-2 bg-slate-900/60 rounded-lg">
                  {JSON.stringify(apiResponse.payload, null, 2)}
                </pre>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
