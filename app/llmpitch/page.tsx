'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  DollarSign,
  Target,
  AlertTriangle,
  Calendar,
  FileText,
  Brain,
  Users,
  Building2,
  TrendingUp,
  Lock,
  Scale,
  Database,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Layers,
  Eye,
  EyeOff
} from 'lucide-react';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Slide 1: Title
function Slide1() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-8">
      <motion.div {...fadeInUp} className="mb-8">
        <Shield className="w-24 h-24 text-blue-500 mx-auto mb-6" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl md:text-8xl font-black text-white mb-6"
      >
        The Referral
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Firewall
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12"
      >
        Turning the "Black Hole" of Specialist Referrals into a High-Precision Recruitment Engine.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 max-w-4xl"
      >
        <p className="text-lg md:text-xl text-blue-200 italic leading-relaxed">
          "We don't sell software to doctors. We trade operational efficiency for access to the earliest, messiest, and most valuable data signal in healthcare: <span className="text-cyan-400 font-bold">The Pre-EHR Referral.</span>"
        </p>
      </motion.div>
    </div>
  );
}

// Slide 2: The Problem
function Slide2() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    {
      label: 'Referral',
      value: 'HIGH',
      color: 'from-green-500 to-emerald-500',
      desc: 'Patient symptoms are raw, messy, and urgent.'
    },
    {
      label: 'EHR Entry',
      value: 'LOW',
      color: 'from-yellow-500 to-orange-500',
      desc: 'Patient seen 6 months later, diagnosed, and coded.'
    },
    {
      label: 'Competitors',
      value: 'COMMODITIZED',
      color: 'from-red-500 to-rose-500',
      desc: 'Deep 6, TriNetX, Epic fight over post-EHR data.'
    },
  ];

  const problems = [
    { icon: <FileText className="w-6 h-6" />, title: 'The "Black Hole"', desc: '60% of specialist referrals arrive as unstructured faxes/PDFs. They sit in a pile for months.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'The Leak', desc: 'Clinics lose 30% of revenue to patient leakage (drop-off).' },
    { icon: <AlertTriangle className="w-6 h-6" />, title: 'The Miss', desc: 'Rare disease patients (Fabry, ALS, Pompe) sit undiagnosed for years because no one reads the "messy text."' },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-8">
        <span className="text-red-400 font-bold uppercase tracking-widest text-sm">The Problem</span>
        <h2 className="text-5xl font-black text-white mt-2">Why SaaS Fails</h2>
      </motion.div>

      {/* Data Lag Funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-10"
      >
        <div className="flex flex-col items-center gap-2 w-full max-w-2xl">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveStage(i)}
              onMouseLeave={() => setActiveStage(null)}
              whileHover={{ scale: 1.02 }}
              className={`relative cursor-pointer transition-all duration-300 ${
                activeStage === i ? 'z-10' : ''
              }`}
              style={{
                width: `${100 - i * 20}%`,
              }}
            >
              <div className={`bg-gradient-to-r ${stage.color} rounded-xl p-4 text-center shadow-lg`}>
                <p className="font-bold text-white text-lg">{stage.label}</p>
                <p className="text-white/80 text-sm">Value: {stage.value}</p>
              </div>
              <AnimatePresence>
                {activeStage === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-1/2 -translate-x-1/2 -bottom-16 bg-white text-gray-900 p-3 rounded-lg shadow-xl text-sm max-w-xs z-20"
                  >
                    {stage.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Problem Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mt-8"
      >
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ y: -5, borderColor: 'rgb(239 68 68)' }}
            className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 transition-colors"
          >
            <div className="text-red-400 mb-3">{p.icon}</div>
            <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-10"
      >
        <div className="inline-block bg-blue-900/30 border border-blue-500/30 rounded-full px-6 py-3">
          <p className="text-blue-300 font-medium">
            <Zap className="w-4 h-4 inline mr-2" />
            The Pivot: We go upstream to the Front Desk and fix the mess.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 3: The Solution
function Slide3() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    { icon: <FileText className="w-6 h-6" />, title: 'Layer 1: OCR + Entity Extraction', desc: 'Digitize the mess' },
    { icon: <Brain className="w-6 h-6" />, title: 'Layer 2: AI Triage Logic', desc: 'Urgent vs. Routine' },
    { icon: <Target className="w-6 h-6" />, title: 'Layer 3: Rare Disease Dragnet', desc: 'Matches against Pharma Criteria' },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-10">
        <span className="text-green-400 font-bold uppercase tracking-widest text-sm">The Solution</span>
        <h2 className="text-5xl font-black text-white mt-2">The "Intelligent Shield"</h2>
      </motion.div>

      {/* Flowchart */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
        {/* Input */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl p-6 text-center min-w-[200px]"
        >
          <FileText className="w-10 h-10 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-300 font-bold">INPUT</p>
          <p className="text-gray-500 text-sm mt-2">Messy Fax / PDF / Handwritten Note</p>
        </motion.div>

        <ArrowRight className="w-8 h-8 text-gray-600 hidden lg:block" />
        <div className="lg:hidden text-gray-600">↓</div>

        {/* The Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-6"
        >
          <div className="text-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-blue-300 font-bold">THE ENGINE</p>
          </div>

          <div className="space-y-3">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActiveLayer(i)}
                onMouseLeave={() => setActiveLayer(null)}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  activeLayer === i ? 'bg-blue-500/20 border border-blue-500/50' : 'bg-gray-800/50'
                }`}
              >
                <div className={`${activeLayer === i ? 'text-blue-400' : 'text-gray-500'}`}>
                  {layer.icon}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{layer.title}</p>
                  <p className="text-gray-400 text-xs">{layer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-3 p-3 bg-purple-900/30 rounded-lg">
              <Users className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-white font-medium text-sm">Human Loop</p>
                <p className="text-gray-400 text-xs">Med Students/RNs validate every flag</p>
              </div>
            </div>
          </div>
        </motion.div>

        <ArrowRight className="w-8 h-8 text-gray-600 hidden lg:block" />
        <div className="lg:hidden text-gray-600">↓</div>

        {/* Outputs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4 text-center">
            <p className="text-green-300 font-bold text-sm">To Scheduler</p>
            <p className="text-white text-sm mt-1">"Book this patient ASAP"</p>
          </div>
          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-4 text-center">
            <p className="text-cyan-300 font-bold text-sm">To Doctor</p>
            <p className="text-white text-sm mt-1">"Pre-Filled Genetic Test Requisition"</p>
            <p className="text-gray-400 text-xs mt-1">(Just sign here)</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-10"
      >
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We act as the clinic's <span className="text-blue-400 font-bold">"Intelligent Intake Department."</span> We automate the grunt work, and in the background, we hunt for gold.
        </p>
      </motion.div>
    </div>
  );
}

// Slide 4: Business Model
function Slide4() {
  const [activeStream, setActiveStream] = useState<'A' | 'B' | null>(null);

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-10">
        <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Business Model</span>
        <h2 className="text-5xl font-black text-white mt-2">The "Trojan Horse"</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Stream A */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onMouseEnter={() => setActiveStream('A')}
          onMouseLeave={() => setActiveStream(null)}
          className={`relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 rounded-2xl p-8 transition-all cursor-pointer ${
            activeStream === 'A' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700'
          }`}
        >
          <div className="absolute -top-4 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            Stream A
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 mt-2">The Wedge (Clinic Value)</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="text-gray-300 font-medium">Target</p>
                <p className="text-gray-500 text-sm">PE-backed Specialty Groups (Neuro/GI/Rheum)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="text-gray-300 font-medium">Offer</p>
                <p className="text-gray-500 text-sm">Automate intake & retrieval</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="text-gray-300 font-medium">Price</p>
                <p className="text-gray-500 text-sm">FMV Fee ($500-$1k/mo) – AKS Compliant</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
              <p className="text-blue-300 text-sm">
                <CheckCircle2 className="w-4 h-4 inline mr-2" />
                They get "clean operations" and stopped revenue leakage
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stream B */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onMouseEnter={() => setActiveStream('B')}
          onMouseLeave={() => setActiveStream(null)}
          className={`relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 rounded-2xl p-8 transition-all cursor-pointer ${
            activeStream === 'B' ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-gray-700'
          }`}
        >
          <div className="absolute -top-4 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            Stream B
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 mt-2">The Engine (Pharma Revenue)</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-green-400 mt-1" />
              <div>
                <p className="text-gray-300 font-medium">Target</p>
                <p className="text-gray-500 text-sm">BioPharma Sponsors (Vertex, Amgen)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-green-400 mt-1" />
              <div>
                <p className="text-gray-300 font-medium">Offer</p>
                <p className="text-gray-500 text-sm">"Pre-Diagnosis" Patient Recruitment</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-green-400 mt-1" />
              <div>
                <p className="text-gray-300 font-medium">Price: Milestone Bounties</p>
                <div className="text-sm mt-2 space-y-1">
                  <p className="text-gray-400">$500 → Test Ordered</p>
                  <p className="text-gray-400">$5,000 → Positive Result</p>
                  <p className="text-green-400 font-bold">$40,000 → Enrollment</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-10"
      >
        <div className="inline-block bg-gradient-to-r from-blue-900/30 to-green-900/30 border border-gray-700 rounded-xl px-8 py-4">
          <p className="text-xl text-white">
            <span className="text-blue-400">The Clinic pays for the lights.</span>
            {' '}
            <span className="text-green-400">Pharma pays for the profits.</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 5: Secret Sauce
function Slide5() {
  const [viewMode, setViewMode] = useState<'audit' | 'live'>('audit');

  const comparison = {
    audit: {
      title: 'The Audit (Sales Tool)',
      goal: 'Prove ROI to sign the deal',
      data: 'Historical Faxes + Internal Billing CSV',
      hie: 'BLOCKED (Safe Harbor)',
      outcome: '"We found $200k you missed last year."',
      icon: <EyeOff className="w-6 h-6" />,
    },
    live: {
      title: 'The Live Engine (Product)',
      goal: 'Daily Operations',
      data: 'Live Faxes + External HIE History',
      hie: 'ALLOWED ("Treatment" Purpose)',
      outcome: '"We found a patient today."',
      icon: <Eye className="w-6 h-6" />,
    }
  };

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-8">
        <span className="text-purple-400 font-bold uppercase tracking-widest text-sm">Technical Feasibility</span>
        <h2 className="text-5xl font-black text-white mt-2">The "Secret Sauce"</h2>
        <p className="text-gray-400 mt-2">Audit vs. Live</p>
      </motion.div>

      {/* Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-gray-800 rounded-full p-1 flex">
          <button
            onClick={() => setViewMode('audit')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              viewMode === 'audit'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <EyeOff className="w-4 h-4 inline mr-2" />
            Audit Mode
          </button>
          <button
            onClick={() => setViewMode('live')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              viewMode === 'live'
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4 inline mr-2" />
            Live Mode
          </button>
        </div>
      </motion.div>

      {/* Comparison Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-2xl mx-auto w-full"
        >
          <div className={`border-2 rounded-2xl p-8 ${
            viewMode === 'audit'
              ? 'bg-purple-900/20 border-purple-500/30'
              : 'bg-green-900/20 border-green-500/30'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={viewMode === 'audit' ? 'text-purple-400' : 'text-green-400'}>
                {comparison[viewMode].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{comparison[viewMode].title}</h3>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Goal', value: comparison[viewMode].goal },
                { label: 'Data', value: comparison[viewMode].data },
                { label: 'HIE Access', value: comparison[viewMode].hie },
                { label: 'Outcome', value: comparison[viewMode].outcome },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-gray-700/50 pb-3">
                  <span className="text-gray-400 font-medium">{item.label}</span>
                  <span className={`text-right ${
                    viewMode === 'audit' ? 'text-purple-300' : 'text-green-300'
                  }`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-8"
      >
        <p className="text-gray-300 max-w-2xl mx-auto">
          We acknowledge the HIE limits. We use a <span className="text-purple-400 font-bold">"Blind Audit"</span> to sell the deal,
          then turn on the <span className="text-green-400 font-bold">"Full HIE"</span> features only for active patients to stay legal.
        </p>
      </motion.div>
    </div>
  );
}

// Slide 6: Unit Economics
function Slide6() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { label: 'Monthly Volume', value: '5,000', sublabel: 'Referrals' },
    { label: 'Pharma Revenue', value: '$125,000', sublabel: '~30 tests, ~2 positive', color: 'text-green-400' },
    { label: 'Clinic Revenue', value: '$10,000', sublabel: 'SaaS Fees', color: 'text-blue-400' },
  ];

  const costs = [
    { label: 'AI Compute', value: '-$2,500' },
    { label: 'Human Ops Review', value: '-$6,000' },
    { label: 'Site Fees (Paid to PE)', value: '-$30,000' },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-8">
        <span className="text-green-400 font-bold uppercase tracking-widest text-sm">Unit Economics</span>
        <h2 className="text-5xl font-black text-white mt-2">The "Money Slide"</h2>
        <p className="text-gray-400 mt-2">P&L for ONE 10-Clinic PE Partner</p>
      </motion.div>

      <div className="max-w-3xl mx-auto w-full">
        {/* Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          {metrics.map((m, i) => (
            <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 text-center">
              <p className="text-gray-400 text-sm mb-1">{m.label}</p>
              <p className={`text-3xl font-black ${m.color || 'text-white'}`}>{m.value}</p>
              <p className="text-gray-500 text-xs mt-1">{m.sublabel}</p>
            </div>
          ))}
        </motion.div>

        {/* Costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6"
        >
          <p className="text-red-400 font-bold mb-4">COGS (Costs)</p>
          <div className="grid md:grid-cols-3 gap-4">
            {costs.map((c, i) => (
              <div key={i} className="flex justify-between md:flex-col md:text-center">
                <span className="text-gray-400 text-sm">{c.label}</span>
                <span className="text-red-400 font-bold">{c.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Net Profit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-green-300 font-medium mb-2">Net Profit</p>
              <motion.p
                className="text-5xl font-black text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimated ? 1 : 0 }}
              >
                ~$96,500
              </motion.p>
              <p className="text-green-300/70 text-sm mt-1">per month</p>
            </div>
            <div>
              <p className="text-green-300 font-medium mb-2">Margin</p>
              <motion.p
                className="text-5xl font-black text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimated ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                ~71%
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-400 mt-8"
      >
        We only need <span className="text-white font-bold">10 of these partners</span> to build a massive business. We don't need 1,000 individual doctors.
      </motion.p>
    </div>
  );
}

// Slide 7: Go-To-Market
function Slide7() {
  const steps = [
    { num: 1, text: 'Give us dead data (last year\'s PDF folder)' },
    { num: 2, text: 'We show you the lost revenue' },
    { num: 3, text: 'You sign the contract' },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-10">
        <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Go-To-Market</span>
        <h2 className="text-5xl font-black text-white mt-2">Strategy</h2>
      </motion.div>

      {/* Pyramid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4 mb-10"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-center w-full max-w-md shadow-lg shadow-cyan-500/20"
        >
          <Building2 className="w-8 h-8 text-white mx-auto mb-2" />
          <p className="text-white font-bold text-lg">The Target</p>
          <p className="text-cyan-100 text-sm">Operating Partners at PE Firms</p>
          <p className="text-cyan-200/70 text-xs mt-1">(KKR Health, Shore Capital)</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-blue-700/50 to-indigo-700/50 border border-blue-500/30 rounded-xl p-6 text-center w-full max-w-lg"
        >
          <DollarSign className="w-8 h-8 text-blue-300 mx-auto mb-2" />
          <p className="text-white font-bold text-lg">The Pitch</p>
          <p className="text-blue-200 text-sm">"EBITDA Multiplier"</p>
          <p className="text-blue-300/70 text-xs mt-1">We add $1M to your bottom line for free.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center w-full max-w-xl"
        >
          <Layers className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-white font-bold text-lg">The Wedge</p>
          <p className="text-gray-300 text-sm">"Retrospective Revenue Audit"</p>
        </motion.div>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex-1 bg-gray-900/50 border border-gray-700 rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold mb-3 mx-auto md:mx-0">
                {step.num}
              </div>
              <p className="text-gray-300 text-sm text-center md:text-left">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Slide 8: Risks & Mitigations
function Slide8() {
  const [activeRisk, setActiveRisk] = useState<number | null>(null);

  const risks = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Regulatory (Anti-Kickback)',
      risk: 'Offering "Free" value',
      fix: 'We charge FMV fees for software. We separate Data Fees. We leverage "Co-Development" agreements.',
      color: 'text-yellow-400',
      bg: 'bg-yellow-900/20',
      border: 'border-yellow-500/30',
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Liability (Malpractice)',
      risk: 'AI misses a patient',
      fix: '"Glass Wall" Policy. We are Admin Support. We prioritize scheduling; we never "deny" care. Human Review layer acts as a safety net.',
      color: 'text-orange-400',
      bg: 'bg-orange-900/20',
      border: 'border-orange-500/30',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Rights (The Asset)',
      risk: 'Clinic claims they own the data',
      fix: 'Our BAA explicitly grants "Derivative Rights to De-Identified Data." This is the hill we die on.',
      color: 'text-red-400',
      bg: 'bg-red-900/20',
      border: 'border-red-500/30',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-10">
        <span className="text-red-400 font-bold uppercase tracking-widest text-sm">Diligence Defense</span>
        <h2 className="text-5xl font-black text-white mt-2">Risks & Mitigations</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {risks.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            onMouseEnter={() => setActiveRisk(i)}
            onMouseLeave={() => setActiveRisk(null)}
            whileHover={{ scale: 1.02 }}
            className={`${r.bg} border ${r.border} rounded-2xl p-6 cursor-pointer transition-all ${
              activeRisk === i ? 'shadow-lg' : ''
            }`}
          >
            <div className={`${r.color} mb-4`}>{r.icon}</div>
            <h3 className="text-white font-bold text-lg mb-4">{r.title}</h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">Risk</span>
                </div>
                <p className="text-gray-400 text-sm">{r.risk}</p>
              </div>

              <AnimatePresence>
                {activeRisk === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">Fix</span>
                    </div>
                    <p className="text-gray-300 text-sm">{r.fix}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {activeRisk !== i && (
                <p className="text-gray-500 text-xs">Hover to see mitigation</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Slide 9: Roadmap
function Slide9() {
  const [activeMonth, setActiveMonth] = useState<number | null>(null);

  const timeline = [
    {
      month: 'Month 1',
      tasks: [
        'Finalize Legal (FMV Opinion + BAA Template)',
        'Build "MVP Fax Ingest" (OCR + Basic Logic)',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      month: 'Month 2-3',
      tasks: [
        'Secure 1 Pilot Partner (PE Group) for Retrospective Audit',
        'Hire "Ops Army" Lead (Part-time Medical Director/RN)',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      month: 'Month 4-6',
      tasks: [
        'Prove the "First Dollar" (Get paid for a Test Order)',
        'Raise Seed Round on the back of "Proven Commercial Traction"',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-8 py-12">
      <motion.div {...fadeInUp} className="text-center mb-10">
        <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Immediate Roadmap</span>
        <h2 className="text-5xl font-black text-white mt-2">Next 6 Months</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 hidden md:block" />

          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
              onMouseEnter={() => setActiveMonth(i)}
              onMouseLeave={() => setActiveMonth(null)}
              className={`relative flex items-center mb-6 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 bg-gray-900/50 border border-gray-700 rounded-xl p-6 ${
                  activeMonth === i ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/10' : ''
                }`}
              >
                <div className={`inline-block bg-gradient-to-r ${t.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-4`}>
                  {t.month}
                </div>
                <ul className="space-y-3">
                  {t.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 ${activeMonth === i ? 'text-green-400' : 'text-gray-600'}`} />
                      <span className="text-gray-300 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Dot */}
              <div className="hidden md:flex w-20 justify-center">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${t.color} z-10`} />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-10"
      >
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-xl text-white leading-relaxed">
            "Are we ready to stop building a tool for doctors who won't use it, and start building a <span className="text-indigo-400 font-bold">revenue engine</span> for PE firms who will?"
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Main Component
export default function LLMPitch() {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
  const totalSlides = 9;

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];
  const slideNames = [
    'The Big Idea',
    'The Problem',
    'The Solution',
    'Business Model',
    'Secret Sauce',
    'Unit Economics',
    'Go-To-Market',
    'Risks',
    'Roadmap'
  ];

  const paginate = useCallback((newDirection: number) => {
    const newSlide = currentSlide + newDirection;
    if (newSlide >= 0 && newSlide < totalSlides) {
      setCurrentSlide([newSlide, newDirection]);
    }
  }, [currentSlide, totalSlides]);

  const goToSlide = (index: number) => {
    const direction = index > currentSlide ? 1 : -1;
    setCurrentSlide([index, direction]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        paginate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Navigation Dots */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slideNames.map((name, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group relative"
          >
            <div className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            }`} />
            <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-gray-800 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Main Slide Area */}
      <div className="h-screen relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 pt-12 pb-20"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full transition-all ${
            currentSlide === 0
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <span className="text-gray-400 font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={() => paginate(1)}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 rounded-full transition-all ${
            currentSlide === totalSlides - 1
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-4 right-4 text-gray-600 text-xs z-50">
        Use ← → arrows or click to navigate
      </div>
    </div>
  );
}
