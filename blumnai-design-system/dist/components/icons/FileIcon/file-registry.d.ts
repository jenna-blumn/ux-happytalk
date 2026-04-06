import type { LazyExoticComponent, ComponentType } from 'react';
import type { Props } from '../Icon/IconWrapper.types';
interface ThumbnailProps extends Props {
    imageSrc?: string;
}
type FileComponent = ComponentType<Props> | ComponentType<ThumbnailProps>;
export declare function getFileSync(key: string): FileComponent | null;
export declare function getFileLazy(key: string): LazyExoticComponent<FileComponent> | null;
export declare function hasFile(key: string): boolean;
export {};
