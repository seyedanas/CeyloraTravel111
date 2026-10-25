import React from 'react';
import { POPULAR_EXPERIENCES } from '../data/travelData';
import { ExperienceItem, ScreenId } from '../types/travel';
import { MapPin } from 'lucide-react';

interface PopularExperiencesProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectExperience: (item: ExperienceItem) => void;
  onBookPlace?: (placeName: string, category?: string) => void;
}

export const PopularExperiences: React.FC<PopularExperiencesProps> = ({
  onNavigate,
  onSelectExperience,
  onBookPlace,
}) => {
  const handleCardClick = (item: ExperienceItem) => {
    onSelectExperience(item);
  };

  const primaryExperiences = POPULAR_EXPERIENCES.slice(0, 6);
  const adventureExpeditions = POPULAR_EXPERIENCES.slice(6, 11);

  return (
    <section className="py-16 bg-[#faf9f6]" data-purpose="popular-experiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              EXPLORE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0f2d25] mt-1">
              Popular Experiences in Sri Lanka
            </h2>
          </div>
          <button
            onClick={() => onNavigate('tours')}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2d25] hover:text-[#a67b38] transition-colors group cursor-pointer"
          >
            <span>View All Experiences</span>
            <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

        {/* Experience Cards Grid (6 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {primaryExperiences.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group bg-white rounded-xl overflow-hidden card-shadow flex flex-col transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-transparent hover:border-[#a67b38]/20"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onBookPlace) {
                        onBookPlace(item.title);
                      } else {
                        onSelectExperience(item);
                      }
                    }}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#a67b38] hover:text-[#0f2d25] mb-1 cursor-pointer transition-colors text-left"
                    title={`Click to fill Experience / Destination with ${item.title}`}
                  >
                    <MapPin className="w-3 h-3 text-[#a67b38]" />
                    <span className="hover:underline">{item.location}</span>
                  </button>
                  <h3 className="font-heading font-bold text-base text-gray-900 group-hover:text-[#0f2d25] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                    {item.description.slice(0, 75)}...
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a67b38] group-hover:text-[#90682b]">
                  <span>{item.tagline}</span>
                  <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Card Adventure Expeditions Row */}
        <div className="mt-14 pt-10 border-t border-gray-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-1">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
                NATURE &amp; HERITAGE EXPEDITIONS
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
                Adventure &amp; Regional Discovery
              </h3>
            </div>
            <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
              White-water rafting, lotus tower city tours, primary rainforests, highland mountain trails, and authentic Ceylon gems &amp; artisan crafts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {adventureExpeditions.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group bg-white rounded-2xl overflow-hidden card-shadow flex flex-col transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-gray-100 hover:border-[#a67b38]/30 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onBookPlace) {
                          onBookPlace(item.title);
                        } else {
                          onSelectExperience(item);
                        }
                      }}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[#a67b38] hover:text-[#0f2d25] mb-1.5 cursor-pointer transition-colors text-left"
                      title={`Click to fill Experience / Destination with ${item.title}`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#a67b38]" />
                      <span className="hover:underline">{item.location}</span>
                    </button>
                    <h4 className="font-heading font-bold text-lg text-[#0f2d25] group-hover:text-[#a67b38] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a67b38] group-hover:text-[#90682b]">
                    <span>{item.tagline}</span>
                    <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
