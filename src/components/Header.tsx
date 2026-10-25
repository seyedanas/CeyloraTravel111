import React, { useState } from 'react';
import { CurrencyCode, CURRENCIES, ScreenId } from '../types/travel';
import {
  CEYLORA_BRAND_LOGO,
  CEYLORA_WHATSAPP_DISPLAY,
  DEFAULT_WHATSAPP_MESSAGE,
  getWhatsAppUrl,
} from '../data/travelData';
import { Search, Menu, X, ChevronDown, Mail } from 'lucide-react';

interface HeaderProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenBookingModal: (type?: string) => void;
  onOpenSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenBookingModal,
  onOpenSearchModal,
}) => {
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore Sri Lanka' },
    { id: 'hotels', label: 'Hotels & Villas' },
    { id: 'tours', label: 'Tours & Experiences' },
    { id: 'transport', label: 'Transport' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* BEGIN: TopUtilityBar */}
      <div className="bg-[#0f2d25] text-gray-200 text-xs py-2 px-4 sm:px-8 border-b border-[#1b4339] relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Info Left */}
          <div className="flex items-center space-x-6 tracking-wide">
            {/* WhatsApp Direct Connect */}
            <a
              className="flex items-center gap-2 hover:text-[#25D366] transition-colors group cursor-pointer"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              title={`Connect with us on WhatsApp (${CEYLORA_WHATSAPP_DISPLAY})`}
            >
              <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-whatsapp text-xs"></i>
              </span>
              <span className="font-semibold text-white group-hover:text-[#25D366] transition-colors">
                {CEYLORA_WHATSAPP_DISPLAY}
              </span>
            </a>
            <a
              className="flex items-center gap-2 hover:text-[#c49a56] transition-colors cursor-pointer"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=ceyloratravels.lk@gmail.com&su=${encodeURIComponent(
                'Trip Inquiry - Ceylora Travels Sri Lanka'
              )}&body=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Compose email to ceyloratravels.lk@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-[#a67b38]" />
              <span>ceyloratravels.lk@gmail.com</span>
            </a>
          </div>

          {/* Social & Currency Right */}
          <div className="flex items-center space-x-5">
            <span className="text-gray-400 hidden md:inline">Follow & Connect:</span>
            <div className="flex items-center space-x-3 text-sm">
              <a
                aria-label="WhatsApp"
                className="text-[#25D366] hover:scale-110 transition-transform"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title={`WhatsApp ${CEYLORA_WHATSAPP_DISPLAY}`}
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
              <a
                aria-label="Facebook"
                className="hover:text-[#c49a56] transition-colors"
                href="https://www.facebook.com/profile.php?id=61595104364560&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                aria-label="Instagram"
                className="hover:text-[#c49a56] transition-colors"
                href="https://www.instagram.com/ceyloratravels?obrf=MWV2ZjJoZ2EzOGg0dw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                aria-label="TikTok"
                className="hover:text-[#c49a56] transition-colors"
                href="https://www.tiktok.com/@ceyloratravels.lk?_r=1&_t=ZS-9ApNLpfoVsb"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
              >
                <i className="fa-brands fa-tiktok text-xs"></i>
              </a>
            </div>

            <div className="h-3 w-px bg-white/20 mx-1"></div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 font-medium hover:text-white transition-colors cursor-pointer text-xs"
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-xl py-1 z-50 border border-gray-100 text-xs animate-in fade-in zoom-in-95 duration-150">
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                    <button
                      key={c}
                      className={`w-full text-left px-3 py-1.5 hover:bg-amber-50 flex items-center justify-between ${
                        currency === c ? 'font-bold text-[#a67b38]' : ''
                      }`}
                      onClick={() => {
                        onCurrencyChange(c);
                        setCurrencyDropdownOpen(false);
                      }}
                    >
                      <span>{c}</span>
                      <span className="text-gray-400 font-normal">{CURRENCIES[c].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* END: TopUtilityBar */}

      {/* BEGIN: MainHeader */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group text-left cursor-pointer transition-transform hover:scale-[1.02] flex-shrink-0"
          >
            <div className="relative h-16 sm:h-[82px] w-32 sm:w-40 overflow-hidden flex items-center justify-center bg-white">
              <img
                src={CEYLORA_BRAND_LOGO}
                alt="Ceylora Travels - Discover the Soul of Sri Lanka"
                className="w-full h-full object-contain scale-[1.35] mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] xl:text-[14.5px] font-medium text-gray-700 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`cursor-pointer pb-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#0f2d25] font-semibold border-b-2 border-[#0f2d25]'
                      : 'hover:text-[#0f2d25]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 flex-shrink-0">
            <button
              aria-label="Search"
              onClick={onOpenSearchModal}
              className="p-2 text-gray-600 hover:text-[#0f2d25] transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
              type="button"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-md bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0f2d25] cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 text-sm font-medium ${
                    activeScreen === item.id
                      ? 'text-[#a67b38] font-bold border-l-2 border-[#a67b38] pl-2'
                      : 'text-gray-700 hover:text-[#0f2d25]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">Connect on WhatsApp:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-xs font-bold text-[#0f2d25] hover:bg-[#25D366]/20 transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-sm text-[#25D366]"></i>
                  <span>{CEYLORA_WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* END: MainHeader */}
    </>
  );
};
