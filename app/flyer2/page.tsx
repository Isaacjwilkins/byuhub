'use client';

import DownloadPdfButton from '@/components/DownloadPdfButton';

export default function Flyer2() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container - Transform Healthcare (Old Flyer 1 style) */}
      <div className="w-[8.5in] h-[11in] bg-[#002E5D] relative overflow-hidden shadow-2xl print:shadow-none flex flex-col">

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-[200px] h-[200px] border border-white/5 rounded-full" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col px-12 py-10">

          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20">
              <span className="text-2xl font-black text-white tracking-tight">THE</span>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">HUB</span>
              <span className="text-white/40 mx-1">|</span>
              <span className="text-white/80 font-medium text-sm">BYU Healthcare Leadership</span>
            </div>
            <span className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-bold tracking-widest uppercase">
              Fall 2026 • First Cohort
            </span>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-7xl font-black text-white leading-[0.95] mb-4">
              TRANSFORM
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300">
                HEALTHCARE
              </span>
            </h1>
            <p className="text-2xl text-white/80 font-light">
              Through Mentored Research
            </p>
          </div>

          {/* Description */}
          <div className="text-center mb-8 px-8">
            <p className="text-lg text-white/70 leading-relaxed">
              The Hub is a mentored research program connecting students with faculty
              across the College of Life Sciences, Marriott School of Business, and more.
              <span className="text-white font-semibold"> Participate in real healthcare research</span> and
              gain hands-on experience before you graduate.
            </p>
          </div>

          {/* What You Get */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { title: 'Real Research', desc: 'Work alongside faculty on actual healthcare projects' },
              { title: 'Faculty Mentor', desc: 'Get paired with an expert to guide your learning' },
              { title: 'Course Credit', desc: 'Enroll in HL 385/685' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xl font-black text-white mb-3">{item.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center text-white/50 text-lg italic mb-6">
            &ldquo;Don&apos;t just study healthcare — help build it.&rdquo;
          </p>

          {/* Bottom Section */}
          <div className="bg-white rounded-2xl p-6 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-6">
                <p className="text-[#002E5D] font-bold text-lg mb-1">
                  Perfect for MD, MHA, MBA, & MPH tracks
                </p>
                <p className="text-gray-600 mb-3">
                  Gain real research experience before you graduate.
                </p>
                <p className="text-gray-700 text-sm">
                  Contact Isaac Wilkins for an add code: <span className="font-semibold text-[#002E5D]">isaacwil@byu.edu</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=ffffff&color=002E5D"
                  alt="Scan to learn more"
                  className="w-28 h-28 rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2 font-medium">SCAN TO LEARN MORE</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-white/40 text-sm mt-4">
            Brigham Young University • Marriott School of Business
          </p>
        </div>
      </div>

      <DownloadPdfButton />
    </div>
  );
}
