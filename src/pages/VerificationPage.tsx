import React from "react";

const VerificationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#BA0000]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Account Verified!
          </h1>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <p className="text-gray-600 mb-6">
            Your account at{" "}
            <span className="font-semibold">Nikolyn's Laundry Shop</span> has
            been successfully verified.
          </p>
          <p className="text-gray-500 text-sm">
            You can now close this tab and log in to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
