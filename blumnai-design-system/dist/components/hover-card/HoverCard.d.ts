import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import type { HoverCardProps, HoverCardContentProps } from './HoverCard.types';
declare const HoverCard: {
    ({ ...props }: HoverCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const HoverCardTrigger: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React.ForwardRefExoticComponent<HoverCardContentProps & React.RefAttributes<HTMLDivElement>>;
declare const HoverCardArrow: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>;
export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardArrow };
