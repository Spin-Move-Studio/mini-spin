import { Chat } from "@/components/chat";

export default function ChatPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/spinbot-card-bg.png')" }}
    >
      <div className="w-[90%] max-w-3xl h-[85vh] bg-transparent backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/20 overflow-hidden">
        <Chat />
      </div>
    </div>
  );
}
