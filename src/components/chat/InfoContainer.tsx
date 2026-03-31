import { InfoField, InfoFieldGrid } from "./InfoField";
import { TagSection } from "./TagBadge";

function Divider() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[400px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(244, 244, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 1">
            <line id="Line 3" stroke="var(--stroke-0, #F4F4F5)" x2="400" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface InfoContainerData {
  title: string;
  category: string;
  gridFields: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  tags: Array<{
    id: string;
    label: string;
  }>;
}

interface InfoContainerProps {
  data: InfoContainerData;
}

export function InfoContainer({ data }: InfoContainerProps) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
          <InfoField label="제목" value={data.title} fullWidth />
          <InfoField label="분류" value={data.category} fullWidth />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="3">
            <p className="font-sans leading-[1.2] not-italic opacity-60 relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px] w-[40px]">
              방번호
            </p>
          </div>
          <InfoFieldGrid fields={data.gridFields} />
          <Divider />
          <TagSection title="상담방 태그" tags={data.tags} />
        </div>
      </div>
    </div>
  );
}
