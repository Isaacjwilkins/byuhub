import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { MOCK_PROJECTS } from '@/lib/mockData';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#002E5D]">Active Research Projects</h1>
          <input 
            type="text" 
            placeholder="Search topics..." 
            className="border p-2 rounded w-64"
          />
        </div>

        {/* Filter Tabs (Visual Only for now) */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 text-sm text-gray-600">
          <button className="px-4 py-1 bg-white border rounded shadow-sm font-semibold text-[#002E5D]">All</button>
          <button className="px-4 py-1 bg-white border rounded shadow-sm">Clinical</button>
          <button className="px-4 py-1 bg-white border rounded shadow-sm">Finance</button>
          <button className="px-4 py-1 bg-white border rounded shadow-sm">Chemistry</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}