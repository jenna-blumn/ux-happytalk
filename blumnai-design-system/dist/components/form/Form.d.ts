import { type FieldValues } from 'react-hook-form';
import type { FormProps } from './Form.types';
/**
 * Form 컴포넌트
 *
 * react-hook-form의 FormProvider를 래핑하고 form 요소를 렌더링합니다.
 */
export declare const Form: {
    <TFieldValues extends FieldValues = FieldValues>({ form, onSubmit, children, ...props }: FormProps<TFieldValues>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
