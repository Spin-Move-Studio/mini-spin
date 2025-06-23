import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl h-[90vh] bg-gray-100 rounded-xl shadow-xl p-6">
        <Chat />
      </div>
    </main>
  );
}
