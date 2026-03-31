import svgPaths from "../imports/svg-lavpwqak8k";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";

interface Message {
  id: string;
  type: 'date' | 'user' | 'agent';
  content?: string;
  text?: string;
  time?: string;
}

interface MessageBubbleProps {
  isUser: boolean;
  text: string;
  time: string;
}

function MessageBubble({ isUser, text, time }: MessageBubbleProps) {
  const alignment = isUser ? 'justify-end' : 'justify-start';
  const itemsAlignment = isUser ? 'items-end' : 'items-start';
  const bgColor = isUser ? 'bg-[#306afe] text-white' : 'bg-white text-[#38373e]';
  
  return (
    <div className={`flex gap-[8px] w-full ${alignment}`}>
      <div className={`flex flex-col gap-[4px] max-w-[70%] ${itemsAlignment}`}>
        <div className={`${bgColor} rounded-[12px] px-[12px] py-[8px] shadow-sm`}>
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[15px] tracking-[-0.28px]">
            {text}
          </p>
        </div>
        <time className="font-['Noto_Sans_KR:Regular',sans-serif] text-[11px] text-gray-400">
          {time}
        </time>
      </div>
    </div>
  );
}

function DateSeparator({ date }: { date: string }) {
  return (
    <div className="flex items-center justify-center w-full py-[12px]">
      <div className="bg-[rgba(140,140,156,0.12)] px-[24px] py-[4px] rounded-[100px]">
        <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] text-[12px] text-gray-500 tracking-[-0.24px]">
          {date}
        </p>
      </div>
    </div>
  );
}

function ChatMessages() {
  const messages: Message[] = [
    { id: 'date-1', type: 'date', content: '상담방 생성 - 2025.08.08 12:13' },
    { id: 'msg-1', type: 'user', text: '궁금한게 있어서 질문 남기는데요', time: '12:13' },
    { id: 'msg-2', type: 'user', text: '배송 관련해서 문의드립니다. 오늘 주문한 상품의 예상 배송일이 궁금합니다.', time: '12:14' },
    { id: 'msg-3', type: 'agent', text: '안녕하세요. 고객님, 문의 주셔서 감사합니다.', time: '12:15' },
    { id: 'msg-4', type: 'agent', text: '주문하신 상품은 내일 오전 중 출고 예정이며, 배송은 2-3일 소요됩니다.', time: '12:15' },
    { id: 'msg-5', type: 'user', text: '감사합니다!', time: '12:16' },
  ];

  return (
    <main 
      className="flex-1 bg-gray-100 overflow-y-auto p-[16px]"
      role="log"
      aria-label="채팅 메시지"
      aria-live="polite"
    >
      <div className="flex flex-col gap-[12px]">
        {messages.map((msg) => {
          if (msg.type === 'date' && msg.content) {
            return <DateSeparator key={msg.id} date={msg.content} />;
          }
          if (msg.text && msg.time) {
            return (
              <MessageBubble
                key={msg.id}
                isUser={msg.type === 'user'}
                text={msg.text}
                time={msg.time}
              />
            );
          }
          return null;
        })}
      </div>
    </main>
  );
}

export function ChatDetail() {
  return (
    <div 
      className="basis-0 bg-gray-100 content-stretch flex grow h-full min-h-px min-w-px relative shrink-0 flex-col"
      role="region"
      aria-label="채팅 상세"
    >
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}