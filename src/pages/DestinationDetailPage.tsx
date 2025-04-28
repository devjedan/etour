import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Destination Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Loading destination {id}...</p>
      </div>
    </div>
  );
};

export default DestinationDetailPage;