import { GraduationCap, Beaker, Network, CheckCircle2, ArrowDown } from 'lucide-react';

export default function Flyer2() {
  const benefits = [
    { icon: <GraduationCap className="w-9 h-9" />, title: 'PRE-PRO ADVANTAGE', desc: 'Perfect for MD, MHA, MBA, and MPH tracks' },
    { icon: <Beaker className="w-9 h-9" />, title: 'REAL RESEARCH', desc: 'Contribute to peer-reviewed papers & products' },
    { icon: <Network className="w-9 h-9" />, title: 'DIRECT NETWORK', desc: 'Access to BYU faculty and industry CEOs' },
  ];

  const steps = [
    { num: '01', title: 'Register', desc: 'Enroll in HL 385R for Fall 2026' },
    { num: '02', title: 'Match', desc: 'Get paired with a faculty mentor' },
    { num: '03', title: 'Deliver', desc: 'Present real-world solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container */}
      <div className="w-[8.5in] h-[11in] bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden shadow-2xl print:shadow-none flex flex-col">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#002E5D 1px, transparent 1px), linear-gradient(90deg, #002E5D 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Decorative Circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#002E5D]/10 to-transparent rounded-full" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col px-12 py-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-black text-[#002E5D] tracking-tight">THE</span>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">HUB</span>
                <div className="w-px h-6 bg-gray-300 mx-1" />
                <span className="text-gray-600 font-medium">BYU Healthcare Leadership</span>
              </div>
              <span className="inline-block px-4 py-1.5 bg-[#002E5D] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                For Students • Fall 2026
              </span>
            </div>

            <div className="flex flex-col items-center bg-[#002E5D] p-4 rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=002E5D&color=ffffff"
                alt="Scan for more Information"
                className="w-24 h-24 rounded-lg"
              />
              <p className="text-[10px] text-white/80 mt-2 font-bold tracking-wider">SCAN FOR MORE INFO</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-10">
            <h1 className="text-6xl font-black text-[#002E5D] leading-[1.05] mb-4">
              Launch Your Career
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Before You Graduate
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Students in the Hub don&apos;t just study healthcare — they <strong>build</strong> it.
              Join our inaugural mentored research cohort.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-3 gap-5 mb-auto">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900/5 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-[#002E5D] mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xs font-black text-[#002E5D] tracking-wider mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Journey Steps */}
          <div className="bg-[#002E5D] rounded-2xl p-8 mt-10 mb-8">
            <h2 className="text-white font-bold text-base mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-300" />
              YOUR JOURNEY IN 3 STEPS
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-black text-white/10 absolute -top-2 -left-2">{step.num}</span>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-blue-200/80 text-sm">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#002E5D] font-bold text-base">Join the Waitlist</p>                   <ArrowDown className="w-5 h-5" />

              <p className="text-gray-500">Email: <span className="text-[#002E5D] font-semibold">isaacwil@byu.edu</span></p>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Brigham Young University</p>
          </div>
        </div>
      </div>
    </div>
  );
}
