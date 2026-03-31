import * as React from 'react';
import type { SliderProps } from './Slider.types';
/**
 * Slider 컴포넌트
 *
 * 단일 값 슬라이더입니다. 틱 마크, 라벨, 다양한 색상을 지원합니다.
 *
 * @example
 * <Slider value={50} onChange={setValue} min={0} max={100} />
 */
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
export { Slider };
