'use client';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ExternalLink, 
  Lock, 
  FileText, 
  Lightbulb, 
  GraduationCap,
  Users, // Added this missing import
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

// Using existing mock resources as a base
const PUBLIC_RESOURCES = [
  { 
    id: 'r1', 
    title: 'BYU Marriott School Research', 
    description: 'Explore accounting and finance research initiatives.',
    url: 'https://marriott.byu.edu', 
    category: 'Academic' 
  },
  { 
    id: 'r2', 
    title: 'Intermountain Health Research', 
    description: 'Clinical trial information and regional health data.',
    url: 'https://intermountainhealthcare.org/research', 
    category: 'Clinical' 
  },
  { 
    id: 'r3', 
    title: 'NIH Grant Writing Guide', 
    description: 'The gold standard for learning how to draft research proposals.',
    url: 'https://grants.nih.gov', 
    category: 'Learning' 
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black text-primary tracking-tight mb-4"
          >
            Knowledge <span className="text-accent">Library</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Everything you need to jumpstart your research journey at BYU, 
            from institutional links to expert-crafted templates.
          </p>
        </div>

        {/* Public Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PUBLIC_RESOURCES.map((res, index) => (
            <motion.a
              key={res.id}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-accent/30 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 text-accent rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">
                  {res.category === 'Clinical' ? <BookOpen size={24} /> : <GraduationCap size={24} />}
                </div>
                <ExternalLink className="text-gray-300 group-hover:text-accent transition-colors" size={20} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{res.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{res.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Locked / Pro Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] bg-primary p-12 overflow-hidden text-center"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs font-bold uppercase tracking-widest mb-8">
              <Lock size={14} /> Member Exclusive
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Unlock Full Access</h2>
            <p className="text-blue-100/70 mb-10 text-lg">
              HUB members get access to proprietary grant templates, student-led research wikis, 
              and direct mentorship pipelines.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/login" 
                className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                Sign In to View More
              </Link>
              <Link 
                href="/login" 
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Create Account
              </Link>
            </div>

            {/* Preview of locked items */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 grayscale">
              <div className="bg-white/5 p-4 rounded-2xl flex flex-col items-center">
                <FileText className="text-white mb-2" />
                <span className="text-[10px] text-white font-bold uppercase">Grant PPTX</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl flex flex-col items-center">
                <Lightbulb className="text-white mb-2" />
                <span className="text-[10px] text-white font-bold uppercase">Idea Tracker</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl flex flex-col items-center">
                <Users className="text-white mb-2" />
                <span className="text-[10px] text-white font-bold uppercase">Lead Directory</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl flex flex-col items-center">
                <BookOpen className="text-white mb-2" />
                <span className="text-[10px] text-white font-bold uppercase">HUB Wiki</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}