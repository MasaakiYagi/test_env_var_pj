// app/components/ReloadButton.tsx

"use client";

export default function ReloadButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="bg-blue-600 text-white font-semibold text-lg px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      +
    </button>
  );
}
