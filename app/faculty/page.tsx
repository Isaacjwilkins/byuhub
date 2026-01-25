// app/faculty/page.tsx
'use client';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Handshake, 
  Coins, 
  GraduationCap,
  ClipboardCheck,
  ChevronRight
} from 'lucide-react';

export default function FacultyPage() {
  const pillars = [
    { 
      icon: <Coins className="text-accent" />, 
      title: "Strategic Funding", 
      desc: "Access dedicated internal grants specifically allocated to accelerate clinical and administrative research projects within The Hub." 
    },
    { 
      icon: <GraduationCap className="text-accent" />, 
      title: "Pre-Trained Mentees", 
      desc: "Skip the onboarding curve. Our students undergo rigorous training in professionalism and core research skills before joining your team." 
    },
    { 
      icon: <ClipboardCheck className="text-accent" />, 
      title: "Built-in Accountability", 
      desc: "We manage the project management. Our system tracks student milestones and hours to ensure your research stays on schedule." 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Hero Section */}
        <section className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Faculty Partnership</h2>
            <h1 className="text-5xl md:text-6xl font-black text-primary tracking-tight mb-8 leading-tight">
              Scale Your Research with <br />
              <span className="text-accent">Elite Student Capital.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Hub removes the friction of mentorship. We provide the institutional support, 
              funding, and pre-trained student talent you need to move from proposal to publication faster.
            </p>
          </motion.div>
        </section>

        {/* The Pillars Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] hover:shadow-xl transition-all border-transparent hover:border-accent/10"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Process & Consult Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Left: Transparency / Role Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Mentorship Transparency</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in a "Research-First" model. Your role is to provide the academic vision 
                and final oversight; we provide the hands to do the work.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary text-white rounded-lg mt-1"><Handshake size={20} /></div>
                <div>
                  <h4 className="font-bold text-primary">IP Protection</h4>
                  <p className="text-sm text-gray-500">All student deliverables are subject to standard BYU Intellectual Property policies.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary text-white rounded-lg mt-1"><TrendingUp size={20} /></div>
                <div>
                  <h4 className="font-bold text-primary">Publication Focused</h4>
                  <p className="text-sm text-gray-500">The end goal of every Hub project is a peer-reviewed publication or a tangible healthcare product.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Request a Consultation</h3>
              <p className="text-blue-100/70 mb-10">
                Ready to bring your research project into the Fall 2026 cohort? 
                Let's discuss your resource needs.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 placeholder:text-white/40 focus:ring-2 ring-accent outline-none transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 placeholder:text-white/40 focus:ring-2 ring-accent outline-none transition-all" />
                </div>
                <input type="text" placeholder="Department" className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 placeholder:text-white/40 focus:ring-2 ring-accent outline-none transition-all" />
                <textarea placeholder="Tell us briefly about your project goals..." rows={4} className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 placeholder:text-white/40 focus:ring-2 ring-accent outline-none transition-all" />
                
                <button className="w-full bg-accent text-white py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  Submit Request <ChevronRight size={20} />
                </button>
              </form>
            </div>

            {/* Background Gradient Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32" />
          </motion.div>
        </section>

        {/* Bottom Social Proof / Trust */}
        <section className="text-center py-20 border-t border-gray-100">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">Guided by Faculty Advisory</p>
          <div className="flex justify-center items-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold text-primary">Marriott School</div>
            <div className="text-2xl font-bold text-primary">College of Life Sciences</div>
            <div className="text-2xl font-bold text-primary">School of Medicine</div>
          </div>
        </section>
      </main>
    </div>
  );
}