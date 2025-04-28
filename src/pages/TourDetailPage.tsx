import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Tour Details</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Placeholder content - to be implemented with actual tour data */}
          <div className="p-6">
            <p className="text-gray-600">Loading tour details for ID: {id}...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;