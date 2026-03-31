import { LeftSidebar } from "./components/LeftSidebar";
import { Header } from "./components/Header";
import { ChatListPanel } from "./components/ChatListPanel";
import { ChatDetail } from "./components/ChatDetail";
import { CustomerInfo } from "./components/CustomerInfo";

export default function App() {
  return (
    <div 
      className="content-stretch flex items-start relative h-screen w-full overflow-hidden" 
      data-name="채팅V2 Live"
    >
      <LeftSidebar />
      <div 
        className="content-stretch flex flex-col h-full items-end relative flex-1" 
        data-name="Container"
      >
        <Header />
        <div 
          className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" 
          data-name="Body"
        >
          <ChatListPanel />
          <ChatDetail />
          <CustomerInfo />
        </div>
      </div>
    </div>
  );
}