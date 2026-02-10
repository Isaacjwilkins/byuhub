import { Beaker, Users, Calendar, ArrowRight, ArrowDown } from 'lucide-react';

export default function Flyer1() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container */}
      <div className="w-[8.5in] h-[11in] bg-[#002E5D] relative overflow-hidden shadow-2xl print:shadow-none flex flex-col">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col px-12 py-12">
          {/* Header Badge */}
          <div className="text-center mb-10">
            <span className="inline-block px-6 py-2.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-bold tracking-widest uppercase">
              Fall 2026 • First Cohort
            </span>
          </div>

          {/* Main Title */}
          <div className="text-center mb-10">
            <h1 className="text-7xl font-black text-white leading-[0.95] mb-5">
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

          {/* Logo/Brand */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
              <span className="text-3xl font-black text-white tracking-tight">THE</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">HUB</span>
              <span className="text-white/40 mx-2">|</span>
              <span className="text-white/80 font-medium">BYU Healthcare Leadership</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-5 mb-12">
            {[
              { icon: <Beaker className="w-7 h-7" />, value: '10+', label: 'Research Projects' },
              { icon: <Users className="w-7 h-7" />, value: '3', label: 'Colleges' },
              { icon: <Calendar className="w-7 h-7" />, value: 'HL 385R', label: 'Course Credit' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-blue-300 mb-3 flex justify-center">{stat.icon}</div>
                <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="text-center mb-auto px-6">
            <p className="text-lg text-white/70 leading-relaxed">
              The BYU Healthcare Research Hub connects ambitious students with BYU faculty
              and industry partners to deliver real products that make a difference.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="bg-white rounded-2xl p-8 mt-10">
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-6">
                <p className="text-[#002E5D] font-bold text-lg mb-2">
                  Perfect for MD, MHA, MBA, & MPH tracks
                </p>
                <p className="text-gray-600 mb-4">
                  Gain real research experience before you graduate.
                </p>
                <div className="flex items-center gap-2 text-[#002E5D] font-black">
                  <span>JOIN THE WAITLIST</span>
                  <ArrowDown className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-500 mt-2">isaacwil@byu.edu</p>
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
          <p className="text-center text-white/40 text-sm mt-6">
            © 2026 Brigham Young University • Marriott School of Business
          </p>
        </div>
      </div>
    </div>
  );
}
