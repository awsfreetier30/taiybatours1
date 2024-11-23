import React from 'react';

const videos = [
  {
    title: 'Previous Hajj Group 2023',
    embedId: 'your-video-id-1',
    thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769'
  },
  {
    title: 'Customer Testimonials',
    embedId: 'your-video-id-2',
    thumbnail: 'https://images.unsplash.com/photo-1537444532052-2afbf769b76c'
  },
  {
    title: 'Our Services Overview',
    embedId: 'your-video-id-3',
    thumbnail: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53'
  }
];

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Video Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch videos from our previous groups and hear what our customers say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative pb-[56.25%]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}