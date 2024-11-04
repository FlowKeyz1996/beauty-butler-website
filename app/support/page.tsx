import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        
        {/* Page Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Support</h1>
        
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">How can I reset my password?</h3>
              <p className="text-gray-600">To reset your password, go to the login page and click on "Forgot Password".</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">Where can I view my account settings?</h3>
              <p className="text-gray-600">Navigate to your profile page to manage account settings.</p>
            </li>
            {/* Add more FAQs as needed */}
          </ul>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600">Email: support@example.com</p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-600">Address: 1234 Support St, City, Country</p>
        </section>

        {/* Support Form */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submit a Support Request</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="message">Message</label>
              <textarea id="message" className="w-full border border-gray-300 rounded-md p-2" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Support;
