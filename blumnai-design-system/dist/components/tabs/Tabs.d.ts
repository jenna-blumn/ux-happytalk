import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { TabsListProps, TabsTriggerProps, TabsContentProps } from './Tabs.types';
/**
 * Tabs 컴포넌트
 *
 * 탭 기반 콘텐츠 전환 컴포넌트입니다. TabsList, TabsTrigger, TabsContent와 함께 사용합니다.
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList><TabsTrigger value="tab1">탭 1</TabsTrigger></TabsList>
 *   <TabsContent value="tab1">내용</TabsContent>
 * </Tabs>
 */
declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
