import { User, Project, Resource } from '@/types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Bill Tayler',
    username: 'billtayler',
    email: 'bill@byu.edu',
    role: 'faculty',
    bio: 'Professor of Accounting at BYU Marriott School. Research interests in healthcare and incentives.',
    linkedinUrl: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Britt Berrett',
    username: 'brittberrett',
    email: 'britt@byu.edu',
    role: 'faculty',
    bio: 'Managing Director of the BYU Healthcare Leadership Collaborative.',
  },
  {
    id: '3',
    name: 'Isaac Wilkins',
    username: 'isaacwilkins',
    email: 'isaac@byu.edu',
    role: 'student',
    bio: 'Founder of The BYU Hub. Senior studying Finance and Pre-Med.',
    yearInSchool: 'Senior',
  },
  // Add generic students
  { id: '4', name: 'Sarah Jenkins', username: 'sarahj', email: 's@byu.edu', role: 'student', yearInSchool: 'Junior', major: 'Chemistry' },
  { id: '5', name: 'David Kim', username: 'davidk', email: 'd@byu.edu', role: 'student', yearInSchool: 'Sophomore', major: 'CS' },
] as any[]; // casting to any to skip strict optional checks for speed

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Naltrexone for Compulsive Behavior',
    description: 'A pilot clinical trial testing the efficacy of naltrexone for specific behavioral health outcomes. Currently in Phase 1 proposal drafting.',
    category: 'Clinical',
    status: 'ongoing',
    teamMembers: [MOCK_USERS[2], MOCK_USERS[0]],
  },
  {
    id: 'p2',
    title: 'Digital Health Equity for Immigrants',
    description: 'Analyzing healthcare access barriers for Spanish-speaking populations in Utah/Idaho.',
    category: 'Social Science',
    status: 'ongoing',
    teamMembers: [MOCK_USERS[2], MOCK_USERS[4]],
  },
  {
    id: 'p3',
    title: 'Venture Capital in Healthcare',
    description: 'Researching the impact of early-stage funding on medical device innovation rates.',
    category: 'Finance',
    status: 'recruiting',
    teamMembers: [MOCK_USERS[2]],
  },
  {
    id: 'p4',
    title: 'Crystal Lattice Structures',
    description: 'Advanced modeling of reaction kinetics and thermodynamic stability in crystal formations.',
    category: 'Chemistry',
    status: 'completed',
    teamMembers: [MOCK_USERS[3]],
  },
   {
    id: 'p5',
    title: 'The HUB Platform Development',
    description: 'Building the digital infrastructure to connect BYU students with mentored research.',
    category: 'Tech',
    status: 'ongoing',
    teamMembers: [MOCK_USERS[2], MOCK_USERS[4]],
  },
];

export const MOCK_RESOURCES: Resource[] = [
  { id: 'r1', title: 'BYU Marriott School', url: 'https://marriott.byu.edu', category: 'Academic' },
  { id: 'r2', title: 'Intermountain Research', url: 'https://intermountainhealthcare.org/research', category: 'Clinical' },
  { id: 'r3', title: 'NIH Grant Writing Guide', url: 'https://grants.nih.gov', category: 'Learning' },
];