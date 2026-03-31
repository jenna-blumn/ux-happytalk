export interface UseKeyboardShortcutOptions {
    enabled?: boolean;
    ignoreInputFields?: boolean;
    preventDefault?: boolean;
}
/**
 * 키보드 단축키에 대한 글로벌 keydown 리스너를 바인딩합니다.
 *
 * @remarks
 * 브라우저가 예약한 단축키(⌘W, ⌘N, ⌘T, ⌘Q 등)는 JavaScript로 차단할 수 없습니다.
 * 이러한 단축키는 브라우저가 이벤트를 JavaScript에 전달하기 전에 처리합니다.
 * 다음 단축키는 사용을 피하세요: ⌘W, ⌘N, ⌘⇧N, ⌘T, ⌘Q, ⌘L
 */
export declare function useKeyboardShortcut(shortcut: string | undefined | null, handler: () => void, options?: UseKeyboardShortcutOptions): void;
