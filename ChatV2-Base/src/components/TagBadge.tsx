interface TagBadgeProps {
  label: string;
}

export function TagBadge({ label }: TagBadgeProps) {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="Badge">
      <div className="flex flex-col font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px]">
        <p className="leading-[13px] whitespace-pre">{label}</p>
      </div>
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
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[1.2] not-italic opacity-60 relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre">
        {title}
      </p>
      <TagList tags={tags} />
    </div>
  );
}
