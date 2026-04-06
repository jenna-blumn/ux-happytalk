/**
 * 토큰 기반 Tailwind CSS 클래스 이름
 * 이 클래스들은 src/index.css에 정의된 CSS 변수에 대응됩니다
 * 모든 클래스는 현재 테마(라이트/다크)에 자동으로 적응합니다
 */
export declare const BG: {
    readonly default: "bg-default";
    readonly subtle: "bg-subtle";
    readonly muted: "bg-muted";
    readonly inverted: "bg-inverted";
    readonly accent: "bg-accent";
    readonly card: "bg-card";
    readonly cardSubtle: "bg-card-subtle";
    readonly cardInverted: "bg-card-inverted";
    readonly transparent: "bg-transparent";
};
export declare const BG_STATE: {
    readonly soft: "bg-state-soft";
    readonly softHover: "bg-state-soft-hover";
    readonly softPress: "bg-state-soft-press";
    readonly ghost: "bg-state-ghost";
    readonly ghostHover: "bg-state-ghost-hover";
    readonly ghostPress: "bg-state-ghost-press";
    readonly ghostInverted: "bg-state-ghost-inverted";
    readonly ghostHoverInverted: "bg-state-ghost-hover-inverted";
    readonly ghostPressInverted: "bg-state-ghost-press-inverted";
    readonly primary: "bg-state-primary";
    readonly primaryHover: "bg-state-primary-hover";
    readonly primaryPress: "bg-state-primary-press";
    readonly secondary: "bg-state-secondary";
    readonly secondaryHover: "bg-state-secondary-hover";
    readonly secondaryPress: "bg-state-secondary-press";
};
export declare const BORDER: {
    readonly default: "border-default";
    readonly darker: "border-darker";
    readonly strong: "border-strong";
    readonly inverted: "border-inverted";
    readonly accent: "border-accent";
    readonly accentInverted: "border-accent-inverted";
    readonly destructive: "border-destructive";
    readonly informative: "border-informative";
    readonly success: "border-success";
    readonly warning: "border-warning";
};
export declare const TEXT: {
    readonly default: "text-default";
    readonly subtle: "text-subtle";
    readonly muted: "text-muted";
    readonly hint: "text-hint";
    readonly invertedDefault: "text-inverted-default";
    readonly invertedSubtle: "text-inverted-subtle";
    readonly invertedMuted: "text-inverted-muted";
    readonly invertedHint: "text-inverted-hint";
    readonly whiteDefault: "text-white-default";
    readonly whiteSubtle: "text-white-subtle";
    readonly whiteMuted: "text-white-muted";
    readonly whiteHint: "text-white-hint";
    readonly destructive: "text-destructive";
    readonly success: "text-success";
    readonly warning: "text-warning";
    readonly informative: "text-informative";
};
export declare const LAYOUT: {
    readonly flex: "flex";
    readonly flexCol: "flex flex-col";
    readonly flexCenter: "flex items-center justify-center";
    readonly wFull: "w-full";
    readonly hFull: "h-full";
};
export declare const SPACING: {
    readonly p6: "padding-24";
    readonly py6: "[padding-block:24px]";
    readonly px0: "padding-x-0";
    readonly pt2: "[padding-top:8px]";
};
export declare const RADIUS: {
    readonly none: {
        readonly default: "rounded-radius-none";
        readonly rounded: "rounded-radius-none";
        readonly full: "rounded-radius-none";
        readonly none: "rounded-radius-none";
    };
    readonly '2xs': {
        readonly default: "rounded-radius-2xs";
        readonly rounded: "rounded-radius-2xs-rounded";
        readonly full: "rounded-radius-2xs-full";
        readonly none: "rounded-radius-2xs-none";
    };
    readonly xs: {
        readonly default: "rounded-radius-xs";
        readonly rounded: "rounded-radius-xs-rounded";
        readonly full: "rounded-radius-xs-full";
        readonly none: "rounded-radius-xs-none";
    };
    readonly sm: {
        readonly default: "rounded-radius-sm";
        readonly rounded: "rounded-radius-sm-rounded";
        readonly full: "rounded-radius-sm-full";
        readonly none: "rounded-radius-sm-none";
    };
    readonly md: {
        readonly default: "rounded-radius-md";
        readonly rounded: "rounded-radius-md-rounded";
        readonly full: "rounded-radius-md-full";
        readonly none: "rounded-radius-md-none";
    };
    readonly lg: {
        readonly default: "rounded-radius-lg";
        readonly rounded: "rounded-radius-lg-rounded";
        readonly full: "rounded-radius-lg-full";
        readonly none: "rounded-radius-lg-none";
    };
    readonly xl: {
        readonly default: "rounded-radius-xl";
        readonly rounded: "rounded-radius-xl-rounded";
        readonly full: "rounded-radius-xl-full";
        readonly none: "rounded-radius-xl-none";
    };
    readonly '2xl': {
        readonly default: "rounded-radius-2xl";
        readonly rounded: "rounded-radius-2xl-rounded";
        readonly full: "rounded-radius-2xl-full";
        readonly none: "rounded-radius-2xl-none";
    };
    readonly '3xl': {
        readonly default: "rounded-radius-3xl";
        readonly rounded: "rounded-radius-3xl-rounded";
        readonly full: "rounded-radius-3xl-full";
        readonly none: "rounded-radius-3xl-none";
    };
    readonly full: {
        readonly default: "rounded-radius-full";
        readonly rounded: "rounded-radius-full-rounded";
        readonly full: "rounded-radius-full-full";
        readonly none: "rounded-radius-full-none";
    };
    readonly card: {
        readonly none: {
            readonly default: "rounded-radius-card-none";
            readonly rounded: "rounded-radius-card-none";
            readonly full: "rounded-radius-card-none";
            readonly none: "rounded-radius-card-none";
        };
        readonly xs: {
            readonly default: "rounded-radius-card-xs";
            readonly rounded: "rounded-radius-card-xs-rounded";
            readonly full: "rounded-radius-card-xs-full";
            readonly none: "rounded-radius-card-xs-none";
        };
        readonly sm: {
            readonly default: "rounded-radius-card-sm";
            readonly rounded: "rounded-radius-card-sm-rounded";
            readonly full: "rounded-radius-card-sm-full";
            readonly none: "rounded-radius-card-sm-none";
        };
        readonly md: {
            readonly default: "rounded-radius-card-md";
            readonly rounded: "rounded-radius-card-md-rounded";
            readonly full: "rounded-radius-card-md-full";
            readonly none: "rounded-radius-card-md-none";
        };
        readonly lg: {
            readonly default: "rounded-radius-card-lg";
            readonly rounded: "rounded-radius-card-lg-rounded";
            readonly full: "rounded-radius-card-lg-full";
            readonly none: "rounded-radius-card-lg-none";
        };
    };
};
export declare const BORDER_STYLE: {
    readonly border: "border";
    readonly border0: "border-0";
    readonly borderB: "border-b";
};
export declare const SHADOWS: {
    readonly card: "shadow-card";
    readonly modalSm: "shadow-modal-sm";
    readonly modalMd: "shadow-modal-md";
    readonly modalLg: "shadow-modal-lg";
    readonly componentDefault: "shadow-component-default";
    readonly componentFocus: "shadow-component-focus";
    readonly componentDestructiveFocus: "shadow-component-destructive-focus";
    readonly componentInputFocus: "shadow-component-input-focus";
};
