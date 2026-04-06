import { type ControllerProps, type FieldPath, type FieldValues } from 'react-hook-form';
/**
 * FormField 컴포넌트
 *
 * react-hook-form의 Controller를 감싸고 필드 컨텍스트를 제공합니다.
 */
export declare const FormField: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
