// app/components/ReloadButton.tsx

"use client";

interface ReloadButtonProps {
  serverCount: number;
}

export default function ReloadButton({ serverCount }: ReloadButtonProps) {
  const handleReload = () => {
    window.location.href = `/?serverCount=${serverCount}`;
  };

  return (
    <button
      onClick={handleReload}
      className="bg-blue-600 text-white font-semibold text-lg px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      +
    </button>
  );
}
