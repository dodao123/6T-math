import React, { useEffect, useState } from 'react';
import { Phone, ArrowUp, MapPin, MessageCircle } from 'lucide-react';

const ContactIcons = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 820); // Duration of shake animation
    }, 3000); // Trigger every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:flex fixed bottom-5 right-5 flex-col space-y-3 z-50">
  <a
    href="tel:123456789"
    className={`w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${
      shake ? 'animate-[shake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both]' : ''
    }`}
    aria-label="Call"
  >
    <Phone className="w-8 h-8" />
  </a>

  <a
    href="https://zalo.me/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${
      shake ? 'animate-[shake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both]' : ''
    }`}
    aria-label="Zalo"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="..." />
    </svg>
  </a>

  <a
    href="https://www.messenger.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-14 h-14 bg-blue-400 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${
      shake ? 'animate-[shake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both]' : ''
    }`}
    aria-label="Messenger"
  >
    <MessageCircle className="w-8 h-8" />
  </a>

  <a
    href="https://www.google.com/maps"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${
      shake ? 'animate-[shake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both]' : ''
    }`}
    aria-label="Map"
  >
    <MapPin className="w-8 h-8" />
  </a>

  <a
    href="#top"
    className={`w-14 h-14 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${
      shake ? 'animate-[shake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both]' : ''
    }`}
    aria-label="Scroll to Top"
  >
    <ArrowUp className="w-8 h-8" />
  </a>
</div>

  );
};

export default ContactIcons;