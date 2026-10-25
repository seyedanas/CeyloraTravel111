import React, { useState } from 'react';
import {
  POPULAR_EXPERIENCES,
  TOUR_GUIDES,
  BEACH_DESTINATIONS,
  COLOMBO_ATTRACTIONS,
  WILDLIFE_SAFARI_ATTRACTIONS,
  CULTURE_HERITAGE_ATTRACTIONS,
  WHALE_BEACH_ACTIVITIES,
  ELLA_BEST_ATTRACTIONS,
  KITULGALA_ADVENTURES,
  EXPLORE_HILL_COUNTRY_ATTRACTIONS,
  EXPLORE_SINHARAJA_ATTRACTIONS,
  GEMS_ARTS_CRAFTS_ATTRACTIONS,
  getWhatsAppUrl,
} from '../../data/travelData';
import { CurrencyCode, ExperienceItem } from '../../types/travel';
import { Clock, MapPin, Star, Check, Compass, Sparkles, CheckCircle2, ChevronRight, MessageCircle, Waves, Landmark } from 'lucide-react';

interface ToursScreenProps {
  currency: CurrencyCode;
  onBookExperience: (item: ExperienceItem) => void;
  onSelectExperience: (item: ExperienceItem) => void;
  onBookPlace?: (placeName: string) => void;
}

export const ToursScreen: React.FC<ToursScreenProps> = ({
  currency,
  onBookExperience,
  onSelectExperience,
  onBookPlace,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'colombo', label: 'Colombo City Tours' },
    { id: 'beach', label: 'Coastal Escapes' },
    { id: 'wildlife', label: 'Wildlife & Safari' },
    { id: 'whale', label: 'Whale Watching & Beach Activities' },
    { id: 'train', label: 'Discover The Best of Ella' },
    { id: 'culture', label: 'Culture & Heritage of Sri Lanka' },
    { id: 'kitulgala', label: 'Kitulgala & Adventure' },
    { id: 'hillcountry', label: 'Explore Hill Country' },
    { id: 'sinharaja', label: 'Explore Sinharaja Rainforest' },
    { id: 'crafts', label: 'Gems, Arts, Crafts & Souvenirs' },
  ];

  const filteredExperiences = POPULAR_EXPERIENCES.filter((exp) => {
    if (activeCategory === 'all') return true;
    return exp.category === activeCategory;
  });

  const matchingGuides = TOUR_GUIDES.filter((guide) => {
    if (activeCategory === 'all') return true;
    return guide.theme === activeCategory;
  });

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            Authentic Island Expeditions
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Tours &amp; Curated Experiences
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light">
            Led by private certified naturalists, cultural historians, and licensed chauffeurs. Experience Sri Lanka through authentic, private, and leisurely paced excursions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#a67b38] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={exp.image}
                  alt={exp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0f2d25]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {exp.duration || 'Flexible'}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{exp.rating}</span>
                  <span className="text-gray-400 text-[10px] font-normal">({exp.reviewsCount})</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onBookPlace) {
                        onBookPlace(exp.title);
                      } else {
                        onBookExperience(exp);
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0f2d25] mb-1.5 cursor-pointer group/place text-left transition-colors"
                    title={`Click to fill Experience / Destination with ${exp.title}`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#a67b38] group-hover/place:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700 group-hover/place:text-[#a67b38] group-hover/place:underline">
                      {exp.location}
                    </span>
                  </button>

                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-4 space-y-1.5">
                    {exp.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#a67b38] flex-shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA without price */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#0f2d25] font-semibold bg-[#faf7f2] px-2.5 py-1 rounded-md border border-amber-200/50">
                    <Sparkles className="w-3.5 h-3.5 text-[#a67b38]" />
                    <span>Personalised Tour</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectExperience(exp)}
                      className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0f2d25] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookExperience(exp)}
                      className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Coastal Beaches & Getaways Section */}
        {(activeCategory === 'beach' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  COASTAL PARADISE
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Featured Sri Lankan Beaches &amp; Coastal Havens
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Natural rock pools, golden surf bays, iconic coconut palm headlands, and idyllic island shores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BEACH_DESTINATIONS.map((beach) => (
                <div
                  key={beach.id}
                  onClick={() =>
                    onSelectExperience({
                      id: beach.id,
                      title: beach.name,
                      category: 'beach',
                      tagline: beach.tag,
                      location: beach.location,
                      image: beach.image,
                      rating: 4.96,
                      reviewsCount: 380,
                      duration: 'Full Day / Flexible',
                      priceLkr: 22000,
                      priceUnit: 'group',
                      highlights: beach.highlights,
                      description: beach.description,
                      included: [
                        'Private air-conditioned chauffeur transfer',
                        'Scenic beach route navigation',
                        'Chilled mineral water & refresher towels',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={beach.image}
                        alt={beach.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {beach.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{beach.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {beach.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {beach.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Coastal Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Colombo City Landmarks & Attractions Section */}
        {(activeCategory === 'colombo' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  COMMERCIAL CAPITAL SIGHTS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Iconic Colombo Landmarks &amp; Attractions
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Pettah's Red Mosque, City of Dreams integrated resort, premier luxury casinos, oceanfront promenades, and sacred temples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COLOMBO_ATTRACTIONS.map((attraction) => (
                <div
                  key={attraction.id}
                  onClick={() =>
                    onSelectExperience({
                      id: attraction.id,
                      title: attraction.name,
                      category: 'colombo',
                      tagline: attraction.tag,
                      location: attraction.location,
                      image: attraction.image,
                      rating: 4.92,
                      reviewsCount: 310,
                      duration: 'Half Day / Full Day',
                      priceLkr: 16500,
                      priceUnit: 'person',
                      highlights: attraction.highlights,
                      description: attraction.description,
                      included: [
                        'Private air-conditioned chauffeur transfer',
                        'Certified English-speaking city guide',
                        'Chilled bottled mineral water & refresher wipes',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {attraction.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{attraction.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {attraction.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Landmark Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Wildlife Safari Expeditions Section */}
        {(activeCategory === 'wildlife' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  BIG-GAME &amp; NATURE RESERVES
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Featured Wildlife Safaris &amp; National Park Expeditions
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Yala leopard tracking, Minneriya elephant gathering, Wilpattu sloth bear trails, and custom 4x4 group expeditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WILDLIFE_SAFARI_ATTRACTIONS.map((attraction) => (
                <div
                  key={attraction.id}
                  onClick={() =>
                    onSelectExperience({
                      id: attraction.id,
                      title: attraction.name,
                      category: 'wildlife',
                      tagline: attraction.tag,
                      location: attraction.location,
                      image: attraction.image,
                      rating: 4.97,
                      reviewsCount: 420,
                      duration: 'Full Day / Half Day',
                      priceLkr: 32000,
                      priceUnit: 'person',
                      highlights: attraction.highlights,
                      description: attraction.description,
                      included: [
                        'Custom 4x4 Safari Jeep with open observation roof',
                        'Certified English-speaking wildlife naturalist tracker',
                        'National park entry permits & tracker insurance',
                        'Iced mineral water, tropical juices & field binoculars',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {attraction.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{attraction.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {attraction.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Safari Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Culture & Heritage of Sri Lanka Section */}
        {(activeCategory === 'culture' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  SACRED KINGDOMS &amp; LIVING TRADITIONS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Featured Culture &amp; Heritage of Sri Lanka
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Temple of the Sacred Tooth Relic, Sigiriya rock citadel, sacred Vatadage ruins, Galle Dutch ramparts, and Kandyan fire dancers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CULTURE_HERITAGE_ATTRACTIONS.map((attraction) => (
                <div
                  key={attraction.id}
                  onClick={() =>
                    onSelectExperience({
                      id: attraction.id,
                      title: attraction.name,
                      category: 'culture',
                      tagline: attraction.tag,
                      location: attraction.location,
                      image: attraction.image,
                      rating: 4.96,
                      reviewsCount: 385,
                      duration: 'Full Day / Half Day',
                      priceLkr: 28000,
                      priceUnit: 'person',
                      highlights: attraction.highlights,
                      description: attraction.description,
                      included: [
                        'Private air-conditioned chauffeur transfer',
                        'Certified archaeological historian guide',
                        'Monument entry permits & site coordination',
                        'Chilled bottled mineral water & refresher wipes',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {attraction.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{attraction.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {attraction.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Heritage Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Whale Watching & Beach Activities Section */}
        {(activeCategory === 'whale' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  OCEAN ADVENTURES &amp; COASTAL WATERSPORTS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Whale Watching &amp; Beach Activities
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Mirissa blue whale watching, paramotor flights, sea turtle hatchling release, Kalpitiya kitesurfing, coral reef snorkeling, and wave riding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHALE_BEACH_ACTIVITIES.map((attraction) => (
                <div
                  key={attraction.id}
                  onClick={() =>
                    onSelectExperience({
                      id: attraction.id,
                      title: attraction.name,
                      category: 'whale',
                      tagline: attraction.tag,
                      location: attraction.location,
                      image: attraction.image,
                      rating: 4.95,
                      reviewsCount: 340,
                      duration: 'Half Day / Excursion',
                      priceLkr: 22000,
                      priceUnit: 'person',
                      highlights: attraction.highlights,
                      description: attraction.description,
                      included: [
                        'Safety certified equipment & gear',
                        'Certified instructor or marine naturalist guide',
                        'Chilled bottled mineral water & refreshments',
                        'Hotel pickup & transfer coordination',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {attraction.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{attraction.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {attraction.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Activity Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Discover the Best of Ella Section */}
        {(activeCategory === 'train' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  MISTY HIGHLANDS &amp; ADVENTURE WONDERS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Discover The Best of Ella
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                World-famous blue train over Nine Arch Bridge, Flying Ravana zipline, Nil Diya Pokuna cave pool, Little Adam’s Peak hike, Ravana Falls, and bohemian nightlife.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ELLA_BEST_ATTRACTIONS.map((attraction) => (
                <div
                  key={attraction.id}
                  onClick={() =>
                    onSelectExperience({
                      id: attraction.id,
                      title: attraction.name,
                      category: 'train',
                      tagline: attraction.tag,
                      location: attraction.location,
                      image: attraction.image,
                      rating: 4.98,
                      reviewsCount: 420,
                      duration: 'Half Day / Full Day',
                      priceLkr: 24000,
                      priceUnit: 'person',
                      highlights: attraction.highlights,
                      description: attraction.description,
                      included: [
                        'Private air-conditioned chauffeur transfer',
                        'Experienced local highland guide',
                        'Reserved permits & entry tickets',
                        'Chilled bottled mineral water',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {attraction.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{attraction.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {attraction.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Ella Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Kitulgala Adventures Section */}
        {(activeCategory === 'kitulgala' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  WHITE WATER, CANYONING &amp; RAINFOREST EXPEDITIONS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Kitulgala Adventures
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Experience Sri Lanka’s premier adventure capital: Grade 2–3+ Kelani River white-water rafting, jungle ATV off-roading, waterfall confidence jumps, canyoning rock slides, abseiling, and Makandawa rainforest trekking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KITULGALA_ADVENTURES.map((adventure) => (
                <div
                  key={adventure.id}
                  onClick={() =>
                    onSelectExperience({
                      id: adventure.id,
                      title: adventure.name,
                      category: 'kitulgala',
                      tagline: adventure.tag,
                      location: adventure.location,
                      image: adventure.image,
                      rating: 4.97,
                      reviewsCount: 380,
                      duration: 'Half Day / Full Day Action',
                      priceLkr: 22000,
                      priceUnit: 'person',
                      highlights: adventure.highlights,
                      description: adventure.description,
                      included: [
                        'CE-certified safety equipment, life jackets & helmets',
                        'Certified river guides & Swiftwater rescue masters',
                        'Chilled bottled mineral water & hot Ceylon tea',
                        'Dedicated lockers, changing facilities & river transfers',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={adventure.image}
                        alt={adventure.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {adventure.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{adventure.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {adventure.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {adventure.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Adventure Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Explore Hill Country Section */}
        {(activeCategory === 'hillcountry' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  SPIRAL TOWERS, CLOUD FORESTS &amp; SACRED PEAKS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Explore Hill Country
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Ascend the iconic spiraling Ambuluwawa Tower, trek Horton Plains to World’s End, witness the sacred dawn sunrise from Adam’s Peak, plunge into turquoise mountain waterfall pools, explore Sembuwatta Lake, stroll Hakgala gardens, and experience Ceylon tea plucking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPLORE_HILL_COUNTRY_ATTRACTIONS.map((place) => (
                <div
                  key={place.id}
                  onClick={() =>
                    onSelectExperience({
                      id: place.id,
                      title: place.name,
                      category: 'hillcountry',
                      tagline: place.tag,
                      location: place.location,
                      image: place.image,
                      rating: 4.98,
                      reviewsCount: 410,
                      duration: 'Full Day / Excursion',
                      priceLkr: 26000,
                      priceUnit: 'person',
                      highlights: place.highlights,
                      description: place.description,
                      included: [
                        'Private air-conditioned vehicle with highland driver',
                        'Entrance tickets & park access permits',
                        'Experienced local guide & nature commentary',
                        'Chilled bottled mineral water & hot Ceylon tea',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {place.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{place.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {place.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Place Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Explore Sinharaja Rainforest Section */}
        {(activeCategory === 'sinharaja' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  UNESCO PRIMARY BIOSPHERE &amp; ENDEMIC WILDLIFE
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Explore Sinharaja Rainforest
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                Misty mountain dawn vistas, vibrant Sri Lanka Blue Magpie bird waves, Ceylon Birdwing butterflies, jungle bamboo river rafting, mossy prehistoric creeks, and refreshing tropical waterfall plunge pools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPLORE_SINHARAJA_ATTRACTIONS.map((place) => (
                <div
                  key={place.id}
                  onClick={() =>
                    onSelectExperience({
                      id: place.id,
                      title: place.name,
                      category: 'sinharaja',
                      tagline: place.tag,
                      location: place.location,
                      image: place.image,
                      rating: 4.98,
                      reviewsCount: 320,
                      duration: 'Full Day / Excursion',
                      priceLkr: 29500,
                      priceUnit: 'person',
                      highlights: place.highlights,
                      description: place.description,
                      included: [
                        'Conservation entry permits & UNESCO biosphere fees',
                        'Expert certified botanical tracker & naturalist',
                        'Traditional organic village breakfast & rainforest lunch',
                        'Private air-conditioned chauffeur vehicle & leech protection gear',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={place.image}
                        alt={place.name}
                        className={`w-full h-full object-cover ${place.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {place.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{place.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {place.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Rainforest Place</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Gems, Arts, Crafts & Souvenirs Section */}
        {(activeCategory === 'crafts' || activeCategory === 'all') && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  HERITAGE ARTISANS, SAPPHIRES &amp; CEYLON KEEPSAKES
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                  Gems, Arts, Crafts &amp; Souvenirs of Sri Lanka
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-md mt-2 sm:mt-0">
                World-renowned Ceylon Blue Sapphires, master wax-resist batik textiles, hand-carved Ambalangoda masks, traditional riverbed terracotta pottery, and vibrant artisan souvenir emporiums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GEMS_ARTS_CRAFTS_ATTRACTIONS.map((place) => (
                <div
                  key={place.id}
                  onClick={() =>
                    onSelectExperience({
                      id: place.id,
                      title: place.name,
                      category: 'crafts',
                      tagline: place.tag,
                      location: place.location,
                      image: place.image,
                      rating: 4.97,
                      reviewsCount: 380,
                      duration: 'Half Day / Excursion',
                      priceLkr: 18500,
                      priceUnit: 'person',
                      highlights: place.highlights,
                      description: place.description,
                      included: [
                        'Private chauffeur transfer to authentic artisan studios',
                        'Hands-on workshop access & materials included',
                        'Certified gemologist appraisal guidance',
                        'Curated gift packaging and international delivery assistance',
                      ],
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-[#a67b38]/30 hover:shadow-lg"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <img
                        src={place.image}
                        alt={place.name}
                        className={`w-full h-full object-cover ${place.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        {place.tag}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#a67b38]" />
                        <span className="truncate">{place.location}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                        {place.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-gray-50 pt-3.5">
                    <span className="text-xs font-semibold text-[#a67b38] group-hover:text-[#0f2d25] transition-colors flex items-center gap-1">
                      <span>Explore Craft &amp; Artisan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Curated Destination & Adventure Guides */}
        {matchingGuides.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                CURATED EXPEDITION GUIDES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
                Discover Sri Lanka’s Wild, Ocean &amp; Cultural Wonders
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl">
                Read in-depth about our dedicated safari jeeps, marine expeditions, river safaris, rainforest sanctuaries, and ancient kingdoms.
              </p>
            </div>

            <div className="space-y-8">
              {matchingGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-white rounded-2xl p-6 sm:p-9 card-shadow border border-gray-100 relative overflow-hidden"
                >
                  {/* Curated Expedition Image */}
                  {guide.image && (
                    <div className="mb-6 rounded-xl overflow-hidden h-52 sm:h-72 md:h-80 w-full relative group">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/95 text-[#0f2d25] backdrop-blur-sm shadow-md">
                          {guide.tag}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      {!guide.image && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#faf7f2] text-[#a67b38] border border-amber-200/60 mb-2">
                          {guide.tag}
                        </span>
                      )}
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0f2d25] leading-tight">
                        {guide.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal mb-4">
                    {guide.intro}
                  </p>

                  {/* Details Paragraph if present */}
                  {guide.details && (
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {guide.details}
                    </p>
                  )}

                  {/* Subsections if present (e.g. Whale & Dolphin, Snorkelling, Crocodile & River Safaris) */}
                  {guide.subsections && guide.subsections.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                      {guide.subsections.map((sub, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-[#faf7f2] rounded-xl border border-amber-200/50 flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="font-heading text-sm font-bold text-[#0f2d25] mb-2 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#a67b38] flex-shrink-0" />
                              <span>{sub.title}</span>
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {sub.body}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Clickable Destinations */}
                  {guide.places && guide.places.length > 0 && (
                    <div className="my-4 p-3 bg-amber-50/40 rounded-xl border border-amber-200/50">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#a67b38] block mb-1.5">
                        Click Place to Fill Reservation:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {guide.places.map((place) => (
                          <button
                            key={place}
                            type="button"
                            onClick={() => {
                              if (onBookPlace) {
                                onBookPlace(place);
                              } else {
                                onBookExperience({
                                  id: `${guide.id}-${place}`,
                                  title: place,
                                  tagline: guide.tag,
                                  category: (guide.theme as ExperienceItem['category']) || 'culture',
                                  location: place,
                                  duration: 'Flexible',
                                  priceLkr: 0,
                                  priceUnit: 'group',
                                  rating: 4.95,
                                  reviewsCount: 120,
                                  image: guide.image,
                                  description: `Custom private excursion exploring ${place} with Ceylora Travels.`,
                                  highlights: [place],
                                  included: ['Private Chauffeur', 'Tailored Itinerary'],
                                });
                              }
                            }}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white hover:bg-[#0f2d25] text-gray-800 hover:text-white border border-amber-200 hover:border-[#0f2d25] font-semibold transition-all cursor-pointer shadow-xs hover:shadow-sm"
                            title={`Click to fill Experience / Destination with ${place}`}
                          >
                            <MapPin className="w-3 h-3 text-[#a67b38]" />
                            <span>{place}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key points checklist */}
                  {guide.keyPoints && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5 pt-4 border-t border-gray-100">
                      {guide.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50/80 p-2.5 rounded-lg border border-gray-100">
                          <CheckCircle2 className="w-4 h-4 text-[#a67b38] flex-shrink-0" />
                          <span className="font-medium line-clamp-1">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footnote callout */}
                  {guide.footnote && (
                    <div className="mt-4 p-3.5 border-l-3 border-[#a67b38] bg-[#faf7f2]/70 rounded-r-lg text-xs text-gray-600 italic">
                      {guide.footnote}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500 font-medium">
                      Interested in this expedition? Contact our private concierges:
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={getWhatsAppUrl(
                          `Hello Ceylora Travels, I would like to inquire about: ${guide.title}. Please provide more details and customized options.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
                      >
                        <i className="fa-brands fa-whatsapp text-sm"></i>
                        <span>Inquire on WhatsApp</span>
                      </a>
                      <button
                        onClick={() =>
                          onBookExperience({
                            id: guide.id,
                            title: guide.title.split(' – ')[0],
                            tagline: guide.tag,
                            category: (guide.theme as ExperienceItem['category']) || 'wildlife',
                            location: 'Sri Lanka',
                            duration: 'Tailored',
                            priceLkr: 25000,
                            priceUnit: 'group',
                            rating: 4.95,
                            reviewsCount: 110,
                            image: POPULAR_EXPERIENCES[0].image,
                            description: guide.intro,
                            highlights: guide.keyPoints || [],
                            included: [],
                          })
                        }
                        className="px-4 py-2 bg-[#0f2d25] hover:bg-[#1b4339] text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
                      >
                        Book This Experience
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
