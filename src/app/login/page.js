// src/app/login/page.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [view, setView] = useState('signin');
  
  return (
    <div className="h-screen p-2">
      <div className="flex h-full bg-white rounded-lg overflow-hidden">
        {/* Left side - Banner */}
        <div className="hidden md:flex w-full max-w-[45%] relative bg-[#2563eb]">
          <Image 
            src="/img/main-banner.svg" 
            alt="Leadshike Banner"
            width={671}
            height={900}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex flex-col justify-center px-8 py-6">
          <div className="max-w-md w-full mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
              <span className="text-base font-medium text-gray-900">Leadshike</span>
            </div>

            {/* Toggle Buttons */}
            <div className="inline-flex rounded-lg bg-gray-100 p-0.5 mb-6">
              <button 
                className={`px-[85px] py-2 rounded-md text-sm font-medium transition-colors ${
                  view === 'signup' ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
                onClick={() => setView('signup')}
              >
                Sign Up
              </button>
              <button 
                className={`px-[85px] py-2 rounded-md text-sm font-medium transition-colors ${
                  view === 'signin' ? 'bg-blue-600 text-white' : 'text-gray-600'
                }`}
                onClick={() => setView('signin')}
              >
                Sign In
              </button>
            </div>

            {view === 'signin' && (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email Id
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block text-sm text-gray-600">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-sm text-blue-600"
                      onClick={() => setView('forgot')}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <input
                    type="password"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none"
                    placeholder="Enter Password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
                >
                  Sign In
                </button>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full py-2 text-center text-white bg-blue-600 rounded-lg font-medium"
                  >
                    Demo User Login
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Email & Password is not needed here.
                  </p>
                </div>
              </form>
            )}

            {view === 'signup' && (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email Id
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none"
                    placeholder="Enter Password"
                  />
                  <div className="mt-2 text-xs text-gray-500 space-y-0.5">
                    <p>Password strength: Weak</p>
                    <p>Cannot contain your name or email address</p>
                    <p>At least 8 characters</p>
                    <p>Contains a number or symbol</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
                >
                  Create Account
                </button>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full py-2 text-center text-white bg-blue-600 rounded-lg font-medium"
                  >
                    Demo User Login
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Email & Password is not needed here.
                  </p>
                </div>
              </form>
            )}

            {view === 'forgot' && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <button 
                    onClick={() => setView('signin')} 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  <h2 className="text-xl font-semibold">
                    Update your password here
                  </h2>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none"
                      placeholder="Enter new password again"
                    />
                    <div className="mt-2 text-xs text-gray-500 space-y-0.5">
                      <p>Password strength: Weak</p>
                      <p>Cannot contain your name or email address</p>
                      <p>At least 8 characters</p>
                      <p>Contains a number or symbol</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                  >
                    Login
                  </button>
                </form>
              </>
            )}

            <p className="text-center text-xs text-gray-500 mt-8">
              By signing up to create an account I accept<br />
              Company's <Link href="#" className="text-blue-600 hover:underline">Terms of use & Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}