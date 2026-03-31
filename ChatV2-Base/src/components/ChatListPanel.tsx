import { StatusArea } from "./StatusArea";
import { ChatList } from "./ChatList";

export function ChatListPanel() {
  return (
    <aside 
      className="content-stretch flex flex-col items-start relative shrink-0" 
      data-name="ChatListPanel"
      aria-label="채팅 목록 패널"
    >
      <StatusArea />
      <ChatList />
    </aside>
  );
}