import React, { useState, useEffect } from 'react';
import { CurrencyCode, ExperienceItem } from '../types/travel';
import {
  BEACH_DESTINATIONS,
  COLOMBO_ATTRACTIONS,
  WILDLIFE_SAFARI_ATTRACTIONS,
  CULTURE_HERITAGE_ATTRACTIONS,
  WHALE_BEACH_ACTIVITIES,
  ELLA_BEST_ATTRACTIONS,
  HOTEL_VILLAS_ATTRACTIONS,
  KITULGALA_ADVENTURES,
  EXPLORE_HILL_COUNTRY_ATTRACTIONS,
  EXPLORE_SINHARAJA_ATTRACTIONS,
  GEMS_ARTS_CRAFTS_ATTRACTIONS,
  TourAttractionItem,
  BEACH_HERO_IMAGE,
  SAFARI_HERO_IMAGE,
  CULTURE_SIGIRIYA_IMAGE,
} from '../data/travelData';
import { X, MapPin, Star, Check, Sparkles, Waves, Landmark, Compass } from 'lucide-react';

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
  currency: CurrencyCode;
  onBook: (experience: ExperienceItem) => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  experience,
  onClose,
  currency,
  onBook,
}) => {
  const [selectedSubItem, setSelectedSubItem] = useState<TourAttractionItem | null>(null);

  const isWhaleBeachExperience =
    Boolean(experience) &&
    (experience!.category === 'whale' ||
      experience!.id === 'exp-whale' ||
      experience!.id.startsWith('activity-') ||
      experience!.title.toLowerCase().includes('whale') ||
      experience!.title.toLowerCase().includes('beach activities'));

  const isBeachExperience =
    Boolean(experience) &&
    !isWhaleBeachExperience &&
    (experience!.category === 'beach' ||
      experience!.id === 'exp-beach' ||
      experience!.id === 'exp-1' ||
      experience!.title.toLowerCase().includes('beach getaways') ||
      (experience!.title.toLowerCase().includes('beach') && !experience!.title.toLowerCase().includes('activities')));

  const isColomboExperience =
    Boolean(experience) &&
    (experience!.category === 'colombo' ||
      experience!.id === 'exp-colombo' ||
      experience!.id === 'exp-7' ||
      experience!.title.toLowerCase().includes('colombo'));

  const isWildlifeExperience =
    Boolean(experience) &&
    (experience!.category === 'wildlife' ||
      experience!.id === 'exp-wildlife' ||
      experience!.id === 'exp-2' ||
      experience!.title.toLowerCase().includes('wildlife') ||
      experience!.title.toLowerCase().includes('safari'));

  const isCultureExperience =
    Boolean(experience) &&
    (experience!.category === 'culture' ||
      experience!.id === 'exp-culture' ||
      experience!.id === 'exp-5' ||
      experience!.title.toLowerCase().includes('culture') ||
      experience!.title.toLowerCase().includes('heritage'));

  const isEllaExperience =
    Boolean(experience) &&
    (experience!.category === 'train' ||
      experience!.id === 'exp-train' ||
      experience!.id === 'exp-3' ||
      experience!.id.startsWith('ella-') ||
      experience!.title.toLowerCase().includes('ella') ||
      experience!.title.toLowerCase().includes('scenic train'));

  const isHotelsExperience =
    Boolean(experience) &&
    (experience!.category === 'hotels' ||
      experience!.id === 'exp-hotels' ||
      experience!.id.startsWith('htl-') ||
      experience!.title.toLowerCase().includes('hotels & villas') ||
      experience!.title.toLowerCase().includes('hotels, resorts') ||
      experience!.title.toLowerCase().includes('hotels'));

  const isKitulgalaExperience =
    Boolean(experience) &&
    (experience!.category === 'kitulgala' ||
      experience!.id === 'exp-kitulgala' ||
      experience!.id.startsWith('kitulgala-') ||
      experience!.title.toLowerCase().includes('kitulgala') ||
      experience!.title.toLowerCase().includes('rafting'));

  const isHillCountryExperience =
    Boolean(experience) &&
    (experience!.category === 'hillcountry' ||
      experience!.id === 'exp-hillcountry' ||
      experience!.id.startsWith('hill-') ||
      experience!.title.toLowerCase().includes('hill country') ||
      experience!.title.toLowerCase().includes('explore hill country'));

  const isSinharajaExperience =
    Boolean(experience) &&
    (experience!.category === 'sinharaja' ||
      experience!.id === 'exp-sinharaja' ||
      experience!.id.startsWith('sinharaja-') ||
      experience!.title.toLowerCase().includes('sinharaja') ||
      experience!.title.toLowerCase().includes('explore sinharaja'));

  const isCraftsExperience =
    Boolean(experience) &&
    (experience!.category === 'crafts' ||
      experience!.id === 'exp-crafts' ||
      experience!.id.startsWith('crafts-') ||
      experience!.title.toLowerCase().includes('gems') ||
      experience!.title.toLowerCase().includes('crafts') ||
      experience!.title.toLowerCase().includes('souvenirs'));

  const hasSubAttractions =
    isBeachExperience ||
    isColomboExperience ||
    isWildlifeExperience ||
    isCultureExperience ||
    isWhaleBeachExperience ||
    isEllaExperience ||
    isHotelsExperience ||
    isKitulgalaExperience ||
    isHillCountryExperience ||
    isSinharajaExperience ||
    isCraftsExperience;

  const subAttractionsList: TourAttractionItem[] = isBeachExperience
    ? BEACH_DESTINATIONS
    : isColomboExperience
    ? COLOMBO_ATTRACTIONS
    : isWildlifeExperience
    ? WILDLIFE_SAFARI_ATTRACTIONS
    : isCultureExperience
    ? CULTURE_HERITAGE_ATTRACTIONS
    : isWhaleBeachExperience
    ? WHALE_BEACH_ACTIVITIES
    : isEllaExperience
    ? ELLA_BEST_ATTRACTIONS
    : isHotelsExperience
    ? HOTEL_VILLAS_ATTRACTIONS
    : isKitulgalaExperience
    ? KITULGALA_ADVENTURES
    : isHillCountryExperience
    ? EXPLORE_HILL_COUNTRY_ATTRACTIONS
    : isSinharajaExperience
    ? EXPLORE_SINHARAJA_ATTRACTIONS
    : isCraftsExperience
    ? GEMS_ARTS_CRAFTS_ATTRACTIONS
    : [];

  // Reset or match selection strictly whenever the experience changes
  useEffect(() => {
    if (!experience) {
      setSelectedSubItem(null);
      return;
    }
    // Only pre-select if the experience is itself this specific sub-attraction
    const directMatch = subAttractionsList.find((item) => item.id === experience.id);
    setSelectedSubItem(directMatch || null);
  }, [experience?.id]);

  if (!experience) return null;

  // Strict check: active selection must belong to the current experience's attractions list
  const activeSubItem =
    selectedSubItem && subAttractionsList.some((item) => item.id === selectedSubItem.id)
      ? selectedSubItem
      : null;

  const handleClose = () => {
    setSelectedSubItem(null);
    onClose();
  };

  // If an attraction is selected, display its image, otherwise default to hero or experience image
  const activeImage = activeSubItem
    ? activeSubItem.image
    : isBeachExperience
    ? BEACH_HERO_IMAGE || experience.image
    : isWildlifeExperience
    ? SAFARI_HERO_IMAGE || experience.image
    : isCultureExperience
    ? CULTURE_SIGIRIYA_IMAGE || experience.image
    : experience.image;

  const activeTitle = activeSubItem
    ? activeSubItem.name
    : experience.title;

  const activeLocation = activeSubItem
    ? activeSubItem.location
    : experience.location;

  const activeDescription = activeSubItem
    ? activeSubItem.description
    : experience.description;

  const activeHighlights = activeSubItem
    ? activeSubItem.highlights
    : experience.highlights;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`bg-white rounded-2xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 relative shadow-2xl transition-all ${
          hasSubAttractions ? 'max-w-4xl' : 'max-w-2xl'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-800 w-8 h-8 rounded-full bg-white/90 hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6 bg-gray-900 shadow-md group">
          <img
            src={activeImage}
            alt={activeTitle}
            className={`w-full h-full object-cover ${activeSubItem?.imagePosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2 flex-wrap">
            <span className="bg-[#0f2d25]/90 backdrop-blur-md text-[#e6ca91] text-xs font-semibold px-3 py-1 rounded-full border border-emerald-900/40">
              {experience.duration || 'Multi-Day / Flexible'}
            </span>
            {isBeachExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Waves className="w-3.5 h-3.5" />
                <span>Coastal Haven</span>
              </span>
            )}
            {isColomboExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Landmark className="w-3.5 h-3.5" />
                <span>Capital City Tour</span>
              </span>
            )}
            {isWildlifeExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5" />
                <span>Wild Safari Expedition</span>
              </span>
            )}
            {isCultureExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Landmark className="w-3.5 h-3.5" />
                <span>Culture & Heritage</span>
              </span>
            )}
            {isHillCountryExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5" />
                <span>Central Highlands</span>
              </span>
            )}
            {isSinharajaExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5" />
                <span>UNESCO Biosphere</span>
              </span>
            )}
            {isCraftsExperience && (
              <span className="bg-[#a67b38]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gems & Master Crafts</span>
              </span>
            )}
          </div>

          {/* Location Badge */}
          <button
            type="button"
            onClick={() => {
              onBook({ ...experience, title: activeLocation });
              handleClose();
            }}
            className="absolute bottom-3.5 left-3.5 bg-black/75 hover:bg-[#0f2d25] backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
            title={`Click to fill Experience / Destination with ${activeLocation}`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#e6ca91]" />
            <span className="font-medium">{activeLocation}</span>
          </button>

          {/* Reset View Button if a sub-attraction is active */}
          {hasSubAttractions && activeSubItem && (
            <button
              onClick={() => setSelectedSubItem(null)}
              className="absolute bottom-3.5 right-3.5 bg-white/90 hover:bg-white text-[#0f2d25] text-xs font-semibold px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-sm"
            >
              {isBeachExperience
                ? 'View All Beaches'
                : isColomboExperience
                ? 'View All Colombo Sights'
                : isWildlifeExperience
                ? 'View All Safari Encounters'
                : isCultureExperience
                ? 'View All Heritage Landmarks'
                : isWhaleBeachExperience
                ? 'View All Ocean & Beach Activities'
                : isEllaExperience
                ? 'View All Ella Highlights'
                : isHotelsExperience
                ? 'View All Hotels & Villas'
                : isKitulgalaExperience
                ? 'View All Kitulgala Adventures'
                : isHillCountryExperience
                ? 'View All Explore Hill Country Highlights'
                : isSinharajaExperience
                ? 'View All Sinharaja Highlights'
                : 'View All Gems, Arts & Crafts Highlights'}
            </button>
          )}
        </div>

        {/* Title & Rating */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] leading-tight">
              {activeTitle}
            </h2>
            {hasSubAttractions && activeSubItem && (
              <span className="text-xs font-semibold text-[#a67b38] uppercase tracking-wider block mt-1">
                {activeSubItem.tag}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold bg-[#faf7f2] px-3 py-1.5 rounded-lg border border-amber-200 text-gray-800 self-start sm:self-auto">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{experience.rating}</span>
            <span className="text-gray-400 font-normal">({experience.reviewsCount})</span>
          </div>
        </div>

        {/* Main Description */}
        <p className="text-sm text-gray-600 mt-3.5 leading-relaxed">
          {activeDescription}
        </p>

        {/* Experience Highlights */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#a67b38]" />
            <span>Experience Highlights</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeHighlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-[#faf7f2]/70 p-2.5 rounded-lg border border-amber-100/60">
                <Check className="w-4 h-4 text-[#a67b38] flex-shrink-0 mt-0.5" />
                <span className="font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIAL SUB-ATTRACTIONS SHOWCASE SECTION: Display all attractions with photos & small descriptions */}
        {hasSubAttractions && subAttractionsList.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
                  {isBeachExperience
                    ? 'FEATURED COASTAL DESTINATIONS'
                    : isColomboExperience
                    ? 'ICONIC CAPITAL SIGHTS & LANDMARKS'
                    : isWildlifeExperience
                    ? 'ICONIC WILDLIFE SAFARI EXPEDITIONS'
                    : isCultureExperience
                    ? 'SACRED HERITAGE & LIVING TRADITIONS'
                    : isWhaleBeachExperience
                    ? 'COASTAL WATERSPORTS & OCEAN ADVENTURES'
                    : isEllaExperience
                    ? 'CENTRAL HIGHLANDS & ADVENTURES'
                    : isHotelsExperience
                    ? 'LUXURY RESORTS & PRIVATE SANCTUARIES'
                    : isKitulgalaExperience
                    ? 'RAINFOREST EXPEDITIONS & OUTDOOR THRILLS'
                    : isHillCountryExperience
                    ? 'SPIRAL TOWERS, CLOUD FORESTS & SACRED PEAKS'
                    : isSinharajaExperience
                    ? 'UNESCO PRIMARY BIOSPHERE & ENDEMIC WILDLIFE'
                    : 'CEYLON SAPPHIRES, MASTER ARTISANS & FOLK KEEPSAKES'}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0f2d25]">
                  {isBeachExperience
                    ? 'Iconic Beaches in This Getaway'
                    : isColomboExperience
                    ? 'Key Attractions in This Colombo City Tour'
                    : isWildlifeExperience
                    ? 'Featured Encounters in This Wildlife Safari'
                    : isCultureExperience
                    ? 'Featured Landmarks & Traditions in Culture & Heritage of Sri Lanka'
                    : isWhaleBeachExperience
                    ? 'Featured Whale Watching & Beach Activities'
                    : isEllaExperience
                    ? 'Discover The Best of Ella'
                    : isHotelsExperience
                    ? 'Featured Hotels, Resorts & Private Villas'
                    : isKitulgalaExperience
                    ? 'Featured Kitulgala Adventures'
                    : isHillCountryExperience
                    ? 'Explore Hill Country'
                    : isSinharajaExperience
                    ? 'Explore Sinharaja Rainforest'
                    : 'Gems, Arts, Crafts & Souvenirs of Sri Lanka'}
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-sm mt-1 sm:mt-0">
                {isBeachExperience
                  ? 'Click any beach to preview its waters and book customized chauffeur transfers or tours.'
                  : isColomboExperience
                  ? 'Click any landmark to preview the location, historic heritage, and photo viewpoints.'
                  : isWildlifeExperience
                  ? 'Click any safari encounter to preview wildlife tracking, 4x4 routes, and national parks.'
                  : isCultureExperience
                  ? 'Click any heritage site or experience to preview history, photo viewpoints, and private guide options.'
                  : isWhaleBeachExperience
                  ? 'Click any ocean activity to preview flights, snorkeling, wave riding, and equipment booking.'
                  : isEllaExperience
                  ? 'Click any place to preview mountain trails, waterfalls, underground caves, ziplines, and train journeys.'
                  : isHotelsExperience
                  ? 'Click any villa or resort to preview its private pools, setting, amenities, and small captions.'
                  : isKitulgalaExperience
                  ? 'Click any adventure to preview white-water rapids, cliff jumps, waterfall canyoning, ATV trails, and river kayaking.'
                  : isHillCountryExperience
                  ? 'Click any place to preview Ambuluwawa tower, World’s End precipice, Adam’s Peak sunrise, Sembuwatta lake, Diyaluma rock pools, and tea estates.'
                  : isSinharajaExperience
                  ? 'Click any place to preview misty dawn mountain ridges, Blue Magpie bird flocks, Ceylon Birdwings, bamboo river rafting, and tropical waterfall pools.'
                  : 'Click any craft or treasure to preview royal sapphires, master batik textiles, hand-carved masks, clay pottery, and souvenir emporiums.'}
              </p>
            </div>

            {/* Attractions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {subAttractionsList.map((item) => {
                const isSelected = activeSubItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedSubItem(isSelected ? null : item)}
                    className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                      isSelected
                        ? 'border-[#a67b38] ring-2 ring-[#a67b38]/30 shadow-md bg-[#faf7f2]/50'
                        : 'border-gray-200 hover:border-[#a67b38]/50 hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Photo */}
                      <div className="relative h-44 overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-full h-full object-cover ${item.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                        />
                        <div className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                          {item.tag}
                        </div>
                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 bg-[#a67b38] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                            Active Selection
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#a67b38] mb-1">
                          <MapPin className="w-3 h-3 text-[#a67b38] flex-shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>

                        <h4 className="font-heading font-bold text-base text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                          {item.name}
                        </h4>

                        {/* Small Description */}
                        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}


        {/* Pricing & CTA */}
        <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
              Experience Type
            </span>
            <div className="text-sm font-bold text-[#0f2d25] flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-4 h-4 text-[#a67b38]" />
              <span>Tailor-Made Private Itinerary • Flexible Dates</span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handleClose}
              className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onBook({
                  ...experience,
                  title: activeSubItem ? activeSubItem.name : experience.title,
                  location: activeSubItem ? activeSubItem.location : experience.location,
                });
                handleClose();
              }}
              className="px-6 py-2.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              {activeSubItem
                ? `Book ${activeSubItem.name}`
                : `Book ${experience.title}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
