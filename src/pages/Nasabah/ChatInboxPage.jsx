import React, { useState } from "react";

export default function ChatInboxPage() {
  const [message, setMessage] = useState("");

  const chats = [
    {
      sender: "Amartha Team",
      text: "Selamat! Loan anda sedang diproses.",
      time: "11:00",
    },
    {
      sender: "User",
      text: "Baik, terima kasih atas informasinya.",
      time: "11:05",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-6">
      <div className="w-full max-w-md bg-green-100 shadow-xl rounded-xl overflow-hidden flex flex-col h-[750px]">
        <div className="bg-green-900 text-white p-4 flex justify-between items-center">
          <h2 className="font-bold text-lg">Amartha Empower</h2>
        </div>

        <div className="text-center text-2xl font-semibold py-4 text-green-900">
          Community
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl max-w-[85%] ${
                chat.sender === "User"
                  ? "bg-green-300 ml-auto"
                  : "bg-green-200"
              }`}
            >
              <div className="font-bold text-sm mb-1">
                {chat.sender}
              </div>

              <div className="text-sm">{chat.text}</div>

              <div className="text-right text-xs mt-2 text-gray-600">
                {chat.time}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-white flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message..."
            className="flex-1 border rounded px-3 py-2"
          />

          <button className="bg-lime-500 hover:bg-lime-600 px-5 py-2 rounded font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}