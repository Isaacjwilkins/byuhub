// components/navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, BookOpen, Search, Info, LogIn, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownLinks = [
    { name: 'Research', href: '/research', icon: <Search size={16} /> },
    { name: 'Resources', href: '/resources', icon: <BookOpen size={16} /> },
    { name: 'About Us', href: '/about', icon: <Info size={16} /> },
    { name: 'Join / Login', href: '/login', icon: <LogIn size={16} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary flex items-center"
        >
          THE
          <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-900">
            HUB
          </span>

          <span className="mx-4 opacity-80">|</span>
          <span className="text-[1.15rem] font-semibold tracking-normal opacity-90">
            BYU Healthcare Leadership
          </span>
      </Link>

      <div className="hidden md:flex space-x-10 items-center font-bold text-gray-600">
        <Link href="/students" className="hover:text-primary transition-colors">Students</Link>
        <Link href="/faculty" className="hover:text-primary transition-colors">Faculty</Link>

        <div className="relative group">
          <button
            onMouseEnter={() => setIsOpen(true)}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 hover:text-primary transition-colors py-2"
          >
            Explore <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden"
              >
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-primary transition-all text-sm"
                  >
                    <span className="text-accent">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="md:hidden">
        <Menu className="w-6 h-6 text-primary" />
      </div>
    </div>
    </nav >
  );
}