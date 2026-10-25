import React from 'react';
import { HERO_IMAGE, CHAUFFEUR_VAN_IMAGE, TESTIMONIALS, CEYLORA_BRAND_LOGO } from '../../data/travelData';
import { ScreenId } from '../../types/travel';
import { Award, Compass, HeartHandshake, ShieldCheck, Star, Target, Eye, CheckCircle2, Sparkles, MessageSquareHeart } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBookingModal: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            Our Heritage &amp; Promise
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            About Ceylora Travels
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light">
            Founded in Colombo and Galle with a passion for unveiling the authentic soul of Sri Lanka—its wild sanctuaries, highland tea hills, and timeless coastal sanctuaries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[440px]">
              <img
                src={HERO_IMAGE}
                alt="Ella Nine Arch Bridge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#c49a56]/40 flex-shrink-0 bg-white shadow-sm flex items-center justify-center">
                <img
                  src={CEYLORA_BRAND_LOGO}
                  alt="Official Ceylora Travels Seal"
                  className="w-full h-full object-contain scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-[#0f2d25] block leading-tight">100% Local</span>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                  Official boutique travel designer &amp; concierge across Sri Lanka.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-serif italic text-[#a67b38] font-semibold tracking-wide">
              Our Vision
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0f2d25] mt-1 leading-tight">
              Discover Sri Lanka Differently.
            </h2>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed font-normal">
              At Ceylora Travels, we believe every journey should be more than just a holiday — it should be an unforgettable experience filled with beautiful places, meaningful connections and lasting memories.
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Inspired by the natural beauty, rich culture and warm hospitality of Sri Lanka, we specialise in helping travellers discover the island through personalised travel experiences tailored to their interests and preferences.
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              From golden beaches and misty mountains to exciting wildlife safaris and cultural adventures, we bring together the experiences that make Sri Lanka truly special.
            </p>

            {/* Services Highlight Card */}
            <div className="mt-6 p-4 rounded-xl bg-[#faf7f2] border border-amber-200/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a67b38] block mb-1.5">
                Our Services
              </span>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                Our services include personalised tour packages, hotel and villa reservations, private transportation, wildlife safaris, whale watching and tailor-made holiday experiences.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-5 leading-relaxed">
              We understand that every traveller is different. That’s why we focus on thoughtful planning, reliable service and attention to detail, helping you enjoy a smooth and memorable journey from arrival to departure.
            </p>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Whether you’re seeking a relaxing beach escape, an adventurous island holiday or an immersive cultural journey, we’re here to help you make the most of your time in Sri Lanka.
            </p>

            {/* Signature Quote Callout */}
            <div className="mt-5 p-3.5 border-l-4 border-[#a67b38] bg-white rounded-r-xl shadow-xs">
              <p className="font-heading italic text-sm font-semibold text-[#0f2d25]">
                “Let us take care of the journey while you create the memories.”
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#a67b38] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">SLTDA Certified</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Officially licensed &amp; insured</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#a67b38] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Thoughtful Service</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Attention to every detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Our Mission */}
          <div className="bg-white p-7 sm:p-9 rounded-2xl card-shadow border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#a67b38]"></div>
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#faf7f2] text-[#a67b38] flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a67b38] block mb-1">
                PURPOSE & DEDICATION
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#0f2d25] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                To create memorable Sri Lankan travel experiences through personalised service, thoughtful planning and genuine hospitality.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-[#0f2d25] text-white p-7 sm:p-9 rounded-2xl card-shadow border border-[#1b4339] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c49a56]"></div>
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/10 text-[#c49a56] flex items-center justify-center mb-5">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c49a56] block mb-1">
                ASPIRATION & EXCELLENCE
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed font-light">
                To become a trusted travel brand for visitors seeking authentic, comfortable and unforgettable experiences in Sri Lanka.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Ceylora Travels? Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 card-shadow border border-gray-100 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              THE CEYLORA ADVANTAGE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
              Why Choose Ceylora Travels?
            </h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Personalised itineraries, local destination knowledge, accommodation options, convenient transport arrangements and friendly customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4.5 rounded-xl bg-[#faf7f2] border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a67b38]/10 text-[#a67b38] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-snug">Personalised Itineraries</h4>
                <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">Tailored to your interests, travel pace and preferences.</p>
              </div>
            </div>

            <div className="p-4.5 rounded-xl bg-[#faf7f2] border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a67b38]/10 text-[#a67b38] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-snug">Local Destination Knowledge</h4>
                <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">Deep-rooted insights and authentic hidden gems.</p>
              </div>
            </div>

            <div className="p-4.5 rounded-xl bg-[#faf7f2] border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a67b38]/10 text-[#a67b38] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-snug">Accommodation Options</h4>
                <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">Handpicked boutique villas, resorts and heritage stays.</p>
              </div>
            </div>

            <div className="p-4.5 rounded-xl bg-[#faf7f2] border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a67b38]/10 text-[#a67b38] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-snug">Convenient Transport</h4>
                <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">Modern vehicles and vetted, courteous private chauffeurs.</p>
              </div>
            </div>

            <div className="p-4.5 rounded-xl bg-[#faf7f2] border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a67b38]/10 text-[#a67b38] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-snug">Friendly Customer Support</h4>
                <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed">Attentive assistance from initial inquiry to departure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise Banner */}
        <div className="bg-gradient-to-r from-[#0f2d25] to-[#164136] text-white rounded-2xl p-7 sm:p-10 card-shadow border border-[#1b4339] mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c49a56] block mb-1.5">
              OUR COMMITMENT TO YOU
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
              Our Promise
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
              “To listen to your travel needs, communicate clearly and help make your Sri Lankan holiday as enjoyable and hassle-free as possible.”
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="px-6 py-3 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            Plan Your Journey With Us
          </button>
        </div>

        {/* Pillars of Service */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 card-shadow border border-gray-100 mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              OUR PHILOSOPHY
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
              The Four Ceylora Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Curated Boutique</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                We only recommend hotels and villas where we have personally slept and dined.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Elite Chauffeurs</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Courteous, defensive drivers who double as your friendly local cultural ambassadors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Ethical Safaris</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Strict animal welfare respect in Yala, Udawalawe, and whale waters—no overcrowding.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">24/7 Concierge</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Direct WhatsApp access to our operations directors from arrival to farewell.
              </p>
            </div>
          </div>
        </div>

        {/* Guest Reviews */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              TESTIMONIALS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
              Words from our Travelers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl card-shadow border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-900 block">{t.name}</span>
                  <span className="text-[11px] text-[#a67b38] block mt-0.5">
                    {t.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-10 bg-[#0f2d25] rounded-2xl text-white p-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold">
            Ready to Plan Your Sri Lankan Journey?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-md mx-auto">
            Speak directly with our travel designers in Colombo or receive a personalized itinerary proposal within 12 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="px-6 py-3 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Start Planning Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer"
            >
              Contact Our Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
