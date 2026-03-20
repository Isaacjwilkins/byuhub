'use client';

import DownloadPdfButton from '@/components/DownloadPdfButton';

export default function Flyer4() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container - Neon/Dark Mode */}
      <div className="w-[8.5in] h-[11in] bg-[#0a0f1a] relative overflow-hidden shadow-2xl print:shadow-none">

        {/* CSS Art - Neon Grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {/* Glowing Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

        {/* Neon Accents */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]" />
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-purple-500/20 blur-[60px]" />
        <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-blue-500/30 blur-[50px]" />

        {/* Geometric Neon Shapes - Top Right */}
        <div className="absolute top-40 right-40 w-20 h-20 border-2 border-cyan-400/50 rotate-45" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }} />
        <div className="absolute top-64 right-24 w-8 h-8 border border-cyan-400/30 rotate-12" />
        <div className="absolute top-28 right-72 w-6 h-6 bg-cyan-400/10 rotate-45" />
        <div className="absolute top-52 right-56 w-4 h-4 bg-purple-400/20 rounded-full" />
        <div className="absolute top-72 right-48 w-10 h-10 border border-white/10 rounded-full" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-12">

          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>THE HUB</span>
              <span className="text-white/30">|</span>
              <span className="text-gray-400 text-sm">BYU Healthcare Leadership</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-4 py-2 border border-cyan-400/50 text-cyan-400 text-xs font-bold tracking-wider" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}>
                FALL 2026 • FIRST COHORT
              </span>
              <div className="bg-white p-3 rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=ffffff&color=0a0f1a"
                  alt="Scan to learn more"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-cyan-400 text-sm font-bold tracking-[0.3em] mb-4" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
              MENTORED RESEARCH PROGRAM
            </p>

            <h1 className="text-7xl font-black text-white leading-[0.95] mb-6">
              <span style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>BUILD</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400" style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))' }}>
                YOUR
              </span>
              <br />
              <span style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>FUTURE</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-8">
              <span className="text-white">The Hub</span> pairs you with faculty mentors to
              <span className="text-cyan-400"> participate in real healthcare research</span>.
              Work with professors across the College of Life Sciences, Marriott School of Business, and more.
            </p>

            {/* What You Get */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Real Research', sub: 'Work on faculty projects' },
                { label: 'Faculty Mentor', sub: 'Learn from experts' },
                { label: 'Course Credit', sub: 'HL 385/685' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <p className="text-white font-bold mb-1">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-lg italic">
              &ldquo;Don&apos;t just study healthcare — help build it.&rdquo;
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-between p-6 border border-cyan-400/30 rounded-2xl" style={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.1)' }}>
            <div>
              <p className="text-gray-400 text-sm mb-1">Perfect for MD, MHA, MBA, MPH tracks • Enroll in HL 385/685</p>
              <p className="text-white text-sm">
                Contact Isaac Wilkins for an add code: <span className="text-cyan-400 font-semibold">isaacwil@byu.edu</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <DownloadPdfButton />
    </div>
  );
}
