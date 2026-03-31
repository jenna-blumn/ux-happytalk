import type { AvatarSize, AvatarShape, AvatarVariant } from '../../../components/avatar/Avatar/Avatar.types';
export declare const sizes: {
    readonly '2xs': {
        readonly image: 16;
        readonly ring: 20;
        readonly statusBadge: 8;
    };
    readonly xs: {
        readonly image: 20;
        readonly ring: 24;
        readonly statusBadge: 10;
    };
    readonly sm: {
        readonly image: 24;
        readonly ring: 28;
        readonly statusBadge: 12;
    };
    readonly md: {
        readonly image: 32;
        readonly ring: 36;
        readonly statusBadge: 12;
    };
    readonly lg: {
        readonly image: 40;
        readonly ring: 44;
        readonly statusBadge: 16;
    };
    readonly xl: {
        readonly image: 48;
        readonly ring: 52;
        readonly statusBadge: 16;
    };
    readonly '2xl': {
        readonly image: 56;
        readonly ring: 60;
        readonly statusBadge: 18;
    };
    readonly '3xl': {
        readonly image: 64;
        readonly ring: 68;
        readonly statusBadge: 20;
    };
};
export declare const CONTAINER_SIZE_CLASSES: Record<AvatarSize, string>;
export declare const RING_SIZE_CLASSES: Record<AvatarSize, string>;
export declare const IMAGE_SIZE_CLASSES: Record<AvatarSize, string>;
export declare const INITIALS_TYPOGRAPHY_CLASSES: Record<AvatarSize, string>;
export declare const INITIALS_LETTER_SPACING: Record<AvatarSize, string>;
export declare const INITIALS_VERTICAL_OFFSET: Record<AvatarSize, string>;
export declare const statusBadgePositions: {
    readonly '2xs': {
        readonly circular: {
            readonly x: -2;
            readonly y: -2;
        };
        readonly rounded: {
            readonly x: -2;
            readonly y: -2;
        };
    };
    readonly xs: {
        readonly circular: {
            readonly x: -3;
            readonly y: -3;
        };
        readonly rounded: {
            readonly x: -3;
            readonly y: -3;
        };
    };
    readonly sm: {
        readonly circular: {
            readonly x: -3;
            readonly y: -3;
        };
        readonly rounded: {
            readonly x: -3;
            readonly y: -3;
        };
    };
    readonly md: {
        readonly circular: {
            readonly x: -2;
            readonly y: -2;
        };
        readonly rounded: {
            readonly x: -2;
            readonly y: -2;
        };
    };
    readonly lg: {
        readonly circular: {
            readonly x: -2;
            readonly y: -2;
        };
        readonly rounded: {
            readonly x: -2;
            readonly y: -2;
        };
    };
    readonly xl: {
        readonly circular: {
            readonly x: -2;
            readonly y: -2;
        };
        readonly rounded: {
            readonly x: -2;
            readonly y: -2;
        };
    };
    readonly '2xl': {
        readonly circular: {
            readonly x: -1;
            readonly y: -1;
        };
        readonly rounded: {
            readonly x: -1;
            readonly y: -1;
        };
    };
    readonly '3xl': {
        readonly circular: {
            readonly x: 0;
            readonly y: 0;
        };
        readonly rounded: {
            readonly x: 0;
            readonly y: 0;
        };
    };
};
export declare const CONTAINER_BASE_CLASSES = "relative inline-flex shrink-0 padding-2";
export declare const RING_BASE_CLASSES = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shrink-0";
export declare const RING_BG_CLASS: "bg-default";
export declare const RING_SHAPE_CLASSES_CIRCULAR = "rounded-full";
export declare const RING_ROUNDED_RADIUS_CLASSES: Record<AvatarSize, string>;
export declare const IMAGE_CONTAINER_BASE_CLASSES: string;
export declare const IMAGE_CONTAINER_SHAPE_CLASSES: Record<AvatarShape, string>;
export declare const IMAGE_CONTAINER_BORDER_CLASS: "border-default";
export declare const IMAGE_CONTAINER_BG_CLASSES: Record<AvatarVariant, {
    default: string;
    withColor?: string;
}>;
export declare const INITIALS_TEXT_BASE_CLASSES: string;
export declare const INITIALS_POSITION_CLASSES: Record<AvatarSize, string>;
export declare const IMAGE_WRAPPER_CLASSES = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full";
export declare const IMAGE_CLASSES = "max-w-none object-cover size-full";
