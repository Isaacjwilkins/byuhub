import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { MOCK_USERS, MOCK_PROJECTS } from '@/lib/mockData';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { username: string };
}

export default function UserProfile({ params }: PageProps) {
  // 1. Find the user from mock data
  const user = MOCK_USERS.find(u => u.username === params.username);
  
  if (!user) {
    return notFound(); 
  }

  // 2. Find projects they are part of
  const userProjects = MOCK_PROJECTS.filter(p => 
    p.teamMembers.some(member => member.id === user.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#002E5D]">{user.name}</h1>
          <p className="text-gray-500 font-medium">{user.role.toUpperCase()} {user.yearInSchool && `• ${user.yearInSchool}`}</p>
          
          <div className="mt-4 max-w-2xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Bio</h3>
            <p className="text-gray-700">{user.bio || "No bio available."}</p>
          </div>

          {user.linkedinUrl && (
            <a 
              href={user.linkedinUrl} 
              target="_blank" 
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              LinkedIn Profile
            </a>
          )}
        </div>

        {/* User's Projects */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Projects</h2>
        {userProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No active projects listed.</p>
        )}
      </div>
    </div>
  );
}