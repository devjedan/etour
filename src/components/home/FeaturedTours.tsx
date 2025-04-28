import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Tag } from 'lucide-react';

interface Tour {
  id: string;
  title: string;
  destination: string;
  duration: number;
  groupSize: number;
  price: number;
  discount?: number;
  image: string;
  rating: number;
  reviewCount: number;
}

const tours: Tour[] = [
  {
    id: 'golden-triangle',
    title: 'Golden Triangle Tour',
    destination: 'Delhi, Agra, Jaipur',
    duration: 6,
    groupSize: 15,
    price: 45000,
    discount: 10,
    image: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Cruise',
    destination: 'Alleppey, Kumarakom',
    duration: 5,
    groupSize: 10,
    price: 38000,
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 'swiss-alps',
    title: 'Swiss Alps Adventure',
    destination: 'Zurich, Lucerne, Interlaken',
    duration: 8,
    groupSize: 12,
    price: 120000,
    discount: 15,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 'bali-retreat',
    title: 'Bali Retreat Package',
    destination: 'Ubud, Seminyak, Kuta',
    duration: 7,
    groupSize: 8,
    price: 65000,
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviewCount: 112,
  },
];

const FeaturedTours = () => {
  const [hoveredTour, setHoveredTour] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Tour Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our hand-picked tour packages curated to provide you with unforgettable experiences and amazing adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tours/${tour.id}`}
              className="group"
              onMouseEnter={() => setHoveredTour(tour.id)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative">
                  {tour.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                      {tour.discount}% OFF
                    </div>
                  )}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredTour === tour.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(tour.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
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
                    <span className="ml-1 text-xs text-gray-600">({tour.reviewCount} reviews)</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tour.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tour.destination}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="text-gray-400 mr-2" />
                      <span className="text-xs text-gray-600">{tour.duration} days</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="text-gray-400 mr-2" />
                      <span className="text-xs text-gray-600">Max {tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      {tour.discount ? (
                        <div className="flex items-center">
                          <span className="text-gray-400 text-xs line-through mr-2">
                            ₹{tour.price.toLocaleString()}
                          </span>
                          <span className="text-primary-600 font-bold">
                            ₹{(tour.price * (1 - tour.discount / 100)).toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <span className="text-primary-600 font-bold">₹{tour.price.toLocaleString()}</span>
                      )}
                      <p className="text-xs text-gray-500">per person</p>
                    </div>

                    <span className="text-primary-600 text-sm group-hover:text-primary-800 transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/tours"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;