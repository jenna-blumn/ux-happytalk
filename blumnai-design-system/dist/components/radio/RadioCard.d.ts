import * as React from 'react';
import type { RadioCardProps } from './RadioCard.types';
/**
 * RadioCard 컴포넌트
 *
 * 카드 형태의 라디오 버튼입니다. RadioGroup 안에서 사용합니다.
 *
 * @example
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioCard value="a" title="옵션 A" description="설명" />
 * </RadioGroup>
 */
declare const RadioCard: React.ForwardRefExoticComponent<RadioCardProps & React.RefAttributes<HTMLLabelElement>>;
export { RadioCard };
