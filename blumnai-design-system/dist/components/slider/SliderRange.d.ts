import * as React from 'react';
import type { SliderRangeProps } from './Slider.types';
/**
 * SliderRange 컴포넌트
 *
 * 두 개의 핸들로 최솟값과 최댓값 범위를 선택하는 슬라이더입니다.
 *
 * @example
 * <SliderRange value={[20, 80]} onChange={setRange} min={0} max={100} />
 */
declare const SliderRange: React.ForwardRefExoticComponent<SliderRangeProps & React.RefAttributes<HTMLSpanElement>>;
export { SliderRange };
