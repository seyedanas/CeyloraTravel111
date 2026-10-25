import React, { useState } from 'react';
import { SRI_LANKA_NINE_PROVINCES } from '../../data/travelData';
import { ExperienceItem, ScreenId } from '../../types/travel';
import { MapPin } from 'lucide-react';

interface ExploreSriLankaScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectExperience?: (item: ExperienceItem) => void;
  onBookExperience?: (item: ExperienceItem) => void;
  onBookPlace?: (placeName: string, category?: string) => void;
}

export const ExploreSriLankaScreen: React.FC<ExploreSriLankaScreenProps> = () => {
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('all');

  const visibleProvinces =
    selectedProvinceId === 'all'
      ? SRI_LANKA_NINE_PROVINCES
      : SRI_LANKA_NINE_PROVINCES.filter((prov) => prov.id === selectedProvinceId);

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-24">
      {/* Clean Header Banner */}
      <div className="bg-[#0f2d25] text-white py-12 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            9 PROVINCES OF SRI LANKA
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Explore Sri Lanka
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* 9 Provinces Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedProvinceId('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedProvinceId === 'all'
                  ? 'bg-[#0f2d25] text-white shadow-xs'
                  : 'bg-[#faf9f6] text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All 9 Provinces
            </button>
            {SRI_LANKA_NINE_PROVINCES.map((prov) => (
              <button
                key={prov.id}
                type="button"
                onClick={() => setSelectedProvinceId(prov.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  selectedProvinceId === prov.id
                    ? 'bg-[#a67b38] text-white shadow-xs'
                    : 'bg-[#faf9f6] text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="opacity-75 font-bold">{prov.number}.</span>
                <span>{prov.name.replace(' Province', '')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Province Sections (3 Images Each) */}
        <div className="space-y-14">
          {visibleProvinces.map((province, index) => (
            <section
              key={province.id}
              id={`province-${province.id}`}
              className={`${index > 0 ? 'pt-10 border-t border-gray-200/90' : ''}`}
            >
              {/* Minimal Province Heading */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold tracking-wider text-[#a67b38]">
                  {province.number}.
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  {province.name}
                </h2>
              </div>

              {/* 3 Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {province.attractions.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-1 text-xs text-[#e5c17d] font-medium mb-1">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                        <h3 className="font-heading font-bold text-lg leading-snug text-white">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
