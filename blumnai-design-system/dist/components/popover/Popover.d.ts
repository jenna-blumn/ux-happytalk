import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { PopoverContentProps, PopoverScrollAreaProps } from './Popover.types';
/**
 * Popover 컴포넌트
 *
 * 클릭으로 열리는 플로팅 콘텐츠 컨테이너입니다. PopoverTrigger, PopoverContent와 함께 사용합니다.
 *
 * @example
 * <Popover>
 *   <PopoverTrigger asChild><span><Button>열기</Button></span></PopoverTrigger>
 *   <PopoverContent>내용</PopoverContent>
 * </Popover>
 */
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare const PopoverPortal: React.FC<PopoverPrimitive.PopoverPortalProps>;
declare const PopoverClose: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
declare const PopoverScrollArea: {
    ({ className, maxHeight, children }: PopoverScrollAreaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PopoverArrow: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
export { Popover, PopoverTrigger, PopoverAnchor, PopoverPortal, PopoverClose, PopoverContent, PopoverScrollArea, PopoverArrow, };
