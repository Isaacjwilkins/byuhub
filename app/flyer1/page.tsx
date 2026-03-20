'use client';

import DownloadPdfButton from '@/components/DownloadPdfButton';

export default function Flyer1() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container - Geometric Brutalist */}
      <div className="w-[8.5in] h-[11in] bg-[#002E5D] relative overflow-hidden shadow-2xl print:shadow-none">

        {/* CSS Art - Massive Geometric Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rotate-45 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute top-20 right-20 w-[300px] h-[300px] border-[20px] border-cyan-400/30 rotate-12" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/40 to-transparent -translate-x-1/2 translate-y-1/4 rounded-full" />
        <div className="absolute top-1/3 left-10 w-[150px] h-[150px] border-[15px] border-white/10 rounded-full" />
        <div className="absolute bottom-40 right-10 w-[80px] h-[80px] bg-cyan-400/20 rotate-45" />

        {/* Diagonal Line Grid */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute h-[1px] w-[200%] bg-white -rotate-45" style={{ top: `${i * 80}px`, left: '-50%' }} />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-12">

          {/* Top Badge */}
          <div className="flex justify-between items-start mb-6">
            <span className="inline-block px-5 py-2 bg-cyan-400 text-[#002E5D] text-xs font-black tracking-[0.2em] uppercase">
              Fall 2026 • First Cohort
            </span>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=ffffff&color=002E5D"
                alt="Scan to learn more"
                className="w-28 h-28"
              />
              <p className="text-[10px] text-[#002E5D] mt-2 font-bold tracking-wider">LEARN MORE</p>
            </div>
          </div>

          {/* Main Title - Brutalist Typography */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-[100px] font-black text-white leading-[0.85] tracking-tighter">
              GET
            </h1>
            <h1 className="text-[100px] font-black text-white/40 leading-[0.85] tracking-tighter">
              REAL
            </h1>
            <h1 className="text-[100px] font-black text-cyan-400 leading-[0.85] tracking-tighter">
              RESEARCH
            </h1>

            <p className="text-xl text-white/80 mt-8 max-w-lg leading-relaxed">
              <span className="text-white font-bold">The Hub</span> is a mentored research program where you
              <span className="text-cyan-400 font-bold"> participate in real healthcare research</span> alongside
              faculty from the College of Life Sciences, Marriott School of Business, and more.
            </p>
          </div>

          {/* What You Get */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Real Research', sub: 'Work on actual faculty projects' },
              { label: 'Faculty Mentor', sub: 'Learn from experts' },
              { label: 'Course Credit', sub: 'HL 385/685' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <p className="text-white font-bold text-sm">{item.label}</p>
                <p className="text-white/60 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-2xl p-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-black text-[#002E5D]">THE HUB</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-sm">BYU Healthcare Leadership</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Perfect for MD, MHA, MBA, and MPH tracks</p>
              <p className="text-[#002E5D] text-sm">Contact Isaac Wilkins for an add code: <span className="font-semibold">isaacwil@byu.edu</span></p>
            </div>
          </div>
        </div>
      </div>

      <DownloadPdfButton />
    </div>
  );
}
