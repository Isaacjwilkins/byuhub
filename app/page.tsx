'use client';
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/projectcard';
import { MOCK_PROJECTS } from '@/lib/mockData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Users, Zap } from 'lucide-react';

export default function Home() {
  const featuredProjects = MOCK_PROJECTS.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tight mb-8">
              Transform Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-900">
                Through Mentored Research.
              </span>
            </h1>
          </motion.div>

          <motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
>
  The BYU Healthcare Research Hub connects ambitious students with BYU faculty and industry partners to deliver real products that make a difference.
  We help you get started via a <span className="text-blue-600 font-bold">Semester Cohort</span> of students and faculty to help you learn and grow, all in one ecosystem. 
  <br />
  <br />
  If you are a student considering preprofessional programs, such as MD, MHA, MBA, or MPH, this is a great way to gain real experience. 
  Join the waitlist below, and register for <span className="text-blue-600 font-bold">HL 385R</span> this fall semester to join the 1st cohort!
</motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/research" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 group">
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-10 py-4 bg-white border-2 border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
              Join Waitlist
            </button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-12 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-around gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-primary">10+</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Current Projects</p>
            </div>
            <div>
              <p className="text-4xl font-black text-primary">Fall 2026</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">First Cohort Launch</p>
            </div>
            <div>
              <p className="text-4xl font-black text-primary">3</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Colleges Affiliated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Discovery</h2>
            <h3 className="text-4xl font-bold text-primary">Featured Research</h3>
          </div>
          <Link href="/research" className="hidden sm:block font-bold text-primary hover:underline">
            View All Projects
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </section>
      
    </div>
  );
}