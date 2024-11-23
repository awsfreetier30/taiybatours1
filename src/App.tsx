import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Package from './components/Package';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import WhatsAppButton from './components/WhatsAppButton';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import SocialFeed from './components/SocialFeed';

function App() {
  const packages = [
    {
      title: 'Semi Deluxe Package 2024-25',
      type: 'Semi Deluxe',
      duration: '17 Days',
      distances: {
        makkah: '700 mtr',
        madinah: '400 mtr'
      },
      inclusions: ['Saudi Airline Ticket', 'Visa', 'Insurance', 'WiFi', 'Laundry', 'Hotel', 'Buffet Meals', 'Transfers', 'Complete Ziyarat'],
      price: 93000,
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa'
    },
    {
      title: 'Deluxe Package 2024-25',
      type: 'Deluxe',
      duration: '17 Days',
      distances: {
        makkah: '500 mtr',
        madinah: '150 mtr'
      },
      inclusions: ['Saudi Airline Ticket', 'Visa', 'Insurance', 'WiFi', 'Laundry', 'Hotel', 'Buffet Meals', 'Transfers', 'Complete Ziyarat'],
      price: 103000,
      image: 'https://images.unsplash.com/photo-1537444532052-2afbf769b76c'
    },
    {
      title: 'Winter Special Package 2024-25',
      type: 'Winter Special',
      duration: '17 Days',
      distances: {
        makkah: '500 mtr',
        madinah: '150 mtr'
      },
      dates: ['21 Dec 2024', '27 Dec 2024'],
      route: 'LKO-JED-LKO',
      inclusions: ['Saudi Airline Ticket', 'Visa', 'Insurance', 'WiFi', 'Laundry', 'Hotel', 'Buffet Meals', 'Transfers', 'Complete Ziyarat'],
      price: 107000,
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Packages 2024-25
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated packages designed to provide you with the most blessed and comfortable journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Package key={index} {...pkg} />
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Note: Embassy Case additional charge: ₹2,000</p>
            <p>All packages are subject to Saudi Government rules and regulations.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Video Section */}
      <VideoSection />

      {/* Social Media Feed */}
      <SocialFeed />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for any queries about our packages or services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default App;