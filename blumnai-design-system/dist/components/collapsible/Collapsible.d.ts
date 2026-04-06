import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import type { CollapsibleContentProps } from './Collapsible.types';
/**
 * Collapsible 컴포넌트
 *
 * 접기/펼치기가 가능한 콘텐츠 영역입니다.
 *
 * @example
 * <Collapsible>
 *   <CollapsibleTrigger>열기</CollapsibleTrigger>
 *   <CollapsibleContent>숨겨진 콘텐츠</CollapsibleContent>
 * </Collapsible>
 */
declare const Collapsible: React.ForwardRefExoticComponent<Omit<CollapsiblePrimitive.CollapsibleProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<Omit<CollapsiblePrimitive.CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<HTMLDivElement>>;
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
