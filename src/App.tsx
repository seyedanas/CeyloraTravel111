/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustValueStrip } from './components/TrustValueStrip';
import { PopularExperiences } from './components/PopularExperiences';
import { Footer } from './components/Footer';
import { HotelsScreen } from './components/screens/HotelsScreen';
import { ExploreSriLankaScreen } from './components/screens/ExploreSriLankaScreen';
import { ToursScreen } from './components/screens/ToursScreen';
import { TransportScreen } from './components/screens/TransportScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { BookingModal } from './components/BookingModal';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';
import { SearchModal } from './components/SearchModal';
import { CurrencyCode, ScreenId, ExperienceItem, HotelItem, ActiveTab } from './types/travel';
import { getWhatsAppUrl, CEYLORA_WHATSAPP_DISPLAY } from './data/travelData';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('LKR');

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalType, setBookingModalType] = useState('Tours & Experiences');
  const [bookingModalItem, setBookingModalItem] = useState('');

  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const navigateTo = (screen: ScreenId) => {
    setSelectedExperience(null);
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (params: {
    tab: ActiveTab;
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => {
    if (params.tab === 'hotels') {
      navigateTo('hotels');
    } else if (params.tab === 'transport') {
      navigateTo('transport');
    } else {
      navigateTo('tours');
    }
  };

  const handleOpenBooking = (type = 'Tours & Experiences', itemName = '') => {
    setBookingModalType(type);
    setBookingModalItem(itemName);
    setBookingModalOpen(true);
  };

  const handleBookHotel = (hotel: HotelItem) => {
    handleOpenBooking('Hotels & Villas', hotel.name);
  };

  const handleBookExperience = (exp: ExperienceItem) => {
    handleOpenBooking('Tours & Experiences', exp.title);
  };

  const handleBookPlace = (placeName: string, category = 'Tours & Experiences') => {
    handleOpenBooking(category, placeName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Universal Header with Navigation, Socials, Currency Selector */}
      <Header
        activeScreen={activeScreen}
        onNavigate={navigateTo}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBookingModal={() => handleOpenBooking('Custom Travel Package', 'Tailor-Made Sri Lanka Tour')}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area based on Active Screen */}
      <main className="flex-grow">
        {activeScreen === 'home' && (
          <>
            {/* Exact replica of the screenshot hero */}
            <Hero
              onSearch={handleHeroSearch}
              onNavigate={navigateTo}
            />

            {/* 5-Item Value & Trust Strip */}
            <TrustValueStrip />

            {/* 6 Popular Experience Cards */}
            <PopularExperiences
              onNavigate={navigateTo}
              onSelectExperience={(exp) => setSelectedExperience(exp)}
              onBookPlace={handleBookPlace}
            />
          </>
        )}

        {activeScreen === 'explore' && (
          <ExploreSriLankaScreen
            onNavigate={navigateTo}
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onBookExperience={handleBookExperience}
            onBookPlace={handleBookPlace}
          />
        )}

        {activeScreen === 'hotels' && (
          <HotelsScreen
            currency={currency}
            onBookHotel={handleBookHotel}
            onBookPlace={handleBookPlace}
          />
        )}

        {activeScreen === 'tours' && (
          <ToursScreen
            currency={currency}
            onBookExperience={handleBookExperience}
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onBookPlace={handleBookPlace}
          />
        )}

        {activeScreen === 'transport' && (
          <TransportScreen
            currency={currency}
            onOpenBookingModal={(prefill) => handleOpenBooking('Transport & Transfers', prefill || 'Airport Transfer')}
          />
        )}

        {activeScreen === 'about' && (
          <AboutScreen
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenBooking('Custom Travel Package', 'Bespoke Sri Lanka Holiday')}
          />
        )}

        {activeScreen === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBookingModal={() => handleOpenBooking('Custom Travel Package', 'General Inquiry')}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currency={currency}
        initialType={bookingModalType}
        initialItemName={bookingModalItem}
      />

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <ExperienceDetailModal
          key={selectedExperience.id}
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
          currency={currency}
          onBook={handleBookExperience}
        />
      )}

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        currency={currency}
        onSelectExperience={(exp) => setSelectedExperience(exp)}
        onSelectHotel={handleBookHotel}
        onNavigate={navigateTo}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Connect on WhatsApp (${CEYLORA_WHATSAPP_DISPLAY})`}
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer border-2 border-white/80"
          title={`Chat with Ceylora Travels on WhatsApp (${CEYLORA_WHATSAPP_DISPLAY})`}
        >
          <span className="relative flex items-center justify-center">
            <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </span>
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            {CEYLORA_WHATSAPP_DISPLAY}
          </span>
        </a>
      </aside>
    </div>
  );
}
