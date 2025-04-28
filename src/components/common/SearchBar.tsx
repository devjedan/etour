import { useState } from 'react';
import { Calendar, MapPin, Users, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to tours page with search parameters
    navigate('/tours', {
      state: {
        destination,
        dateRange,
        travelers,
      },
    });
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Your Perfect Trip</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Destination
          </label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="destination"
              placeholder="Where are you going?"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="date-range"
              placeholder="Select dates"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = 'text';
              }}
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
            Travelers
          </label>
          <div className="relative">
            <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              id="travelers"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 appearance-none"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            >
              <option value="1 Traveler">1 Traveler</option>
              <option value="2 Travelers">2 Travelers</option>
              <option value="3 Travelers">3 Travelers</option>
              <option value="4 Travelers">4 Travelers</option>
              <option value="5+ Travelers">5+ Travelers</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-transparent mb-1">Search</label>
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Search size={18} className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;