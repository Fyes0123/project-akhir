import React from "react";

const modules = [
  {
    title: "Loan Services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "Merchant Loan Approval",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "Repayment Schedule",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "Late Payment",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
];

export default function ModulePage() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-md overflow-hidden">
        <div className="bg-green-700 text-white text-center py-3 font-bold">
          Talking Module
        </div>

        <div className="p-4 bg-green-700 space-y-5">
          {modules.map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-3">
              <h3 className="text-center font-semibold mb-3">
                {item.title}
              </h3>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between p-4">
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