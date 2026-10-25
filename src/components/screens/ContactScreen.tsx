import React, { useState } from 'react';
import {
  FAQS,
  CEYLORA_WHATSAPP_DISPLAY,
  CEYLORA_WHATSAPP_NUMBER,
  DEFAULT_WHATSAPP_MESSAGE,
  getWhatsAppUrl,
} from '../../data/travelData';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, CheckCircle } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    dates: '',
    service: 'Custom Multi-Day Tour',
    message: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const inquiryText = `Hello Ceylora Travels!\n\nI would like to request a bespoke proposal:\n• Name: ${formData.name}\n• Email: ${formData.email}${formData.phone ? `\n• Phone: ${formData.phone}` : ''}\n• Primary Interest: ${formData.service}${formData.dates ? `\n• Travel Dates: ${formData.dates}` : ''}${formData.message ? `\n• Wishlist / Notes: ${formData.message}` : ''}\n\nCould you please help me plan my trip?`;
    const whatsappUrl = getWhatsAppUrl(inquiryText);
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            Always At Your Service
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact Ceylora Travels
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light">
            Whether you are planning your first visit or seeking a bespoke highland and coastal itinerary, our Matara team is ready to assist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl card-shadow border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-[#0f2d25] mb-5">
                Headquarters &amp; Direct Lines
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#faf7f2] text-[#a67b38] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] block uppercase font-bold tracking-wider">
                      Direct WhatsApp &amp; Calls
                    </span>
                    <a
                      href={`tel:+${CEYLORA_WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                      className="text-gray-900 font-bold hover:text-[#a67b38] transition-colors mt-0.5 block"
                    >
                      {CEYLORA_WHATSAPP_DISPLAY}
                    </a>
                    <span className="text-xs text-emerald-600 font-medium">Available 24/7 for active guests</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#faf7f2] text-[#a67b38] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] block uppercase font-bold tracking-wider">
                      Concierge Email
                    </span>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=ceyloratravels.lk@gmail.com&su=${encodeURIComponent(
                        'Trip Inquiry - Ceylora Travels Sri Lanka'
                      )}&body=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Compose email to ceyloratravels.lk@gmail.com"
                      className="text-gray-900 font-bold hover:text-[#a67b38] transition-colors mt-0.5 block cursor-pointer"
                    >
                      ceyloratravels.lk@gmail.com
                    </a>
                    <span className="text-xs text-gray-500">Average response within 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#faf7f2] text-[#a67b38] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] block uppercase font-bold tracking-wider">
                      Local Office
                    </span>
                    <div className="text-gray-800 font-medium mt-0.5 space-y-1">
                      <p>Matara, Srilanka</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp ({CEYLORA_WHATSAPP_DISPLAY})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl card-shadow border border-gray-100">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#0f2d25]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-md mx-auto">
                    Thank you, {formData.name || 'valued traveler'}. Our Colombo travel designer will review your notes and respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        country: '',
                        dates: '',
                        service: 'Custom Multi-Day Tour',
                        message: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 bg-[#a67b38] text-white text-xs font-bold rounded-lg hover:bg-[#90682b] transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#a67b38]">
                      START YOUR JOURNEY
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#0f2d25] mt-1">
                      Request a Bespoke Proposal
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill out your preliminary plans and we will design a personalized proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. David & Sarah Hughes"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7911 123456"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Primary Interest
                      </label>
                      <select
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] transition-colors bg-white"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Custom Multi-Day Tour">Custom Multi-Day Tour</option>
                        <option value="Hotels & Luxury Villas">Hotels &amp; Luxury Villas</option>
                        <option value="Yala & Wildlife Safaris">Yala &amp; Wildlife Safaris</option>
                        <option value="Kandy to Ella Scenic Train">Kandy to Ella Scenic Train</option>
                        <option value="Airport Transfer & Private Van">Airport Transfer &amp; Private Van</option>
                        <option value="Honeymoon / Couple Package">Honeymoon / Couple Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Estimated Travel Dates &amp; Duration
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. November 15 - 26, 2026 (approx 10 days)"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] transition-colors"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Tell us about your wishlist
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the number of guests, preferences (scenery, wildlife, beaches), pace of travel, or any special celebrations..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] transition-colors"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Ceylora Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
              Planning your visit to Sri Lanka
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 card-shadow overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#a67b38] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-50 pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
