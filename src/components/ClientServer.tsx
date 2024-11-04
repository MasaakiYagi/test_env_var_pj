// app/components/ClientCounter.tsx

"use client";

import React, { useState, useEffect } from 'react';

export default function ClientCounter() {
  // NEXT_PUBLIC_CLIENT_INITIAL を初期値として使用
  const initialCount = parseInt(process.env.NEXT_PUBLIC_CLIENT_COUNTER_INITIAL || '0', 10);
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-48 mx-auto my-4 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Client Side Counter</h2>
      <p className="text-3xl font-bold text-blue-600 mb-4">{count}</p>
      <p className="text-sm text-green-500 mb-2">
        {process.env.NEXT_PUBLIC_CLIENT_COUNTER_TEXT}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white font-semibold text-lg px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        +
      </button>
    </div>
  );
}
