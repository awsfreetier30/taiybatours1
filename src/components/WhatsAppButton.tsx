import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '919335152423';
  const message = encodeURIComponent('Hello! I would like to know more about your Hajj/Umrah packages.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="animate-bounce" />
    </a>
  );
}