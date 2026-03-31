// Message Types
export interface Message {
  id: string;
  type: 'date' | 'user' | 'agent';
  content?: string;
  text?: string;
  time?: string;
}

export interface MessageBubbleProps {
  isUser: boolean;
  text: string;
  time: string;
}

// Chat List Types
export interface ChatItem {
  id: string;
  title: string;
  platform: string;
  status: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  flagColor?: string;
  isFavorite?: boolean;
}

// Status Types
export interface StatusCardProps {
  label: string;
  count: string | number;
  isActive?: boolean;
}

// Customer Info Types
export interface CustomerInfo {
  id: string;
  name: string;
  phone: string;
  email: string;
  grade: string;
  joinDate: string;
}

export interface OrderInfo {
  orderId: string;
  date: string;
  productName: string;
  status: string;
}

export interface ConsultHistoryItem {
  id: string;
  date: string;
  type: string;
  status: string;
}

// Common Component Props
export interface InfoRowProps {
  label: string;
  value: string;
}

export interface SelectOptionProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface BadgeProps {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}
