interface GridKeyboardNavOptions {
    rowCount: number;
    colCount: number;
    /**
     * 헤더 행 포함 여부 (true이면 행 인덱스 0은 헤더)
     * @default true
     */
    includeHeader?: boolean;
}
/**
 * DataGrid용 roving tabindex 키보드 내비게이션 훅
 *
 * WAI-ARIA APG grid 패턴에 따라 화살표 키, Home/End, Ctrl+Home/End를 지원합니다.
 */
export declare function useGridKeyboardNav({ rowCount, colCount, includeHeader, }: GridKeyboardNavOptions): {
    gridRef: import("react").RefObject<HTMLDivElement | null>;
    handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    focusCell: (rowIdx: number, colIdx: number) => void;
};
export {};
