import React from "react";

export default function ApplyLoanPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-md p-6">
        <div className="bg-green-700 text-white text-center py-2 font-bold rounded mb-5">
          Loan Application
        </div>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Applicant Monthly Income"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Employer Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Loan Amount Requested"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Repayment Period"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Purpose of Loan"
            className="w-full border p-2 rounded"
          />

          <div>
            <label className="block text-sm mb-1">Upload KTP</label>
            <input type="file" className="w-full text-sm" />
          </div>

          <div>
            <label className="block text-sm mb-1">Upload Selfie</label>
            <input type="file" className="w-full text-sm" />
          </div>

          <div>
            <label className="block text-sm mb-1">Upload Income Proof</label>
            <input type="file" className="w-full text-sm" />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded font-semibold">
            Proceed
          </button>

          <button className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded font-semibold">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}