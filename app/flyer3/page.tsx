'use client';

import DownloadPdfButton from '@/components/DownloadPdfButton';

export default function Flyer3() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container - Launch Your Career (Old Flyer 2 style) */}
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
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-black text-[#002E5D] tracking-tight">THE</span>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">HUB</span>
                <div className="w-px h-6 bg-gray-300 mx-1" />
                <span className="text-gray-600 font-medium">BYU Healthcare Leadership</span>
              </div>
              <span className="inline-block px-4 py-1.5 bg-[#002E5D] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                Fall 2026 • First Cohort
              </span>
            </div>

            <div className="flex flex-col items-center bg-[#002E5D] p-4 rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=002E5D&color=ffffff"
                alt="Scan for more Information"
                className="w-24 h-24 rounded-lg"
              />
              <p className="text-[9px] text-white/80 mt-2 font-bold tracking-wider">SCAN FOR INFO</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-6xl font-black text-[#002E5D] leading-[1.05] mb-3">
              Launch Your Career
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Before You Graduate
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              The Hub is a <strong>mentored research program</strong> where you participate in
              real healthcare research alongside faculty from the College of Life Sciences,
              Marriott School of Business, and more.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { num: '01', title: 'Real Research', desc: 'Work alongside faculty on actual healthcare projects' },
              { num: '02', title: 'Faculty Mentorship', desc: 'Get paired with an expert who guides your learning' },
              { num: '03', title: 'Real Experience', desc: 'Build skills for MD, MHA, MBA, and MPH tracks' },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow-lg shadow-blue-900/5 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-[#002E5D] mb-4">
                  <span className="font-black">{benefit.num}</span>
                </div>
                <h3 className="text-sm font-bold text-[#002E5D] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-[#002E5D] rounded-2xl p-6 mb-6">
            <h2 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">How It Works</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Contact Isaac', desc: 'Email for an add code to enroll' },
                { step: '2', title: 'Get Matched', desc: 'Pair with a faculty mentor in your area' },
                { step: '3', title: 'Do Research', desc: 'Participate in real healthcare projects' },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="text-5xl font-black text-white/10 absolute -top-1 -left-1">{item.step}</span>
                  <div className="relative z-10 pt-6">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-blue-200/80 text-sm">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex justify-between items-center mt-auto">
            <div>
              <p className="text-gray-500 text-sm mb-1">Enroll in HL 385/685</p>
              <p className="text-gray-700">
                Contact Isaac Wilkins for an add code: <span className="font-semibold text-[#002E5D]">isaacwil@byu.edu</span>
              </p>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Brigham Young University</p>
          </div>
        </div>
      </div>

      <DownloadPdfButton />
    </div>
  );
}
