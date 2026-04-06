import * as React from 'react';
import type { ProgressProps } from './Progress.types';
/**
 * Progress 컴포넌트
 *
 * 선형 및 원형 프로그레스 바입니다. 다양한 색상과 라벨을 지원합니다.
 *
 * @example
 * <Progress value={50} max={100} />
 */
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export { Progress };
