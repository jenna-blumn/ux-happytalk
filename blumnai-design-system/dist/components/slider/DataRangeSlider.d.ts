import * as React from 'react';
import type { DataRangeSliderProps } from './Slider.types';
/**
 * DataRangeSlider 컴포넌트
 *
 * 데이터 분포 차트가 포함된 범위 슬라이더입니다.
 *
 * @example
 * <DataRangeSlider chartData={[10, 30, 50, 40, 20]} value={[20, 80]} onChange={setRange} />
 */
declare const DataRangeSlider: React.ForwardRefExoticComponent<DataRangeSliderProps & React.RefAttributes<HTMLSpanElement>>;
export { DataRangeSlider };
