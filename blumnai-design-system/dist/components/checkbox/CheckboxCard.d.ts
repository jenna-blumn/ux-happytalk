import * as React from 'react';
import type { CheckboxCardProps } from './CheckboxCard.types';
/**
 * CheckboxCard 컴포넌트
 *
 * 카드 형태의 체크박스입니다. 제목, 설명, 섹션을 표시할 수 있습니다.
 *
 * @example
 * <CheckboxCard title="옵션 A" description="설명" checked={checked} onCheckedChange={setChecked} />
 */
declare const CheckboxCard: React.ForwardRefExoticComponent<CheckboxCardProps & React.RefAttributes<HTMLDivElement>>;
export { CheckboxCard };
