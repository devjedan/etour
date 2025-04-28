import React from 'react';
import { MapPin } from 'lucide-react';

function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Destinations</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover breathtaking locations around the world, from pristine beaches to majestic mountains
        </p>
      </div>

      {/* Placeholder for destinations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example destination card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img 
              src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" 
              alt="Beautiful mountain landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Swiss Alps</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Swiss Alps Adventure</h3>
            <p className="text-gray-600 mb-4">
              Experience the majestic beauty of the Swiss Alps with breathtaking views and exciting activities.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage;