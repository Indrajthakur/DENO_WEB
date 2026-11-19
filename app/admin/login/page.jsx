
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase.js';

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (data.user) {
        router.replace('/admin');
      }
    } catch (error) {
      setMessage(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070a0f] p-6 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8"
      >
        <h1 className="mb-2 text-3xl font-bold">
          Admin Login
        </h1>

        <p className="mb-8 text-slate-400">
          Sign in to manage your portfolio.
        </p>

        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter admin email"
          className="mb-5 w-full rounded-lg border border-slate-700 bg-[#070a0f] p-3 text-white outline-none focus:border-amber-500"
        />

        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="mb-5 w-full rounded-lg border border-slate-700 bg-[#070a0f] p-3 text-white outline-none focus:border-amber-500"
        />

        {message && (
          <p className="mb-4 rounded-lg bg-red-950 p-3 text-sm text-red-300">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-amber-500 px-5 py-3 font-bold text-black hover:bg-amber-400 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Login'}
        </button>
      </form>
    </main>
  );
}
