import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MessageSquare, 
  ExternalLink,
  PhoneCall,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Job Opportunity',
    subject: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[${formData.purpose}] ${formData.subject || 'Portfolio Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Kunal,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.purpose}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Website`
    );
    
    // Open user's default email client with prefilled details
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's Collaborate or Connect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you're hiring for software engineering roles, seeking CS academic instruction, or looking for 1-on-1 technical mentoring, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-white">
                  Direct Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Feel free to reach out directly via email or LinkedIn. I typically respond within 24 hours.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Primary Email
                  </span>
                  <button
                    id="contact-copy-email-btn"
                    onClick={copyEmail}
                    className="text-xs text-slate-400 hover:text-cyan-300 font-mono flex items-center gap-1 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block font-mono text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" /> Professional Profile
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <a
                  id="contact-linkedin-direct-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-mono text-sm font-semibold text-white hover:text-blue-300 transition-colors break-all"
                >
                  linkedin.com/in/{PERSONAL_INFO.linkedinUsername}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Geographical Availability
                </span>
                <div className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-xs text-slate-400">
                  Open to On-site, Hybrid, and Remote engagements.
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Available for Technical Mentoring, Teaching & Engineering roles.</span>
            </div>

          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your details below to generate a pre-formatted direct email.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR NAME: *
                  </label>
                  <input
                    type="text"
                    required
                    id="contact-form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR EMAIL: *
                  </label>
                  <input
                    type="email"
                    required
                    id="contact-form-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    PURPOSE / INQUIRY TYPE:
                  </label>
                  <select
                    id="contact-form-purpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Job Opportunity">Software Engineering Opportunity</option>
                    <option value="CS Teaching / Faculty">CS / IT Teaching & Faculty</option>
                    <option value="Mentorship & Tutoring">1-on-1 Mentorship / DSA Tutoring</option>
                    <option value="Cybersecurity Workshop">Cybersecurity & Workshop Guest</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    SUBJECT:
                  </label>
                  <input
                    type="text"
                    id="contact-form-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Opportunity Discussion"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  MESSAGE: *
                </label>
                <textarea
                  required
                  rows={4}
                  id="contact-form-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of your organization, project, or student mentoring needs..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-form-submit-btn"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client with Pre-filled Message</span>
              </button>

              {formSent && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client opened! You can also copy Kunal's email directly at any time.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
