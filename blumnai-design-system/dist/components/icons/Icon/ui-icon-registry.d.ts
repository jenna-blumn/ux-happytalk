import type { LazyExoticComponent, ComponentType } from 'react';
import type { Props as IconProps } from './IconWrapper.types';
/** 동기 조회: 카테고리가 이미 로드된 경우 아이콘 반환 */
export declare function getIconSync(registryKey: string): ComponentType<IconProps> | null;
/** lazy 조회: 카테고리가 아직 로드되지 않은 경우 lazy 컴포넌트 반환 */
export declare function getIconLazy(registryKey: string): LazyExoticComponent<ComponentType<IconProps>> | null;
/** 아이콘 존재 여부 확인 */
export declare function hasIcon(registryKey: string): boolean;
