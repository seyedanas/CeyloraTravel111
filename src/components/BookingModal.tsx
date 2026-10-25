import React, { useState, useEffect } from 'react';
import { CurrencyCode } from '../types/travel';
import { getWhatsAppUrl } from '../data/travelData';
import { CheckCircle2, X, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  initialType?: string;
  initialItemName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Tours & Experiences',
  initialItemName = '',
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [bookingType, setBookingType] = useState<string>(initialType);
  const [itemName, setItemName] = useState<string>(initialItemName || 'Custom Island Journey');
  const [startDate, setStartDate] = useState<string>('2026-11-15');
  const [endDate, setEndDate] = useState<string>('2026-11-22');
  const [guests, setGuests] = useState<number>(2);

  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [bookingRef, setBookingRef] = useState<string>('CEY-8492');

  useEffect(() => {
    if (isOpen) {
      setItemName(initialItemName || 'Custom Island Journey');
      if (initialType) {
        setBookingType(initialType);
      }
      setStep('form');
    }
  }, [isOpen, initialItemName, initialType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'CEY-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setStep('confirmed');

    const whatsappText = `Hello Ceylora Travels,\n\nI have submitted a booking request with Reference: *${randomRef}*\n• Category: ${bookingType}\n• Service: ${itemName}\n• Travel Dates: ${startDate} to ${endDate}\n• No of Person: ${guests} ${guests === 1 ? 'Guest' : 'Guests'}\n• Name: ${customerName || 'Traveler'}\n• Email: ${customerEmail}${specialRequests ? `\n• Special Requests: ${specialRequests}` : ''}\n\nPlease confirm availability and details. Thank you!`;
    const whatsappUrl = getWhatsAppUrl(whatsappText);

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a67b38]">
                CEYLORA RESERVATIONS
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#0f2d25] mt-1">
                Book Your Experience
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Secure your boutique stay, private safari, or chauffeur transfer.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    'Hotels & Villas',
                    'Tours & Experiences',
                    'Transport & Transfers',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBookingType(type)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        bookingType === type
                          ? 'bg-[#0f2d25] text-white border-[#0f2d25] font-semibold'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type.split(' & ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Item / Package Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Experience / Destination
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ella Scenic Train Ride or Cape Weligama Villa"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] font-medium text-gray-900"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25]"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25]"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Guests
                  </label>
                  <select
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25] bg-white"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Information */}
              <div className="pt-2 border-t border-gray-100">
                <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Primary Traveler Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25]"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25]"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Special requests (e.g., flight number for airport pickup, vegetarian diet, baby car seat, honeymoon perk)..."
                  className="w-full text-xs px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0f2d25]"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                ></textarea>
              </div>

              {/* Trust assurance */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 bg-[#faf7f2] p-2.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#a67b38] flex-shrink-0" />
                <span>Zero pre-payment penalty. Free cancellation up to 48 hours prior.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Confirm Reservation Request
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#a67b38]">
              RESERVATION RECEIVED
            </span>
            <h2 className="font-heading text-2xl font-bold text-[#0f2d25] mt-1">
              Ayubowan, {customerName || 'Traveler'}!
            </h2>
            <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
              Your booking inquiry has been recorded. Our concierge has reserved your spot.
            </p>

            {/* Voucher Card */}
            <div className="my-6 bg-[#faf7f2] border border-amber-200 rounded-xl p-5 text-left text-xs space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200/60 font-semibold text-gray-800">
                <span>Booking Reference:</span>
                <span className="text-[#a67b38] font-bold text-sm tracking-wide">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-medium text-gray-900">{itemName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Travel Dates:</span>
                <span className="font-medium text-gray-900">{startDate} to {endDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">No of Person:</span>
                <span className="font-medium text-gray-900">{guests} Guests</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Contact:</span>
                <span className="font-medium text-gray-900">{customerEmail}</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Done &amp; Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
