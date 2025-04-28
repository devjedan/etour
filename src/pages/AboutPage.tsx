import React from 'react';
import { Globe2, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Journey</h1>
            <p className="text-xl opacity-90">Discover the story behind our passion for creating unforgettable travel experiences</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're dedicated to making travel accessible, enriching, and sustainable. Our goal is to connect travelers with authentic experiences while preserving the world's cultural heritage and natural beauty for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-gray-600">Embracing diversity and fostering cross-cultural understanding</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">Supporting local communities and promoting responsible tourism</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Delivering exceptional service and unforgettable experiences</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">Putting our heart into every journey we help create</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded by passionate travelers, our company has grown from a small startup to a trusted name in the travel industry. We've helped thousands of adventurers explore the world's most beautiful destinations while maintaining our commitment to sustainable and responsible tourism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;