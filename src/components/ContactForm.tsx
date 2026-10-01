import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject || 'General Reservation Enquiry',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('submitting');
    // Simulate server submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: defaultSubject || 'General Reservation Enquiry',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: ''
      });
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#faf7f2] border border-[#d6c6b3]/60 rounded-xl p-6 sm:p-10 shadow-lg text-[#0d1e16]"
    >
      <h3 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#0d1e16] mb-6">
        Send Us an Enquiry
      </h3>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-lg bg-[#587853]/15 border border-[#587853] text-[#1c3d2e] flex items-center gap-3 text-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-[#587853] shrink-0" />
          <span>
            Thank you! Your enquiry has been received. Our team will contact you shortly via email or phone.
          </span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-800 flex items-center gap-3 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16] focus:outline-none focus:border-[#28503c] transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16] focus:outline-none focus:border-[#28503c] transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+94 77 123 4567"
            className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16] focus:outline-none focus:border-[#28503c] transition-colors"
          />
        </div>

        {/* Inquiry Type */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
            Enquiry Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16] focus:outline-none focus:border-[#28503c] transition-colors"
          >
            <option value="General Reservation Enquiry">General Villa Stay Enquiry</option>
            <option value="Weddings & Celebrations">Weddings & Destination Events</option>
            <option value="Day Outing Package">Day Outing & Corporate Retreat</option>
            <option value="Honeymoon & Romantic Package">Honeymoon & Couples Package</option>
          </select>
        </div>
      </div>

      {/* Optional Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 p-4 rounded-lg bg-[#f4eee7]/60 border border-[#d6c6b3]/40">
        <div className="space-y-1">
          <label className="text-[11px] uppercase tracking-wider text-[#587853] font-medium">
            Check-In (Optional)
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full bg-[#faf7f2] border border-[#d6c6b3] rounded px-3 py-2 text-xs text-[#0d1e16]"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] uppercase tracking-wider text-[#587853] font-medium">
            Check-Out (Optional)
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full bg-[#faf7f2] border border-[#d6c6b3] rounded px-3 py-2 text-xs text-[#0d1e16]"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] uppercase tracking-wider text-[#587853] font-medium">
            Expected Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full bg-[#faf7f2] border border-[#d6c6b3] rounded px-3 py-2 text-xs text-[#0d1e16]"
          >
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3-4">3 - 4 Persons</option>
            <option value="5+">5+ Persons / Group</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5 mb-6">
        <label className="text-xs uppercase tracking-widest text-[#28503c] font-semibold">
          Your Message / Special Requests *
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your trip plans, special dietary needs, or event specifications..."
          required
          className="w-full bg-[#f4eee7] border border-[#d6c6b3] rounded-lg px-4 py-3 text-sm text-[#0d1e16] focus:outline-none focus:border-[#28503c] transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-[#28503c] hover:bg-[#1c3d2e] text-[#faf7f2] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        <span>{status === 'submitting' ? 'SENDING ENQUIRY...' : 'SEND ENQUIRY'}</span>
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};
