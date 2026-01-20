import Link from 'next/link';
import { Menu, UserCircle } from 'lucide-react'; // Ensure lucide-react is installed

export default function Navbar() {
  return (
    <nav className="bg-[#002E5D] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wider">
          THE BYU HUB
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/research" className="hover:text-gray-300">Research</Link>
          <Link href="/resources" className="hover:text-gray-300">Resources</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link 
            href="/login" 
            className="bg-white text-[#002E5D] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Login / Join
          </Link>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}