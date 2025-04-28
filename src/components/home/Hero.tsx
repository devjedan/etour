import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Explore the World with <span className="text-primary-400">Unforgettable</span> Journeys
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover beautiful destinations, create lasting memories, and embark on adventures tailored just for you. Your dream vacation is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/tours"
                className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                Explore Tours <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/destinations"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-3 px-8 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
              >
                View Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <span className="text-sm font-medium mt-2 block">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;