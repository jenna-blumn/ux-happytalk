import * as React from 'react';
import type { CheckboxProps } from './Checkbox.types';
/**
 * Checkbox 컴포넌트
 *
 * 라벨, 설명, 비확정(indeterminate) 상태를 지원하는 체크박스입니다.
 *
 * @example
 * <Checkbox label="이용약관 동의" checked={checked} onCheckedChange={setChecked} />
 */
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
