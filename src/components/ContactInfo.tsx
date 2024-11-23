import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const phoneNumbers = [
  '9335152423',
  '8874126126',
  '9335883667'
];

const locations = [
  {
    title: 'Main Office',
    address: '405/223, Chaupatiya Road, Kachchapul, Lucknow',
    maps: 'https://maps.google.com/?q=405/223,Chaupatiya+Road,Kachchapul,Lucknow'
  },
  {
    title: 'Branch Office',
    address: 'Arabian Dates & Dry Fruits, Khurram Nagar, Fatimi Masjid, Lucknow',
    maps: 'https://maps.google.com/?q=Arabian+Dates+&+Dry+Fruits,Khurram+Nagar,Fatimi+Masjid,Lucknow'
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        {/* Phone Numbers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Phone className="mr-2 text-emerald-600" size={20} />
            Contact Numbers
          </h3>
          <div className="space-y-2">
            {phoneNumbers.map((number) => (
              <a
                key={number}
                href={`tel:+91${number}`}
                className="block text-gray-600 hover:text-emerald-600 transition-colors"
              >
                +91 {number.replace(/(\d{5})(\d{5})/, '$1 $2')}
              </a>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <MapPin className="mr-2 text-emerald-600" size={20} />
            Our Locations
          </h3>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div key={index} className="space-y-1">
                <h4 className="font-medium text-gray-900">{location.title}</h4>
                <p className="text-gray-600">{location.address}</p>
                <a
                  href={location.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 text-sm inline-flex items-center"
                >
                  View on Google Maps
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Clock className="mr-2 text-emerald-600" size={20} />
            Working Hours
          </h3>
          <div className="text-gray-600">
            <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
            <p>Sunday: By Appointment Only</p>
          </div>
        </div>
      </div>
    </div>
  );
}