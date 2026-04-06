import type { LazyExoticComponent, ComponentType } from 'react';
import type { IsometricSvgProps } from './icons/isometric.types';
/** 동기 조회: 청크가 이미 로드된 경우 아이콘 반환 */
export declare function getIsoSync(key: string): ComponentType<IsometricSvgProps> | null;
/** lazy 조회: 청크가 아직 로드되지 않은 경우 lazy 컴포넌트 반환 */
export declare function getIsoLazy(key: string): LazyExoticComponent<ComponentType<IsometricSvgProps>> | null;
/** 아이콘 존재 여부 확인 */
export declare function hasIso(key: string): boolean;
