import { Microscope, HeartPulse, TrendingUp, Cpu, FlaskConical } from 'lucide-react';

export default function Flyer3() {
  const projects = [
    {
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      category: 'CLINICAL',
      title: 'Naltrexone for Compulsive Behavior',
      desc: 'Pilot clinical trial testing efficacy for behavioral health outcomes.'
    },
    {
      icon: <Microscope className="w-6 h-6 text-white" />,
      category: 'PUBLIC HEALTH',
      title: 'Digital Health Equity for Immigrants',
      desc: 'Analyzing healthcare access barriers for Spanish-speaking populations.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      category: 'FINANCE',
      title: 'Venture Capital in Healthcare',
      desc: 'Impact of early-stage funding on medical device innovation rates.'
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-white" />,
      category: 'ACCOUNTING',
      title: 'Payment Structures in Outpatient Care',
      desc: 'Advanced modeling of reaction kinetics and thermodynamic stability.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      category: 'TECH',
      title: 'Digital Health Platform Development',
      desc: 'Building digital infrastructure to connect patients with primary care.'
    }
  ];

  const colors = [
    'from-rose-500 to-pink-600',
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-violet-500 to-purple-600',
  ];

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 print:p-0 print:bg-white">
      {/* 8.5x11 Paper Container */}
      <div className="w-[8.5in] h-[11in] bg-white relative overflow-hidden shadow-2xl print:shadow-none flex flex-col">
        
        {/* Top Navy Section */}
        <div className="bg-[#002E5D] px-10 pt-8 pb-8 relative shrink-0">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />

          {/* Header Row */}
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white tracking-tight">THE</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">HUB</span>
              <div className="w-px h-7 bg-white/30 mx-2" />
              <span className="text-white/80 font-medium leading-tight text-sm">BYU Healthcare<br/>Leadership</span>
            </div>

            <div className="bg-white p-3 rounded-xl shadow-xl flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmarriott.byu.edu%2Fhealthcare-leadership%2Fresearch%2Fthe-hub%2F&bgcolor=ffffff&color=002E5D"
                alt="Scan for more info"
                className="w-24 h-24"
              />
              <p className="text-[9px] text-[#002E5D] mt-2 font-bold tracking-wider text-center">LEARN MORE</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="relative z-10">
            <h1 className="text-5xl font-black text-white leading-tight mb-2">
              Real Research.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300">
                Real Impact.
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-xl">
              Join faculty-mentored projects across clinical, social science, finance, and technology domains.
            </p>
          </div>
        </div>

        {/* Projects Section (Flexible Height) */}
        <div className="flex-1 px-10 py-6 flex flex-col justify-center">
          <h2 className="text-xs font-black text-gray-400 tracking-widest mb-4 uppercase">Example Research Projects</h2>
          <div className="space-y-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-3 border border-gray-100 shadow-sm"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${colors[i]} rounded-lg flex items-center justify-center shadow-sm shrink-0`}>
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-[#002E5D] leading-tight truncate pr-2">{project.title}</h3>
                    <span className="text-[9px] font-black text-gray-400 tracking-wider shrink-0">{project.category}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="px-10 pb-8 shrink-0">
          <div className="bg-gradient-to-r from-[#002E5D] to-indigo-900 rounded-2xl p-5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-6">
              <div className="text-center px-4 border-r border-white/20">
                <p className="text-3xl font-black text-white">10+</p>
                <p className="text-[9px] text-blue-200 font-medium uppercase tracking-wider">Projects</p>
              </div>
              <div className="text-center px-4 border-r border-white/20">
                <p className="text-3xl font-black text-white">3</p>
                <p className="text-[9px] text-blue-200 font-medium uppercase tracking-wider">Colleges</p>
              </div>
              <div className="text-center px-4">
                <p className="text-3xl font-black text-white">Fall &apos;26</p>
                <p className="text-[9px] text-blue-200 font-medium uppercase tracking-wider">Launch</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-white font-bold text-sm mb-0.5">Want your project here?</p>
              <p className="text-blue-200/80 text-xs mb-2">Faculty & Students Welcome</p>
              <div className="inline-block bg-white text-[#002E5D] px-4 py-2 rounded-lg font-bold text-xs">
                isaacwil@byu.edu
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-[10px] text-gray-400 font-medium">
            <p>Marriott School of Business • College of Life Sciences • School of Medicine</p>
            <p>© 2026 Brigham Young University</p>
          </div>
        </div>
      </div>
    </div>
  );
}
