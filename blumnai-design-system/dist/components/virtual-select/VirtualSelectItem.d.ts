import * as React from 'react';
import type { SelectOption, SelectType } from '../select/Select.types';
interface VirtualSelectItemProps {
    option: SelectOption;
    selected: boolean;
    focused: boolean;
    disabled?: boolean;
    isMulti: boolean;
    selectType?: SelectType;
    onSelect: () => void;
    style: React.CSSProperties;
}
declare const VirtualSelectItem: React.NamedExoticComponent<VirtualSelectItemProps>;
export { VirtualSelectItem };
