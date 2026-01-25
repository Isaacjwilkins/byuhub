// app/students/page.tsx
'use client';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Beaker, Zap, ArrowRight, Mail } from 'lucide-react';

export default function StudentPage() {
  const roadmap = [
    { title: "Register for HL 385R", date: "Fall 2026", desc: "Enroll in the core research credit course." },
    { title: "Mentorship Match", date: "September", desc: "Get paired with a faculty member based on your post-grad goals." },
    { title: "Deliverables", date: "December", desc: "Present real-world healthcare products or publications." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-6 py-20 max-w-6xl">
        <section className="text-center mb-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="inline-block px-4 py-2 bg-blue-50 text-accent rounded-full text-xs font-black uppercase tracking-widest mb-6">Coming Fall 2026</span>
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-8 leading-tight">
              Launch Your Career <br /><span className="text-accent">Before You Graduate.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Students in the Hub don't just study healthcare; they build it. Register for <b>HL 385R</b> to join our inaugural mentored cohort.
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <GraduationCap />, title: "Pre-Pro Advantage", desc: "Perfect for MD, MHA, MBA, and MPH tracks." },
            { icon: <Beaker />, title: "Real Research", desc: "Contribute to peer-reviewed papers and industry products." },
            { icon: <Zap />, title: "Network", desc: "Direct access to BYU faculty and industry CEOs." }
          ].map((item, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <section className="mb-32 relative">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">The Student Journey</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {roadmap.map((step, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black z-10">{i+1}</div>
                  <div className="w-0.5 h-full bg-gray-200 mt-2" />
                </div>
                <div className="glass-card p-8 rounded-3xl flex-grow group-hover:border-accent/30 transition-all">
                  <span className="text-accent font-black text-xs uppercase">{step.date}</span>
                  <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Join the Student Waitlist</h2>
            <p className="text-blue-100/70 mb-10 max-w-lg mx-auto">Be the first to know when HL 385R registration opens and get project previews.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="BYU Email" className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 ring-accent" />
              <button className="bg-white text-primary px-8 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                Join <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}