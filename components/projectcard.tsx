'use client';
import { Project } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-accent bg-blue-50 px-3 py-1.5 rounded-full">
          {project.category}
        </span>
        <div className="p-2 bg-gray-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed">
        {project.description}
      </p>
      
      <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.teamMembers.map((member, i) => (
            <div 
              key={member.id} 
              className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
              title={member.name}
            >
              {member.name.charAt(0)}
            </div>
          ))}
        </div>
        <Link 
          href={`/research/${project.id}`} 
          className="text-sm font-bold text-primary group-hover:underline"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
}