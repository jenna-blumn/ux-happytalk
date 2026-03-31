import { cn } from "@/lib/utils";

interface TabPillsProps {
  items: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function TabPills({ items, activeTab, onTabChange, className }: TabPillsProps) {
  return (
    <div className={cn("flex gap-1 p-1 bg-zinc-100 rounded-lg", className)}>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onTabChange(item)}
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
            activeTab === item
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-500 hover:text-zinc-700"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
