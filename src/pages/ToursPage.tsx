import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SearchBar from '../components/common/SearchBar';
import Newsletter from '../components/common/Newsletter';

interface SearchState {
  destination?: string;
  dateRange?: string;
  travelers?: string;
}

const ToursPage = () => {
  const location = useLocation();
  const searchParams = location.state as SearchState;
  const [selectedFilters, setSelectedFilters] = useState({
    destination: searchParams?.destination || '',
    dateRange: searchParams?.dateRange || '',
    travelers: searchParams?.travelers || '',
    priceRange: 'all',
    duration: 'all',
    rating: 'all'
  });

  return (
    <>
      <Helmet>
        <title>Tours | E-Tour</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Search Section */}
        <div className="bg-primary-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={selectedFilters.priceRange}
                    onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-25000">Under ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                    <option value="100000+">Above ₹1,00,000</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={selectedFilters.duration}
                    onChange={(e) => setSelectedFilters({...selectedFilters, duration: e.target.value})}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="all">Any Duration</option>
                    <option value="1-3">1-3 Days</option>
                    <option value="4-7">4-7 Days</option>
                    <option value="8-14">8-14 Days</option>
                    <option value="15+">15+ Days</option>
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <select
                    value={selectedFilters.rating}
                    onChange={(e) => setSelectedFilters({...selectedFilters, rating: e.target.value})}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="all">Any Rating</option>
                    <option value="4.5+">4.5 & Above</option>
                    <option value="4+">4.0 & Above</option>
                    <option value="3.5+">3.5 & Above</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Available Tours</h1>
                <select className="border border-gray-300 rounded-md p-2">
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <p className="text-gray-600 text-center py-8">Loading tours...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </div>
    </>
  );
};

export default ToursPage;