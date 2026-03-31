/**
 * DropdownMenu 컴포넌트 상수
 *
 * Figma 디자인 기반 설정값
 */
export declare const MENU_CONTAINER_BASE: "flex flex-col bg-card rounded-lg shadow-modal-sm";
export declare const MENU_SIZE_CONFIG: {
    readonly minWidth: "min-width-200";
    readonly maxWidth: "max-width-320";
    readonly padding: "padding-y-4";
};
export declare const ITEM_CONTAINER_BASE: "flex w-full padding-x-4";
export declare const ITEM_INNER_BASE: "flex items-center w-full rounded-xs transition-colors duration-150";
export declare const ITEM_SIZE_CONFIG: {
    readonly default: {
        readonly height: "height-32";
        readonly padding: "padding-6";
        readonly gap: "ds-gap-4";
        readonly iconSize: 16;
        readonly iconFrame: "width-20 height-20";
        readonly iconFrameBg: "";
        readonly text: "size-sm line-height-leading-5 letter-spacing-tracking-tight";
    };
    readonly large: {
        readonly height: "min-height-50";
        readonly padding: "padding-x-8 padding-y-6";
        readonly gap: "ds-gap-4";
        readonly iconSize: 20;
        readonly iconFrame: "width-36 height-36";
        readonly iconFrameBg: "bg-muted rounded-full";
        readonly text: "size-sm line-height-leading-5 letter-spacing-tracking-tight";
    };
};
export declare const ITEM_STATE_CONFIG: {
    readonly default: {
        readonly bg: "bg-transparent";
        readonly text: "text-default";
        readonly captionText: "text-muted";
        readonly iconColor: "var(--icon-default)";
    };
    readonly hover: {
        readonly bg: "hover:bg-state-ghost-hover";
    };
    readonly active: {
        readonly bg: "active:bg-state-ghost-hover";
        readonly text: "text-default";
    };
    readonly disabled: {
        readonly bg: "bg-transparent";
        readonly text: "text-hint";
        readonly captionText: "text-hint";
        readonly iconColor: "var(--icon-default-disabled)";
    };
};
export declare const LABEL_CONFIG: {
    readonly container: "flex w-full padding-x-4";
    readonly inner: "flex items-center w-full padding-x-6 padding-y-4";
    readonly text: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight font-medium text-muted";
};
export declare const DIVIDER_CONFIG: {
    readonly container: "flex w-full padding-x-4 padding-y-2";
    readonly line: "w-full h-px bg-muted";
};
export declare const SHORTCUT_BADGE_CONFIG: {
    readonly container: "inline-flex items-center justify-center bg-card border-default rounded-sm padding-2";
    readonly text: "font-code size-xs line-height-leading-4 letter-spacing-tracking-normal text-muted";
};
export declare const CAPTION_CONFIG: {
    readonly container: "flex-shrink-0 padding-x-2";
    readonly text: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight";
};
export declare const BUTTON_CONTAINER_CONFIG: {
    readonly container: "flex w-full padding-x-12 padding-y-8";
};
export declare const BUTTON_GROUP_CONFIG: {
    readonly container: "flex w-full items-center justify-between padding-x-12 padding-y-8 ds-gap-8";
};
export declare const MENU_BUTTON_CONFIG: {
    readonly base: "inline-flex items-center justify-center rounded-xs border-darker bg-card transition-colors duration-150";
    readonly hover: "hover:bg-muted";
    readonly padding: "padding-x-10 padding-y-4";
    readonly gap: "ds-gap-4";
    readonly text: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-default";
    readonly disabled: {
        readonly bg: "bg-muted";
        readonly text: "text-hint";
        readonly cursor: "cursor-not-allowed";
    };
    readonly shadow: "shadow-button-subtle";
};
export declare const MENU_CAPTION_CONFIG: {
    readonly container: "flex w-full padding-x-12 padding-y-4";
    readonly text: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-muted";
};
export declare const AVATAR_ITEM_CONFIG: {
    readonly container: "flex w-full padding-x-4";
    readonly inner: "flex items-center w-full rounded-xs transition-colors duration-150 padding-6 ds-gap-4";
    readonly avatarSize: 20;
    readonly avatarFrame: "width-20 height-20 rounded-full overflow-hidden flex-shrink-0";
    readonly text: "size-sm line-height-leading-5 letter-spacing-tracking-tight";
};
export declare const USERBAR_CONFIG: {
    readonly container: "flex w-full items-center padding-x-12 padding-y-4 ds-gap-8";
    readonly avatarSize: 32;
    readonly avatarFrame: "width-32 height-32 rounded-full overflow-hidden flex-shrink-0";
    readonly labelContainer: "flex flex-col flex-1 min-w-0";
    readonly name: "font-body size-sm line-height-leading-5 letter-spacing-tracking-tight text-default truncate";
    readonly description: "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted truncate";
    readonly badge: "inline-flex items-center padding-x-4 padding-y-2 rounded-sm border-default bg-card font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted";
};
