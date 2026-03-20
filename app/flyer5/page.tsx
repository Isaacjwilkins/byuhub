'use client';

import DownloadPdfButton from '@/components/DownloadPdfButton';

export default function Flyer5() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container - Isometric/3D Blocks */}
      <div className="w-[8.5in] h-[11in] bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden shadow-2xl print:shadow-none">

        {/* CSS Art - Isometric Cubes */}
        <div className="absolute top-10 right-10">
          <div className="relative w-48 h-48">
            {/* Main cube face */}
            <div className="absolute w-32 h-32 bg-[#002E5D] transform skewY(-30deg) translate-x-8" />
            {/* Right face */}
            <div className="absolute w-16 h-32 bg-[#001f3f] transform skewY(30deg) translate-x-40 translate-y-8" />
            {/* Top face */}
            <div className="absolute w-32 h-16 bg-cyan-500 transform -translate-y-8 translate-x-8"
                 style={{ transform: 'rotateX(60deg) skewX(-30deg) scaleY(0.864) translateX(32px) translateY(-32px)' }} />
          </div>
        </div>

        {/* More geometric blocks */}
        <div className="absolute top-60 right-32 w-16 h-16 bg-[#002E5D]/20 transform rotate-45" />
        <div className="absolute top-72 right-20 w-12 h-12 bg-cyan-400/30 transform rotate-45" />

        {/* Bottom left blocks */}
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#002E5D]/10 transform rotate-45" />
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-[#002E5D]/20 transform rotate-45" />

        {/* Stacked rectangles */}
        <div className="absolute bottom-20 right-20">
          <div className="w-40 h-6 bg-[#002E5D]/60 transform skewX(-20deg)" />
          <div className="w-36 h-6 bg-[#002E5D]/40 transform skewX(-20deg) -translate-y-1" />
          <div className="w-32 h-6 bg-[#002E5D]/20 transform skewX(-20deg) -translate-y-2" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-12">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#002E5D] flex items-center justify-center transform rotate-45">
                <span className="text-white font-black text-lg transform -rotate-45">H</span>
              </div>
              <div>
                <span className="text-xl font-black text-[#002E5D]">THE HUB</span>
                <p className="text-gray-500 text-sm">BYU Healthcare Leadership</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-cyan-400/20 text-cyan-700 text-xs font-bold tracking-wider rounded-full mr-[1in]">
                FALL 2026 • FIRST COHORT
              </span>
              <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=ffffff&color=002E5D"
                  alt="Scan to learn more"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">
            <p className="text-cyan-600 text-sm font-bold tracking-wider mb-4">MENTORED RESEARCH PROGRAM</p>

            <h1 className="text-6xl font-black text-[#002E5D] leading-[1.05] mb-6">
              Build Real
              <br />
              Research
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Experience
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <span className="font-bold text-[#002E5D]">The Hub</span> pairs you with faculty mentors
              to <span className="font-bold text-cyan-600">participate in real healthcare research</span>.
              Work with professors across the College of Life Sciences, Marriott School of Business, and more.
            </p>

            {/* Feature blocks */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Real Research', sub: 'Work on faculty projects' },
                { label: 'Faculty Mentor', sub: 'Learn from experts' },
                { label: 'Course Credit', sub: 'HL 385/685' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-3 h-3 bg-[#002E5D] transform rotate-45 mb-3" />
                  <span className="text-[#002E5D] font-bold text-sm block">{item.label}</span>
                  <span className="text-gray-500 text-xs">{item.sub}</span>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-lg italic">
              &ldquo;Don&apos;t just study healthcare — help build it.&rdquo;
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#002E5D] p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm mb-1">Perfect for MD, MHA, MBA, MPH tracks</p>
              <p className="text-white text-sm">
                Contact Isaac Wilkins for an add code: <span className="text-cyan-300 font-semibold">isaacwil@byu.edu</span>
              </p>
            </div>
            <p className="text-white/40 text-xs">Enroll in HL 385/685</p>
          </div>
        </div>
      </div>

      <DownloadPdfButton />
    </div>
  );
}
