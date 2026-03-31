import * as React from 'react';
import type { RadioGroupProps, RadioProps } from './Radio.types';
export declare const RadioIndicator: ({ color, size }: {
    color?: string;
    size?: number;
}) => import("react/jsx-runtime").JSX.Element;
type RadioContextValue = {
    value: string | undefined;
};
declare const RadioContext: React.Context<RadioContextValue>;
/**
 * RadioGroup 컴포넌트
 *
 * 라디오 버튼 그룹입니다. Radio 컴포넌트와 함께 사용하여 단일 선택을 구현합니다.
 *
 * @example
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <Radio value="a" label="옵션 A" />
 *   <Radio value="b" label="옵션 B" />
 * </RadioGroup>
 */
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLButtonElement>>;
export { Radio, RadioGroup, RadioContext };
