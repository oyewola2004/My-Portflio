import { useState } from 'react';
import { FiSend, FiLoader, FiCheckCircle, FiAlertTriangle, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  // Form input field state management matrix
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // UI interaction system feedback flags
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  
  // UPDATED: Friendly, professional initial prompt string
  const [feedbackMessage, setFeedbackMessage] = useState('Please fill out all fields carefully.');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // UPDATED: Human-friendly loading text
    setFeedbackMessage('Sending your project brief...');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      // UPDATED: Natural validation text
      setFeedbackMessage('Please fill in all fields before submitting.');
      return;
    }

    try {
      // UPDATED: Clean, descriptive inbox presentation fields
      const payloadData = {
        access_key: '1e4fbac9-258f-4865-a415-5a48551c3841', 
        from_name: 'Portfolio Client Inquiry',
        subject: `✦ [Project Inquiry]: ${formData.subject}`,
        'Client Name': formData.name,
        'Client Email': formData.email,
        'Project Subject': formData.subject,
        'Project Details': formData.message
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payloadData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        // UPDATED: Premium, welcoming success text
        setFeedbackMessage("Message sent successfully! I'll get back to you shortly.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('API transmission rejected');
      }
    } catch {
      setStatus('error');
      // UPDATED: Natural error fallback text
      setFeedbackMessage('Something went wrong. Please try again or contact me directly via email.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] flex items-center justify-center text-white px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: INTRO TEXT & DIRECT CONTACT INFO */}
        <div className="lg:col-span-5 space-y-8 text-left lg:sticky lg:top-32">
          <div className="space-y-4">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#10b981]">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Start A Project
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
              Ready to integrate high-end graphics assets, modern vector systems, or deep data visualization kits into your operational pipeline? Reach out immediately.
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            {/* Direct Mail Node */}
            <div className="flex items-center gap-4 bg-[#16161a] border border-neutral-800/80 rounded-2xl p-4 shadow-lg">
              <div className="p-3 bg-[#0d0d0f] border border-neutral-800 rounded-xl text-[#10b981]">
                <FiMail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  Direct Mail
                </span>
                <a href="mailto:oyewolahameed@gmail.com" className="text-sm font-bold text-neutral-200 hover:text-[#10b981] transition-colors mt-0.5">
                  oyewolahameed@gmail.com
                </a>
              </div>
            </div>

            {/* Location Node */}
            <div className="flex items-center gap-4 bg-[#16161a] border border-neutral-800/80 rounded-2xl p-4 shadow-lg">
              <div className="p-3 bg-[#0d0d0f] border border-neutral-800 rounded-xl text-[#10b981]">
                <FiMapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  Location Node
                </span>
                <span className="text-sm font-bold text-neutral-200 mt-0.5">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REFINED INTERACTIVE CONTACT FORM */}
        <div className="lg:col-span-7 w-full bg-[#16161a] border border-neutral-800/80 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2 text-left">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full bg-[#0d0d0f] border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-200 focus:outline-none focus:border-[#10b981] transition-colors disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full bg-[#0d0d0f] border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-200 focus:outline-none focus:border-[#10b981] transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            {/* Input Row 2: Subject */}
            <div className="flex flex-col space-y-2 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                Subject Core
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={status === 'sending'}
                className="w-full bg-[#0d0d0f] border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-neutral-200 focus:outline-none focus:border-[#10b981] transition-colors disabled:opacity-50"
              />
            </div>

            {/* Input Row 3: Message / Specification Block */}
            <div className="flex flex-col space-y-2 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                Project Requirements Specifications
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={status === 'sending'}
                className="w-full bg-[#0d0d0f] border border-neutral-800 rounded-xl px-4 py-4 text-sm text-neutral-200 focus:outline-none focus:border-[#10b981] transition-colors resize-none disabled:opacity-50 custom-scrollbar"
              />
            </div>

            {/* UPDATED: ACTION CALL ACCENT BUTTON TEXT OVERRIDES */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#10b981] hover:bg-emerald-400 text-neutral-950 font-bold text-sm tracking-wide py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed shadow-xl shadow-[#10b981]/10"
            >
              {status === 'sending' ? (
                <>
                  <FiLoader className="animate-spin" size={16} />
                  Sending Brief...
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Project Brief
                </>
              )}
            </button>

            {/* Status Field Feedback Notification Line */}
            <div className="pt-2 flex items-center justify-center gap-2 text-center">
              {status === 'success' && <FiCheckCircle className="text-[#10b981]" size={14} />}
              {status === 'error' && <FiAlertTriangle className="text-red-400" size={14} />}
              
              <p className={`text-xs font-mono tracking-wide transition-colors ${
                status === 'success' ? 'text-[#10b981]' : 
                status === 'error' ? 'text-red-400' : 
                status === 'sending' ? 'text-amber-400' : 'text-emerald-400/80'
              }`}>
                {feedbackMessage}
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;