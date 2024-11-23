import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function SocialFeed() {
  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us on social media for updates and announcements
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={32} />
          </a>
          <a
            href="#"
            className="text-pink-600 hover:text-pink-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://wa.me/919335152423"
            className="text-green-600 hover:text-green-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}