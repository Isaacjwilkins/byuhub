'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-xl font-black tracking-tighter mb-3 flex justify-center items-center">
          <span>THE HUB</span>
          <span className="mx-3 opacity-60">|</span>
          <span className="text-base font-semibold opacity-70">
            BYU Healthcare Leadership
          </span>
        </p>

        <p className="text-blue-200/60 mb-6 max-w-md mx-auto text-sm leading-relaxed">
          Help transform healthcare through real research.
          Connecting ambitious students with real research opportunities.
        </p>

        <div className="flex justify-center gap-5 text-sm font-medium text-blue-200/40 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/research" className="hover:text-white transition-colors">Research</Link>
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
        </div>

        <div className="pt-4 border-t border-white/5">
          <p className="text-blue-200/20 text-xs">
            &copy; {new Date().getFullYear()} The BYU Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
