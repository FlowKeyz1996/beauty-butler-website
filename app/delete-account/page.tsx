// components/DeleteAccount.tsx

import React from "react";
import Link from "next/link";

const DeleteAccount: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-lg mx-auto my-10">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Delete Your Account</h1>
      <p className="text-gray-600 mb-6">
        As a user, you have certain rights regarding your personal data. You have the right to access, rectify, object
        to, or erase the data maintained by us. If you wish to request the deletion of your personal data, please
        follow the steps below:
      </p>

      <div className="bg-white p-4 rounded-md shadow-sm mb-6">
        <h2 className="text-lg font-medium text-gray-800 mb-2">1. In-App Request</h2>
        <p className="text-gray-600 mb-4">
          To initiate the data deletion request, you can fill out the request form through the{' '}
          <span className="font-semibold">‘Initiate Account Deletion’</span> option within the app.
        </p>

        <h2 className="text-lg font-medium text-gray-800 mb-2">2. Google Play Store</h2>
        <p className="text-gray-600">
          Alternatively, you can find the request form in the data deletion section of the Google Play Store.
        </p>
      </div>

      <p className="text-gray-600 mb-6">
        Once you have submitted the request, our team will verify it accordingly. Upon successful verification, your
        account and all associated data will be permanently deleted within 90 days, ensuring the complete removal of
        your information from our systems.
      </p>

      <Link href="https://forms.gle/aiDJfpNpytNYb2QV8">
      <button className="w-full block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium">
          Initiate Account Deletion
          </button>  
      </Link>
    </div>
  );
};

export default DeleteAccount;
