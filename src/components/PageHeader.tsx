import { Badge } from "./ui/badge";

interface PageHeaderProps {
    title: string;
    description?: string;
    showHelpBadge?: boolean;
}

export function PageHeader({ title, description, showHelpBadge = false }: PageHeaderProps) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
                <h1 className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] text-[20px] font-bold leading-[1.2] text-content-main">
                    {title}
                </h1>
                {showHelpBadge && (
                    <Badge
                        variant="secondary"
                        className="text-xs bg-gray-200 text-content-sub hover:bg-gray-300 font-normal rounded-sm px-1.5 py-0.5 h-auto"
                    >
                        도움말
                    </Badge>
                )}
            </div>
            {description && (
                <p className="text-sm text-content-sub leading-[1.2]">
                    {description}
                </p>
            )}
        </div>
    );
}
