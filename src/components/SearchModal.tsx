import React, { useState } from 'react';
import { POPULAR_EXPERIENCES, HOTELS_CATALOG, AIRPORT_ROUTES } from '../data/travelData';
import { CurrencyCode, ExperienceItem, HotelItem, ScreenId } from '../types/travel';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  onSelectExperience: (item: ExperienceItem) => void;
  onSelectHotel: (hotel: HotelItem) => void;
  onNavigate: (screen: ScreenId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currency,
  onSelectExperience,
  onSelectHotel,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedExperiences = q
    ? POPULAR_EXPERIENCES.filter(
        (exp) =>
          exp.title.toLowerCase().includes(q) ||
          exp.location.toLowerCase().includes(q) ||
          exp.description.toLowerCase().includes(q)
      )
    : POPULAR_EXPERIENCES.slice(0, 3);

  const matchedHotels = q
    ? HOTELS_CATALOG.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q) ||
          h.region.toLowerCase().includes(q)
      )
    : HOTELS_CATALOG.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search hotels, safaris, scenic trains, Ella, Galle, transfers..."
            className="w-full text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 text-xs px-2 py-1 rounded bg-gray-100 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Quick Shortcuts */}
          {!query && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Suggested Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Nine Arch Bridge Ella', 'Yala Safari', 'Galle Fort Villas', 'Kandy Scenic Train', 'Mirissa Whale Watching', 'Airport Transfer'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-lg bg-[#faf7f2] hover:bg-[#f2ecdf] text-xs text-gray-700 font-medium transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Experiences Matches */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a67b38]">
                Tours &amp; Experiences ({matchedExperiences.length})
              </span>
              <button
                onClick={() => {
                  onNavigate('tours');
                  onClose();
                }}
                className="text-xs text-gray-500 hover:text-[#0f2d25] font-semibold flex items-center gap-1"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {matchedExperiences.map((exp) => (
                <div
                  key={exp.id}
                  onClick={() => {
                    onSelectExperience(exp);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-gray-50 border border-gray-100 cursor-pointer transition-colors"
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#a67b38]" />
                      <span className="truncate">{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[11px] font-semibold text-[#a67b38] bg-[#faf7f2] px-2 py-0.5 rounded border border-amber-200/50 block">
                      Custom Tour
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotels Matches */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a67b38]">
                Hotels &amp; Villas ({matchedHotels.length})
              </span>
              <button
                onClick={() => {
                  onNavigate('hotels');
                  onClose();
                }}
                className="text-xs text-gray-500 hover:text-[#0f2d25] font-semibold flex items-center gap-1"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {matchedHotels.map((h) => (
                <div
                  key={h.id}
                  onClick={() => {
                    onSelectHotel(h);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-gray-50 border border-gray-100 cursor-pointer transition-colors"
                >
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                      {h.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#a67b38]" />
                      <span className="truncate">{h.location}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[11px] font-semibold text-[#0f2d25] bg-[#faf7f2] px-2 py-0.5 rounded border border-gray-200 block">
                      Boutique Stay
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
