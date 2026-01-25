'use client';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Rocket, 
  ShieldCheck, 
  Lightbulb, 
  ChevronRight 
} from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: "Bill Tayler",
      role: "Faculty Advisor",
      description: "Marriott School of Business. Expert in accounting and healthcare incentives.",
      initials: "BT"
    },
    {
      name: "Britt Berrett",
      role: "Managing Director",
      description: "Healthcare Leadership Collaborative. Former CEO with a passion for mentorship.",
      initials: "BB"
    },
    {
      name: "Isaac Wilkins",
      role: "Student Lead",
      description: "Bridging the gap between student ambition and faculty expertise.",
      initials: "IW"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tight mb-6">
              The Architecture <br />
              <span className="text-accent">of Collaboration.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The BYU Hub was founded to solve a simple problem: talented students want to do research, 
              and faculty need help, but the connection process is fragmented.
            </p>
          </motion.div>
        </section>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-10 rounded-[2.5rem] col-span-1 md:col-span-2 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are building the infrastructure to make academic collaboration seamless. 
                By centralizing opportunities, we ensure that no project goes unstaffed and no 
                ambitious student goes without a mentor.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-between"
          >
            <div>
              <ShieldCheck className="text-accent mb-8" size={32} />
              <h2 className="text-2xl font-bold mb-4">Built on Trust</h2>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                Every connection made on The Hub is backed by institutional standards, 
                ensuring quality research for faculty and meaningful credit for students.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest">
              Learn More <ChevronRight size={16} />
            </div>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4 text-center md:text-left">Human Capital</h2>
              <h3 className="text-4xl font-bold text-primary text-center md:text-left">Guided by Experience</h3>
            </div>
            <p className="text-gray-500 max-w-sm text-center md:text-left">
              The Hub is a student-led initiative supported by seasoned faculty and industry professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl group border-transparent hover:border-accent/20 transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="text-xl font-black text-primary group-hover:text-white">{member.initials}</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-accent text-xs font-black uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Timeline */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass-card p-12 rounded-[3rem] border-dashed border-2 border-gray-200"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-accent/10 text-accent rounded-xl">
                <Rocket size={24} />
              </div>
              <h2 className="text-3xl font-bold text-primary">The 2026 Vision</h2>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20" />
                  <div className="w-0.5 h-full bg-gray-100 group-last:bg-transparent mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">Spring 2026: The Pilot</h4>
                  <p className="text-gray-500">Launching with 10 focused projects across the Marriott School and School of Medicine.</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-300 group-hover:bg-accent transition-colors" />
                  <div className="w-0.5 h-full bg-gray-100 mt-2" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-400 group-hover:text-primary transition-colors">Fall 2026: Campus Scale</h4>
                  <p className="text-gray-400">Expanding infrastructure to Life Sciences, Engineering, and Social Sciences.</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-400">Beyond: The Global Network</h4>
                  <p className="text-gray-400">Establishing The Hub as the standard for interdisciplinary student research.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}