export interface ParsedShortcut {
    key: string;
    meta: boolean;
    ctrl: boolean;
    shift: boolean;
    alt: boolean;
    hasModifier: boolean;
}
export declare function parseShortcut(shortcut: string): ParsedShortcut;
