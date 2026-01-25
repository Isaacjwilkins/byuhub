'use client';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, LogIn, Mail, Lock, User, GraduationCap, Briefcase, Hash } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background Decorative Blurs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card w-full max-w-xl rounded-[2.5rem] p-10 md:p-12 relative z-10 shadow-2xl shadow-blue-900/5"
        >
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex p-4 bg-blue-50 text-accent rounded-2xl mb-6">
              {isLogin ? <LogIn size={28} /> : <UserPlus size={28} />}
            </div>
            <h2 className="text-4xl font-black text-primary tracking-tight">
              {isLogin ? 'Welcome Back' : 'Join The Hub'}
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              {isLogin ? 'Enter your credentials to access your dashboard' : 'Create an account to start your research journey'}
            </p>
          </div>
          
          <form className="space-y-5">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-5 overflow-hidden"
                >
                  {/* Full Name */}
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      className="w-full bg-white/50 border border-gray-200 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium" 
                      placeholder="Full Name" 
                    />
                  </div>

                  {/* Year & Post Grad Plans Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select className="w-full bg-white/50 border border-gray-200 pl-12 pr-4 py-4 rounded-2xl appearance-none outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium text-gray-600">
                        <option>Freshman</option>
                        <option>Sophomore</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Graduate Student</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select className="w-full bg-white/50 border border-gray-200 pl-12 pr-4 py-4 rounded-2xl appearance-none outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium text-gray-600">
                        <option>Industry</option>
                        <option>Medical School</option>
                        <option>Law School</option>
                        <option>PhD / Research</option>
                        <option>Startups</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
              <input 
                type="email" 
                className="w-full bg-white/50 border border-gray-200 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium" 
                placeholder="BYU Email (netid@byu.edu)" 
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
              <input 
                type="password" 
                className="w-full bg-white/50 border border-gray-200 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium" 
                placeholder="Password" 
              />
            </div>

            {!isLogin && (
              <div className="relative group">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  className="w-full bg-white/50 border border-gray-200 pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium" 
                  placeholder="Project Add Code (Optional)" 
                />
              </div>
            )}

            <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-900/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle between Login and Signup */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"} 
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-accent ml-2 hover:underline font-black uppercase tracking-wider text-xs"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}