'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 bg-gray-100">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* Left Side Image (hidden on small screens) */}
        <div className="hidden md:block relative">
          <Image
            src="/Login.png"
            alt="Login"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-center bg-white w-full">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-8 text-center md:text-left">
            Sign in to your account
          </h2>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="peer w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 text-gray-900 py-3 px-1"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                className="peer w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 text-gray-900 py-3 px-1"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              >
                Password
              </label>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-green-600" />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-xl bg-white hover:bg-gray-100 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </button>
          </div>

          {/* Sign Up and Home Links */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{' '}
            <a href="/signUp" className="text-green-600 hover:underline">Sign up</a>
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
