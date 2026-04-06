import type { Ref, RefCallback } from 'react';
export declare function useMergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T>;
