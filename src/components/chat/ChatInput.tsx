import { ChatInputForm } from "./ChatInputForm";
import { ChatToolBar } from "./ChatToolBar";

export function ChatInput() {
  return (
    <div 
      className="bg-[#f2f4f7] content-stretch flex flex-col items-start relative w-full" 
      data-name="Chat Input"
      role="region"
      aria-label="메시지 입력 영역"
    >
      <ChatInputForm />
      <ChatToolBar />
    </div>
  );
}