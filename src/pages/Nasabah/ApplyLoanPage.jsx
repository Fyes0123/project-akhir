import React from "react";

export default function ApplyLoanPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      {/* CONTAINER */}
      <div className="max-w-3xl mx-auto">

        {/* HEADER CARD */}
        <div className="bg-green-900 text-white rounded-t-xl p-6 shadow-lg">
          <h1 className="text-4xl font-bold">
            Loan Application
          </h1>

          <p className="mt-2 text-green-100">
            Lengkapi formulir berikut untuk mengajukan pinjaman usaha.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-b-xl shadow-lg p-8 space-y-8">

          {/* PERSONAL INFORMATION */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Employer Name
                </label>

                <input
                  type="text"
                  placeholder="Your business/company"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

            </div>
          </div>

          {/* LOAN INFORMATION */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Loan Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Monthly Income
                </label>

                <input
                  type="text"
                  placeholder="Rp 5.000.000"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Loan Amount
                </label>

                <input
                  type="text"
                  placeholder="Rp 10.000.000"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Repayment Period
                </label>

                <select
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                >
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Purpose of Loan
                </label>

                <input
                  type="text"
                  placeholder="Business Expansion"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

            </div>
          </div>

          {/* DOCUMENT UPLOAD */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Upload Documents
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Upload KTP
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Upload Selfie
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Upload Income Proof
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>

            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 pt-4">

            <button className="px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 transition font-semibold">
              Go Back
            </button>

            <button className="px-6 py-3 rounded-lg bg-lime-500 hover:bg-lime-600 text-white font-semibold transition">
              Submit Application
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}