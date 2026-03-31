import type { BaseChartProps } from './Chart.types';
/**
 * 기본 Chart 컴포넌트
 *
 * 모든 차트 유형에 대한 공통 스타일링과 컨테이너를 제공합니다.
 * Figma 디자인에 맞는 흰색 배경, 그림자, 적절한 간격을 적용합니다.
 */
export declare const Chart: import("react").ForwardRefExoticComponent<Omit<BaseChartProps, "data"> & {
    children?: React.ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
