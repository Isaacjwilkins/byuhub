'use client';
import Navbar from '@/components/navbar';
import { MOCK_PROJECTS } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Users, Shield, ArrowLeft, Send } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = MOCK_PROJECTS.find(p => p.id === id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <Link href="/research" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold text-sm mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Research
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-accent text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed italic">
                "{project.description}"
              </p>
            </motion.div>

            <div className="glass-card p-10 rounded-[2.5rem] border-transparent shadow-xl shadow-blue-900/5">
              <h2 className="text-2xl font-bold text-primary mb-6">About the Research</h2>
              <div className="prose prose-blue text-gray-600 leading-relaxed space-y-4">
                <p>This project is currently in the <strong>{project.status}</strong> phase. Our team is investigating the fundamental connections between theory and practice in the field of {project.category.toLowerCase()}.</p>
                <p>Selected students will work closely with faculty mentors to gather data, conduct literature reviews, and eventually contribute to peer-reviewed publications.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary p-8 rounded-[2rem] text-white shadow-2xl shadow-blue-900/20"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield size={20} className="text-accent" /> Learn More
              </h3>
              <p className="text-blue-100/70 text-sm mb-8">
                This project is currently {project.status === 'recruiting' ? 'accepting new applications.' : 'active but check back soon.'}
              </p>
              <button className="w-full bg-white text-primary py-4 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2 active:scale-95">
                <Send size={16} /> Get in Contact
              </button>
            </motion.div>

            <div className="glass-card p-8 rounded-[2rem]">
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <Users size={20} className="text-accent" /> Research Team
              </h3>
              <div className="space-y-4">
                {project.teamMembers.map((member) => (
                  <Link 
                    key={member.id} 
                    href={`/u/${member.username}`}
                    className="flex items-center gap-4 group p-2 rounded-2xl hover:bg-blue-50 transition-all"
                  >
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xs">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{member.name}</p>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{member.role}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}