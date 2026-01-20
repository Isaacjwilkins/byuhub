import { Project } from '@/types';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-[#002E5D] bg-blue-50 px-2 py-1 rounded">
          {project.category}
        </span>
        <span className={`text-xs px-2 py-1 rounded ${
          project.status === 'recruiting' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
        }`}>
          {project.status}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
      
      <div className="border-t pt-3 mt-auto">
        <p className="text-xs text-gray-500 mb-2">Team:</p>
        <div className="flex flex-wrap gap-2">
          {project.teamMembers.map((member) => (
            <Link 
              key={member.id} 
              href={`/u/${member.username}`}
              className="text-xs text-blue-600 hover:underline"
            >
              {member.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}