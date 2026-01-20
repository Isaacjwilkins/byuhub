'use client'; // This must be a client component for inputs to work
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#002E5D] mb-6 text-center">
            {isLogin ? 'Welcome Back' : 'Join The Hub'}
          </h2>
          
          <form className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" className="w-full border p-2 rounded mt-1" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Year in School</label>
                  <select className="w-full border p-2 rounded mt-1">
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    <option>Graduate Student</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700">Post Grad Plans</label>
                  <select className="w-full border p-2 rounded mt-1">
                    <option>Industry</option>
                    <option>Medical School</option>
                    <option>Law School</option>
                    <option>PhD / Research</option>
                    <option>Startups</option>
                  </select>
                </div>
              </>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700">BYU Email</label>
              <input type="email" className="w-full border p-2 rounded mt-1" placeholder="netid@byu.edu" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full border p-2 rounded mt-1" />
            </div>

            {!isLogin && (
               <div>
                  <label className="block text-sm font-medium text-gray-700">Project Add Code (Optional)</label>
                  <input type="text" className="w-full border p-2 rounded mt-1" placeholder="e.g. CHEM-101" />
                </div>
            )}

            <button className="w-full bg-[#002E5D] text-white py-2 rounded font-semibold hover:bg-blue-900 transition">
              {isLogin ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 ml-1 hover:underline font-semibold"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}