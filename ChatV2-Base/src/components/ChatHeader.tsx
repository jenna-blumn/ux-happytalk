import { ChatFavoriteTabs } from "./ChatFavoriteTabs";
import { ChatInformation } from "./ChatInformation";
import { ChatMemo } from "./ChatMemo";

export function ChatHeader() {
  return (
    <header 
      className="bg-white content-stretch flex flex-col items-start relative w-full" 
      data-name="chat-header"
    >
      <ChatFavoriteTabs />
      <ChatInformation />
      <ChatMemo />
    </header>
  );
}