import React from 'react';
import { FLEET_VEHICLES } from '../data/travelData';
import { ScreenId } from '../types/travel';

interface PrivateTransportSectionProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const PrivateTransportSection: React.FC<PrivateTransportSectionProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section className="py-16 bg-white" data-purpose="transport-and-airport-transfers">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 6 Vehicle Option Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38] block mb-1">
              FLEET OPTIONS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
              Our Vehicle Options
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Tailored transportation solutions across Sri Lanka—from compact hybrids and sedans to high-roof vans and luxury coaches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FLEET_VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => onOpenBookingModal(`Vehicle Hire: ${vehicle.name}`)}
                className="bg-[#faf7f2]/70 hover:bg-[#faf7f2] p-5 rounded-2xl border border-gray-200/80 hover:border-[#a67b38]/50 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-white shadow-xs mb-4 border border-gray-100 p-3 flex items-center justify-center">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#a67b38]">
                      {vehicle.type}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      Up to {vehicle.seats} Seats • {vehicle.luggage} Bags
                    </span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors">
                    {vehicle.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#a67b38] tracking-wider uppercase mt-5 pt-3 border-t border-amber-200/60 flex items-center justify-between">
                  <span>CHAUFFEUR DRIVEN · AC INCLUDED</span>
                  <span className="text-[#0f2d25] group-hover:translate-x-0.5 transition-transform">
                    Book &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
