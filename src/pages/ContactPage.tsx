import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#000000e3] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white font-black text-4xl uppercase tracking-tight mb-2">Contact Us</h1>
        <p className="text-zinc-400 text-sm mb-8">Get in touch. We read everything.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              label: 'EMAIL',
              content: 'hello@forrabix.com',
            },
            {
              icon: Phone,
              label: 'PHONE',
              content: '(123) 456-7890',
            },
            {
              icon: MapPin,
              label: 'LOCATION',
              content: 'Dhaka, Bangladesh',
            },
          ].map(contact => {
            const Icon = contact.icon;
            return (
              <div key={contact.label} className="border border-zinc-800 p-6">
                <Icon className="w-5 h-5 text-[#d4f53c] mb-3" />
                <p className="text-zinc-500 text-xs tracking-widest mb-1">{contact.label}</p>
                <p className="text-white font-semibold text-sm">{contact.content}</p>
              </div>
            );
          })}
        </div>

        <div className="border border-zinc-800 p-8">
          <h2 className="text-white font-bold text-lg tracking-widest mb-6">SEND US A MESSAGE</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-zinc-400 text-xs tracking-widest block mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-[#d4f53c] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-zinc-400 text-xs tracking-widest block mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-[#d4f53c] transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-zinc-400 text-xs tracking-widest block mb-2">SUBJECT</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-[#d4f53c] transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-zinc-400 text-xs tracking-widest block mb-2">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-[#d4f53c] transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#d4f53c] text-black font-bold px-6 py-3 hover:bg-[#c4e52a] transition-colors tracking-wider"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <h2 className="text-white font-bold text-lg tracking-widest mb-4">BUSINESS HOURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
              { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
              { day: 'Sunday', hours: 'Closed' },
              { day: 'Holidays', hours: 'Closed' },
            ].map(schedule => (
              <div key={schedule.day}>
                <p className="text-zinc-500 text-sm">{schedule.day}</p>
                <p className="text-white font-semibold text-sm">{schedule.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
