import React from 'react';
import Hero from '../components/home/Hero';
import PopularDestinations from '../components/home/PopularDestinations';
import FeaturedTours from '../components/home/FeaturedTours';
import Testimonials from '../components/home/Testimonials';
import SearchBar from '../components/common/SearchBar';
import Newsletter from '../components/common/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="relative z-10 bg-white shadow-lg rounded-xl mx-auto max-w-5xl px-6 py-8 -mt-24">
        <SearchBar />
      </div>
      <PopularDestinations />
      <FeaturedTours />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;