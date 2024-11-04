// app/components/ServerCounter.tsx

import ReloadButton from './ReloadButton';

interface ServerCounterProps {
    initialCount: number;
}

export default function ServerCounter({ initialCount }: ServerCounterProps) {
  const serverCount = initialCount + 1;
  const serverCounterText = process.env.SERVER_COUNTER_TEXT;

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-48 mx-auto my-4 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Server Side Counter</h2>
      <p className="text-3xl font-bold text-blue-600 mb-4">{serverCount}</p>
      <p className="text-sm text-green-500 mb-2">{serverCounterText}</p>
      <p className="text-sm text-gray-500 mb-4">（リロードすると増加します）</p>
      <ReloadButton serverCount={serverCount} />
    </div>
  );
}
