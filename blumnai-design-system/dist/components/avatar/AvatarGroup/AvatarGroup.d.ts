import type { AvatarGroupProps } from './AvatarGroup.types';
/**
 * AvatarGroup 컴포넌트
 *
 * 여러 아바타를 겹쳐서 표시하는 그룹 컴포넌트입니다. +N 오버레이를 지원합니다.
 *
 * @example
 * <AvatarGroup avatars={[{ src: '/a.jpg' }, { name: '홍길동' }]} max={5} />
 */
export declare const AvatarGroup: import("react").ForwardRefExoticComponent<AvatarGroupProps & import("react").RefAttributes<HTMLDivElement>>;
