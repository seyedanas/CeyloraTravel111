import React from 'react';
import { ActiveTab, ScreenId } from '../types/travel';
import { HERO_IMAGE } from '../data/travelData';
import { MapPin } from 'lucide-react';

interface HeroProps {
  onSearch?: (params: {
    tab: ActiveTab;
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
  onNavigate: (screen: ScreenId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[540px] lg:min-h-[620px] flex items-center bg-[#0a1e19]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Nine Arch Bridge Ella Sri Lanka"
          className="w-full h-full object-cover object-center duration-1000"
          src={HERO_IMAGE}
        />
        {/* Deep cinematic dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 w-full flex flex-col justify-center h-full">
        <div className="max-w-2xl text-white">
          {/* Overline Tagline */}
          <span className="inline-block text-xs uppercase tracking-[0.28em] font-semibold text-gray-200 mb-3">
            YOUR JOURNEY BEGINS HERE
          </span>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-4 tracking-tight">
            Discover the<br />
            <span className="italic font-normal text-[#e6ca91]">Soul of Sri Lanka</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-200 font-light max-w-xl leading-relaxed">
            Extraordinary places. Authentic experiences. Unforgettable journeys.
          </p>
        </div>

        {/* Location Badge Bottom Right */}
        <div
          onClick={() => onNavigate('tours')}
          className="cursor-pointer absolute bottom-4 right-4 sm:right-8 flex items-center gap-1.5 text-white/90 text-xs font-light bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full hover:bg-black/60 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-[#b4853e]" />
          <span>Nine Arch Bridge, Ella</span>
        </div>
      </div>
    </section>
  );
};

