import type { LazyExoticComponent, ComponentType } from 'react';
import type { Props } from '../Icon/IconWrapper.types';
export declare function getBrandSync(key: string): ComponentType<Props> | null;
export declare function getBrandLazy(key: string): LazyExoticComponent<ComponentType<Props>> | null;
export declare function hasBrand(key: string): boolean;
