'use client';
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/projectcard';
import { MOCK_USERS, MOCK_PROJECTS } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { useParams, notFound } from 'next/navigation';
import { Linkedin, Mail, BadgeCheck, GraduationCap, MapPin } from 'lucide-react';

export default function UserProfile() {
  const { username } = useParams();
  
  const user = MOCK_USERS.find(u => u.username === username);
  if (!user) return notFound();

  const userProjects = MOCK_PROJECTS.filter(p => 
    p.teamMembers.some(member => member.id === user.id)
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container mx-auto px-6 py-20 max-w-5xl">
        {/* Profile Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 md:p-16 rounded-[3rem] mb-12 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary text-white rounded-[2.5rem] flex items-center justify-center text-5xl font-black shadow-2xl shadow-blue-900/20">
              {user.name.charAt(0)}
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                  {user.name}
                </h1>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent/10 text-accent text-xs font-black uppercase tracking-widest rounded-full">
                  <BadgeCheck size={14} /> Verified {user.role}
                </span>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-500 font-medium mb-8">
                <span className="flex items-center gap-2"><GraduationCap size={18} className="text-accent" /> {user.yearInSchool || 'Faculty Member'}</span>
                <span className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> BYU Campus</span>
              </div>

              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
                {user.bio || "Passionate about advancing research and fostering interdisciplinary collaboration at BYU Hub."}
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                <a href={`mailto:${user.email}`} className="p-3 bg-white border border-gray-200 rounded-2xl text-primary hover:text-accent hover:border-accent transition-all">
                  <Mail size={20} />
                </a>
                {user.linkedinUrl && (
                  <a href={user.linkedinUrl} target="_blank" className="p-3 bg-white border border-gray-200 rounded-2xl text-primary hover:text-accent hover:border-accent transition-all">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-black text-primary tracking-tight mb-8 px-4 flex items-center gap-3">
            Active Projects <span className="bg-gray-200 text-gray-500 text-sm px-2 py-0.5 rounded-lg">{userProjects.length}</span>
          </h2>
          
          {userProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userProjects.map((p) => (
                <ProjectCard key={p.id} project={p as any} />
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 rounded-[2rem] text-center border-dashed border-2 border-gray-200">
              <p className="text-gray-400 font-bold italic">No active projects listed on the HUB yet.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}