import React from 'react';
import AuthorsTable from '../components/AuthorsTable';

const Authors = () => {
  return (
    <div className="p-6">
      <h1 className="mb-8 text-2xl font-bold text-gray-800">Authors Management</h1>
      <AuthorsTable />
    </div>
  );
};

export default Authors;