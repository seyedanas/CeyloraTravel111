import React from 'react';

export const TrustValueStrip: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-6" data-purpose="features-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {/* Value Item 1 */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a67b38] flex-shrink-0 text-base">
              <i className="fa-regular fa-compass"></i>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">Handpicked Places</h4>
              <p className="text-xs text-gray-500 mt-0.5">Best stays and experiences</p>
            </div>
          </div>

          {/* Value Item 2 */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a67b38] flex-shrink-0 text-base">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">Local Expertise</h4>
              <p className="text-xs text-gray-500 mt-0.5">Trusted local team</p>
            </div>
          </div>

          {/* Value Item 3 */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a67b38] flex-shrink-0 text-base">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">Secure Booking</h4>
              <p className="text-xs text-gray-500 mt-0.5">Safe payments &amp; support</p>
            </div>
          </div>

          {/* Value Item 4 */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a67b38] flex-shrink-0 text-base">
              <i className="fa-regular fa-calendar-check"></i>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">Flexible Options</h4>
              <p className="text-xs text-gray-500 mt-0.5">Customisable itineraries</p>
            </div>
          </div>

          {/* Value Item 5 */}
          <div className="flex items-center space-x-3.5 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a67b38] flex-shrink-0 text-base">
              <i className="fa-regular fa-comment-dots"></i>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">24/7 Support</h4>
              <p className="text-xs text-gray-500 mt-0.5">We're here for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
