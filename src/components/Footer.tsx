import React from 'react';
import { ScreenId } from '../types/travel';
import {
  CEYLORA_BRAND_LOGO,
  CEYLORA_WHATSAPP_DISPLAY,
  DEFAULT_WHATSAPP_MESSAGE,
  getWhatsAppUrl,
} from '../data/travelData';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="bg-[#0a201a] text-gray-300 pt-16 pb-8 border-t border-[#183a30] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Footer Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <div
              className="inline-block mb-5 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="relative w-40 h-28 rounded-2xl overflow-hidden shadow-md border border-[#c49a56]/40 bg-white flex items-center justify-center group-hover:border-[#c49a56] transition-all">
                <img
                  src={CEYLORA_BRAND_LOGO}
                  alt="Ceylora Travels - Discover the Soul of Sri Lanka"
                  className="w-full h-full object-contain scale-[1.32]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Your premier boutique travel partner in Sri Lanka. Crafting bespoke luxury holidays, curated excursions, and seamless island transports.
            </p>

            <div className="flex items-center space-x-3 text-sm">
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://www.instagram.com/ceyloratravels?obrf=MWV2ZjJoZ2EzOGg0dw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://www.facebook.com/profile.php?id=61595104364560&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://www.tiktok.com/@ceyloratravels.lk?_r=1&_t=ZS-9ApNLpfoVsb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
              >
                <i className="fa-brands fa-tiktok text-xs"></i>
              </a>
            </div>
          </div>

          {/* Footer Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-white transition-colors text-left"
                >
                  Explore Sri Lanka
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hotels')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hotels &amp; Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Tours &amp; Itineraries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transport')}
                  className="hover:text-white transition-colors text-left"
                >
                  Private Vehicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Ceylora
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Footer Column 3: Top Experiences */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Top Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Yala Safari Excursion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Ella Scenic Train Ride
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Mirissa Whale Watching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sigiriya Ancient Citadel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hotels')}
                  className="hover:text-white transition-colors text-left"
                >
                  Southern Coast Beach Retreat
                </button>
              </li>
            </ul>
          </div>

          {/* Footer Column 4: Contact & Office */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-[#b4853e] mt-0.5"></i>
                <span>Matara, Srilanka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-brands fa-whatsapp text-[#25D366] text-sm"></i>
                <a
                  className="hover:text-[#25D366] transition-colors"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                >
                  {CEYLORA_WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-regular fa-envelope text-[#b4853e]"></i>
                <a
                  className="hover:text-white transition-colors break-all cursor-pointer"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=ceyloratravels.lk@gmail.com&su=${encodeURIComponent(
                    'Trip Inquiry - Ceylora Travels Sri Lanka'
                  )}&body=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Compose email to ceyloratravels.lk@gmail.com"
                >
                  ceyloratravels.lk@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-2 px-3 rounded bg-[#a67b38] hover:bg-[#90682b] text-white font-medium text-xs text-center transition-colors shadow-sm"
                >
                  Request Custom Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026 Ceylora Travels. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-gray-400 cursor-pointer">Terms &amp; Conditions</span>
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Payment Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
