import type { ToastOptions } from './Toast.types';
export declare const toast: {
    default: (message: string, options?: ToastOptions) => string | number;
    info: (message: string, options?: ToastOptions) => string | number;
    success: (message: string, options?: ToastOptions) => string | number;
    warning: (message: string, options?: ToastOptions) => string | number;
    error: (message: string, options?: ToastOptions) => string | number;
    dismiss: (id?: number | string) => string | number;
    dismissAll: () => string | number;
};
