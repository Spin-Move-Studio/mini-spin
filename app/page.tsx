'use client';

import { Chat } from '@/components/chat';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-3xl h-[85vh] bg-white p-4 rounded-md shadow-md">
        <Chat id="spinbot" selectedModelId="gpt-4" />
      </div>
    </div>
  );
}
