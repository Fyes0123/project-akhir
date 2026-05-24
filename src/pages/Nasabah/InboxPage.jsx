import React from "react";

const users = [
  "Andrew",
  "Jessica",
  "Michael",
  "Amanda",
  "Jonathan",
  "William",
  "Sarah",
  "Daniel",
  "Sophia",
];

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-md p-5">
        <div className="bg-green-700 text-white text-center py-2 rounded font-bold mb-5">
          Talking
        </div>

        <div className="space-y-2">
          {users.map((name, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{name}</span>

              <button className="text-green-700 hover:underline font-semibold">
                Answer
              </button>
            </div>
          ))}
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