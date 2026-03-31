interface InfoFieldProps {
  label: string;
  value: string;
  fullWidth?: boolean;
}

export function InfoField({ label, value, fullWidth = false }: InfoFieldProps) {
  const containerClass = fullWidth
    ? "content-stretch flex font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] gap-[8px] items-center leading-[1.2] not-italic relative shrink-0 text-[13px] text-zinc-900 tracking-[-0.26px] w-full"
    : "basis-0 content-stretch flex font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] gap-[8px] grow items-center leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-nowrap text-zinc-900 tracking-[-0.26px] whitespace-pre";

  const labelClass = fullWidth
    ? "opacity-60 relative shrink-0 w-[40px]"
    : "min-w-[40px] opacity-60 relative shrink-0";

  return (
    <div className={containerClass}>
      <p className={labelClass}>{label}</p>
      <p className="opacity-80 relative shrink-0">{value}</p>
    </div>
  );
}

interface InfoFieldGridProps {
  fields: Array<{
    id: string;
    label: string;
    value: string;
  }>;
}

export function InfoFieldGrid({ fields }: InfoFieldGridProps) {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="3grid">
      {fields.map((field) => (
        <InfoField
          key={field.id}
          label={field.label}
          value={field.value}
        />
      ))}
    </div>
  );
}
