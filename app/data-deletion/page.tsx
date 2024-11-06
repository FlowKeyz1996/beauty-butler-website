// pages/google-data-deletion.tsx
"use client";
import React, { useState } from 'react';

const GoogleDataDeletion: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(''); // Reset message before submission

    try {
      const response = await fetch('/api/delete-google-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, details }),
      });

      if (response.ok) {
        setMessage('Your data deletion request has been submitted successfully.');
      } else {
        setMessage('There was an error submitting your request. Please try again later.');
      }
    } catch (error) {
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Google Data Deletion Request
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          If you want to delete data related to your Google account from our platform, please complete the form below.
        </p>

        {message && (
          <div className="mt-4 text-center text-sm font-medium text-green-600">
            {message}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email Address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="request-details" className="sr-only">
                Request Details
              </label>
              <textarea
                id="request-details"
                name="request-details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Additional Details (Optional)"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Deletion Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoogleDataDeletion;
