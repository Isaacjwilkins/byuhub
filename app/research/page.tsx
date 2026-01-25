'use client';
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/projectcard';
import { MOCK_PROJECTS } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { Search, Filter, Beaker } from 'lucide-react';

export default function ResearchPage() {
  const categories = ["All", "Clinical", "Finance", "Chemistry", "Tech", "Social Science"];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <main className="container mx-auto px-6 py-16">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-black text-primary tracking-tight mb-2">Active Research</h1>
            <p className="text-gray-500 font-medium">Browse and apply for mentored opportunities across campus.</p>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search topics, faculty, or tags..." 
              className="w-full bg-white border border-gray-200 pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium shadow-sm"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20">
            <Filter size={14} /> All Projects
          </button>
          {categories.slice(1).map((cat) => (
            <button key={cat} className="px-5 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:border-accent hover:text-accent transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MOCK_PROJECTS.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard project={p as any} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State (if needed) */}
        {MOCK_PROJECTS.length === 0 && (
          <div className="text-center py-20">
            <Beaker className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-400">No projects found.</h3>
          </div>
        )}
      </main>
    </div>
  );
}