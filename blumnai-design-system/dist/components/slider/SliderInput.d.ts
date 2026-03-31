import * as React from 'react';
import type { SliderInputProps } from './Slider.types';
/**
 * SliderInput 컴포넌트
 *
 * 숫자 입력 필드가 포함된 슬라이더입니다. 라벨과 접미사를 지원합니다.
 *
 * @example
 * <SliderInput label="볼륨" value={50} onChange={setValue} />
 */
declare const SliderInput: React.ForwardRefExoticComponent<SliderInputProps & React.RefAttributes<HTMLSpanElement>>;
export { SliderInput };
