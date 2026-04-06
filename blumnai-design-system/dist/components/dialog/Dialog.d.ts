import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { DialogProps, DialogContentProps, DialogHeaderProps, DialogFooterProps, DialogScrollAreaProps, DialogTitleProps, DialogActionProps } from './Dialog.types';
/**
 * Dialog 컴포넌트
 *
 * 모달 다이얼로그입니다. DialogContent, DialogHeader, DialogFooter와 함께 사용합니다.
 *
 * @example
 * <Dialog open={open} onOpenChange={setOpen}>
 *   <DialogContent>
 *     <DialogHeader><DialogTitle>제목</DialogTitle></DialogHeader>
 *   </DialogContent>
 * </Dialog>
 */
declare const Dialog: ({ children, open, onOpenChange, defaultOpen, ...props }: DialogProps) => import("react/jsx-runtime").JSX.Element;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
interface DialogCloseProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {
    asChild?: boolean;
}
declare const DialogClose: React.ForwardRefExoticComponent<DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogFooter: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogScrollArea: {
    ({ className, maxHeight, children }: DialogScrollAreaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const DialogAction: React.ForwardRefExoticComponent<DialogActionProps & React.RefAttributes<HTMLButtonElement>>;
export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogAction, DialogContent, DialogHeader, DialogFooter, DialogScrollArea, DialogTitle, DialogDescription, };
