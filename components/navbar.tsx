'use client';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary flex items-center"
        >
          THE <span className="text-accent ml-1">HUB</span>
          <span className="mx-5 opacity-80">|</span>
          <span className="text-base font-semibold tracking-normal opacity-90">
            BYU Healthcare Leadership
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center font-medium text-gray-600">
          <Link href="/research" className="hover:text-primary transition-colors">Research</Link>
          <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link 
            href="/login" 
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-blue-900/20 transition-all active:scale-95"
          >
            Join / Login
          </Link>
        </div>

        <div className="md:hidden">
          <Menu className="w-6 h-6 text-primary" />
        </div>
      </div>
    </nav>
  );
}