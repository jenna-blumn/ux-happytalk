import type { SortableProps, DndItem } from '../dnd.types';
export declare function Sortable<T extends DndItem>({ items, children, onReorder, strategy, disabled, id, standalone, onDragStart, onDragMove, onDragOver, onDragCancel, }: SortableProps<T>): import("react/jsx-runtime").JSX.Element;
