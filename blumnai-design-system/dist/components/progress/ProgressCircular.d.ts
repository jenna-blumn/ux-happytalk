import * as React from 'react';
import type { ProgressCircularProps } from './Progress.types';
/**
 * ProgressCircular 컴포넌트
 *
 * 원형 프로그레스 인디케이터입니다. 크기, 색상, 퍼센트 텍스트를 지원합니다.
 *
 * @example
 * <ProgressCircular value={75} size={60} showValue />
 */
declare const ProgressCircular: React.ForwardRefExoticComponent<ProgressCircularProps & React.RefAttributes<HTMLDivElement>>;
export { ProgressCircular };
