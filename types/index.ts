export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    role: 'student' | 'admin' | 'faculty';
    yearInSchool?: string;
    postGradPlans?: string;
    bio?: string;
    linkedinUrl?: string;
    avatarUrl?: string; // We'll use initials for now
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Clinical' | 'Finance' | 'Social Science' | 'Chemistry' | 'Tech';
    status: 'recruiting' | 'ongoing' | 'completed';
    teamMembers: User[]; // Array of users involved
  }
  
  export interface Resource {
    id: string;
    title: string;
    url: string;
    category: string;
  }