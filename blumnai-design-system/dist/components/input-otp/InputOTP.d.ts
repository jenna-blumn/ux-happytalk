import * as React from 'react';
import type { InputOTPProps, InputOTPSlotProps } from './InputOTP.types';
declare const InputOTP: React.ForwardRefExoticComponent<InputOTPProps & React.RefAttributes<HTMLInputElement>>;
declare const InputOTPGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const InputOTPSlot: React.ForwardRefExoticComponent<InputOTPSlotProps & React.RefAttributes<HTMLDivElement>>;
declare const InputOTPSeparator: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
