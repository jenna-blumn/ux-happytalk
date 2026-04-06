
interface TagBadgeProps {
  label: string;
}

export function TagBadge({ label }: TagBadgeProps) {
  return (
    <div className="bg-white/80 backdrop-blur-[2px] ring-1 ring-zinc-900/10 ring-inset rounded-[6px] px-[8px] py-[4px] flex items-center justify-center shrink-0">
      <span className="text-[#4E4E55] text-[12px] font-sans font-normal leading-[16px] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

interface TagListProps {
  tags: Array<{
    id: string;
    label: string;
  }>;
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="content-start flex flex-wrap gap-[5px] items-start relative shrink-0 w-full" data-name="tag list">
      {tags.map((tag) => (
        <TagBadge key={tag.id} label={tag.label} />
      ))}
    </div>
  );
}

interface TagSectionProps {
  title: string;
  tags: Array<{
    id: string;
    label: string;
  }>;
}

export function TagSection({ title, tags }: TagSectionProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="tag">
      <p className="font-sans font-normal leading-[20px] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">
        {title}
      </p>
      <TagList tags={tags} />
    </div>
  );
}
