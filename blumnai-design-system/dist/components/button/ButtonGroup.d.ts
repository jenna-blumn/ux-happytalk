import type { ButtonGroupProps, ButtonGroupSize, ButtonGroupItem } from './ButtonGroup.types';
/**
 * ButtonGroup 컴포넌트
 *
 * 관련 버튼들을 그룹으로 묶어 표시하는 컴포넌트입니다.
 * WAI-ARIA toolbar 패턴으로 ArrowLeft/Right, Home/End 키보드 탐색을 지원합니다.
 *
 * @example
 * <ButtonGroup items={[{ label: "A" }, { label: "B" }]} size="md" />
 */
export declare const ButtonGroup: import("react").ForwardRefExoticComponent<ButtonGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export type { ButtonGroupProps, ButtonGroupSize, ButtonGroupItem };
