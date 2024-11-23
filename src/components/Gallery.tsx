import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1537444532052-2afbf769b76c',
    title: 'Masjid Al-Haram'
  },
  {
    url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa',
    title: 'Pilgrims at Kaaba'
  },
  {
    url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53',
    title: 'Masjid An-Nabawi'
  },
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    title: 'Hotel Accommodation'
  },
  {
    url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769',
    title: 'Transport Services'
  },
  {
    url: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb',
    title: 'Previous Groups'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View our collection of images from previous pilgrimages and facilities
          </p>
        </div>

        <PhotoProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <PhotoView key={index} src={image.url}>
                <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-gray-900 font-medium">{image.title}</h3>
                  </div>
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}