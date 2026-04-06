import type { LazyExoticComponent, ComponentType } from 'react';
import type { Props } from '../Icon/IconWrapper.types';
export declare function getFlagSync(key: string): ComponentType<Props> | null;
export declare function getFlagLazy(key: string): LazyExoticComponent<ComponentType<Props>> | null;
export declare function hasFlag(key: string): boolean;
