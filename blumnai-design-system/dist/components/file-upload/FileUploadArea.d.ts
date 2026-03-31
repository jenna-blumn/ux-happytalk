import type { FileUploadAreaProps } from './FileUpload.types';
/**
 * FileUploadArea 컴포넌트
 *
 * 드래그 앤 드롭 파일 업로드 영역입니다. 파일 타입/크기 제한을 지원합니다.
 *
 * @example
 * <FileUploadArea
 *   accept="image/*,.pdf"
 *   maxFiles={5}
 *   onFilesSelected={handleFiles}
 * />
 */
export declare const FileUploadArea: import("react").ForwardRefExoticComponent<FileUploadAreaProps & import("react").RefAttributes<HTMLDivElement>>;
