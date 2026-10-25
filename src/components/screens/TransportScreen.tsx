import React, { useState } from 'react';
import { FLEET_VEHICLES, AIRPORT_ROUTES } from '../../data/travelData';
import { CurrencyCode } from '../../types/travel';
import { Users, Briefcase, CheckCircle2, Car, Navigation } from 'lucide-react';

interface TransportScreenProps {
  currency: CurrencyCode;
  onOpenBookingModal: (prefill?: string) => void;
}

export const TransportScreen: React.FC<TransportScreenProps> = ({
  currency,
  onOpenBookingModal,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>(AIRPORT_ROUTES[1].id); // Default to Galle

  const activeRoute = AIRPORT_ROUTES.find((r) => r.id === selectedRouteId) || AIRPORT_ROUTES[0];

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            20+ Vehicles • Cars, Vans &amp; Buses
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Transportation &amp; Private Transfers
          </h1>
          <p className="text-lg text-[#e6ca91] font-serif italic mt-2">
            Travel Sri Lanka in Comfort and Confidence
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-3xl font-light leading-relaxed">
            At Ceylora Travels, we believe that a memorable journey begins with a comfortable and reliable ride. With a fleet of more than 20 vehicles, including cars, vans and buses, we offer convenient transportation solutions for every type of traveller.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        {/* Intro Overview Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-gray-100 mb-12">
          <div className="max-w-3xl">
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              Whether you are travelling as a couple, a family, a group of friends or a larger tour group, we can help arrange suitable transportation to match your needs.
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              From airport pickups and hotel transfers to scenic road trips, sightseeing tours and multi-day island journeys, our transportation services are designed to make exploring Sri Lanka comfortable, convenient and hassle-free.
            </p>
          </div>
        </div>

        {/* Travel Your Way Section */}
        <div className="bg-gradient-to-r from-[#0f2d25] to-[#143d32] text-white rounded-2xl p-7 sm:p-10 card-shadow border border-[#1b4339] mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c49a56] block mb-1.5">
              FLEXIBLE ISLAND EXPLORATION
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
              Travel Your Way
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light mb-3">
              Our goal is to make every journey as enjoyable as the destination itself. Whether you need a simple airport transfer or transportation for an entire Sri Lankan holiday, Ceylora Travels is here to help you plan your journey with confidence.
            </p>
            <p className="text-xs sm:text-sm text-[#e6ca91] font-medium leading-relaxed">
              Enjoy the freedom to explore Sri Lanka at your own pace, with transportation arrangements tailored to your travel plans.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal('Custom Island Transport')}
            className="px-6 py-3.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            Request Transport Quote
          </button>
        </div>
        {/* Interactive Airport Transfer Fare Calculator */}
        <div id="airport-calculator" className="bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-gray-100 mb-14">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#a67b38]">
            <Navigation className="w-4 h-4" />
            <span>Instant Rate Calculator</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
            Bandaranaike Airport (CMB) Express Transfers
          </h2>
          <p className="text-sm text-gray-600 mt-1 mb-6">
            Meet-and-greet in arrival lobby with personalized name plaque, luggage assistance, and flight delay guarantee.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf7f2] p-6 rounded-xl border border-amber-100">
            {/* Route Selector */}
            <div className="lg:col-span-7">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Choose Drop-off Destination:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AIRPORT_ROUTES.map((route) => (
                  <button
                    key={route.id}
                    onClick={() => setSelectedRouteId(route.id)}
                    className={`p-3 rounded-lg text-left text-xs transition-all border cursor-pointer ${
                      selectedRouteId === route.id
                        ? 'bg-[#0f2d25] text-white border-[#0f2d25] font-semibold shadow-sm'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{route.to}</div>
                    <div
                      className={`text-[11px] mt-0.5 ${
                        selectedRouteId === route.id ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {route.duration} • {route.distanceKm} km
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Fare Display */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  Chauffeured Airport Transfer
                </span>
                <div className="text-2xl font-bold text-[#0f2d25] mt-1">
                  Private Fixed-Rate Transfer
                </div>
                <div className="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Includes all expressway tolls, parking &amp; taxes</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Pickup:</span>
                    <span className="font-semibold text-gray-800">CMB Airport Arrival Lobby</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Drop-off:</span>
                    <span className="font-semibold text-gray-800">{activeRoute.to}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated Duration:</span>
                    <span className="font-semibold text-gray-800">{activeRoute.duration}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onOpenBookingModal(`Airport Transfer to ${activeRoute.to}`)}
                  className="w-full py-3 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Car className="w-4 h-4" />
                  <span>Reserve This Transfer</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Vehicles Section */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
              OUR CHAUFFEURED FLEET
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0f2d25]">
              Executive Fleet Built for Sri Lankan Roads
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              All vehicles are non-smoking, strictly inspected before every dispatch, and maintained to international luxury standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FLEET_VEHICLES.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-white p-4 border-b border-gray-100 flex items-center justify-center">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#0f2d25]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {v.type}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#c49a56]" /> {v.seats} Seats
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#c49a56]" /> {v.luggage} Bags
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 leading-snug">
                      {v.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                      {v.description}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {v.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#a67b38] flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                        Service Inclusions
                      </span>
                      <div className="text-sm font-bold text-[#0f2d25] flex items-center gap-1.5 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a67b38]" />
                        <span>Dedicated Chauffeur &amp; Fuel Included</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBookingModal(`Vehicle Hire: ${v.name}`)}
                      className="px-5 py-2.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      Book Vehicle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chauffeur Standards Guarantee Banner */}
        <div className="bg-[#0f2d25] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c49a56] block mb-2">
              THE CEYLORA DISTINCTION
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">
              Why our guests love our drivers
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Every driver is an ambassador of Sri Lankan warmth. No unrequested commercial stops, no commission pressure, just genuine local guidance and patient care for your family.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal('Multi-Day Chauffeur Tour')}
            className="px-7 py-3.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Hire Driver for Full Island Tour
          </button>
        </div>
      </div>
    </div>
  );
};
