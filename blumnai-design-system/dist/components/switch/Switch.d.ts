import * as React from 'react';
import type { SwitchProps } from './Switch.types';
/**
 * Switch 컴포넌트
 *
 * 켜기/끄기 토글 스위치입니다. 라벨, 설명, 다양한 색상을 지원합니다.
 *
 * @example
 * <Switch label="알림 활성화" checked={enabled} onCheckedChange={setEnabled} />
 */
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
