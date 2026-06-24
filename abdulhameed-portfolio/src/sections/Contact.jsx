import React, { useState } from 'react';
import { FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please populate all structural fields accurately.');
      return;
    }
    setStatus('Connection channel active. Packaging parameters local data simulation...');
    setTimeout(() => {
      setStatus('Message successfully verified locally!');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase block mb-2">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Start A Project</h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Ready to integrate high-end graphics assets, modern vector systems, or deep data visualization kits into your operational pipeline? Reach out immediately.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
              <FiMail className="text-emerald-400 text-xl" />
              <div>
                <div className="text-xs text-zinc-500 font-mono">DIRECT MAIL</div>
                <div className="text-sm font-medium text-white">oyewolahameed@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
              <FiMapPin className="text-emerald-400 text-xl" />
              <div>
                <div className="text-xs text-zinc-500 font-mono">LOCATION NODE</div>
                <div className="text-sm font-medium text-white">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-zinc-400">Your Name</label>
                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-zinc-400">Email Address</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-zinc-400">Subject Core</label>
              <input type="text" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-zinc-400">Project Requirements Specifications</label>
              <textarea rows="4" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-zinc-950 font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2">
              <FiMessageSquare /> Dispatch Parameters
            </button>
            {status && <div className="text-xs font-mono text-center pt-2 text-emerald-400">{status}</div>}
          </form>
        </div>

      </div>
    </section>
  );
}