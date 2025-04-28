import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
}

const destinations: Destination[] = [
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage.',
    rating: 4.8,
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    image: 'https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Known for its royal palaces, majestic forts, and colorful culture.',
    rating: 4.9,
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Serene backwaters, lush greenery, and Ayurvedic wellness retreats.',
    rating: 4.7,
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Tropical paradise with stunning beaches, vibrant culture, and lush landscapes.',
    rating: 4.8,
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'The City of Light, known for the Eiffel Tower, Louvre, and romantic atmosphere.',
    rating: 4.6,
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Famous for its stunning sunsets, white-washed buildings, and blue domes.',
    rating: 4.9,
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Ultra-modern metropolis with traditional aspects like temples and gardens.',
    rating: 4.7,
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Paradise of overwater bungalows, crystal-clear waters, and white sand beaches.',
    rating: 4.9,
  },
];

const PopularDestinations = () => {
  const [visibleDestinations, setVisibleDestinations] = useState<Destination[]>([]);
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

  useEffect(() => {
    setVisibleDestinations(destinations.slice(0, 6));
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after destinations, from pristine beaches and majestic mountains to vibrant cities and cultural landmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDestinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="group"
              onMouseEnter={() => setHoveredDestination(destination.id)}
              onMouseLeave={() => setHoveredDestination(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredDestination === destination.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center text-white mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{destination.country}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">{destination.rating}</span>
                    </div>
                    <span className="text-primary-600 font-medium text-sm group-hover:text-primary-800 transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/destinations"
            className="inline-flex items-center justify-center py-3 px-8 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;