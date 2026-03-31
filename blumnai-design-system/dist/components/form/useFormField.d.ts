/**
 * 폼 필드 상태와 ID를 가져오는 훅
 */
export declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import("react-hook-form").FieldError;
    id: string | undefined;
    name: string;
    formItemId: string | undefined;
    formDescriptionId: string | undefined;
    formMessageId: string | undefined;
};
