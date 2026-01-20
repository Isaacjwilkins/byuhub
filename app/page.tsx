import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { MOCK_PROJECTS } from '@/lib/mockData';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = MOCK_PROJECTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002E5D] mb-6">
            Research at the Speed of Trust.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The BYU Hub is a centralized platform connecting students with mentored research opportunities across campus. Join the network of builders, researchers, and innovators.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/research" className="px-6 py-3 bg-[#002E5D] text-white rounded font-medium hover:bg-blue-900">
              Browse Projects
            </Link>
            <div className="flex items-center gap-2">
               {/* Waitlist dummy button */}
               <button className="px-6 py-3 border border-gray-300 rounded font-medium hover:bg-gray-50">
                 Join Waitlist
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Marquee (Simplified for CSS) */}
      <section className="py-8 bg-gray-100 overflow-hidden">
        <p className="text-center text-gray-400 text-sm mb-4 font-semibold uppercase tracking-widest">Supported By</p>
        <div className="flex justify-center gap-12 opacity-50 grayscale font-bold text-xl text-gray-500 flex-wrap px-4">
          <span>BYU MARRIOTT SCHOOL</span>
          <span>INTERMOUNTAIN HEALTH</span>
          <span>BYU SCHOOL OF MEDICINE</span>
          <span>ALCSI</span>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#002E5D] mb-8">Featured Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      
      <footer className="bg-[#002E5D] text-white py-8 text-center">
        <p>&copy; 2026 The BYU Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}