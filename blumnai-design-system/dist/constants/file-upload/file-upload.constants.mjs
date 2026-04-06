const t = "flex flex-col items-center justify-center ds-gap-12 rounded-lg cursor-pointer transition-colors duration-150", e = {
  default: "bg-default border border-dashed border-darker hover:bg-subtle",
  dragging: "bg-state-soft border border-dashed border-accent",
  disabled: "bg-input-disabled border border-dashed border-default cursor-not-allowed opacity-50",
  error: "bg-default border border-dashed border-destructive"
}, n = "padding-24", d = "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium text-default text-center", i = "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium text-hint text-center", r = "text-informative", o = "text-hint", s = "font-body size-xs line-height-leading-4 letter-spacing-tracking-normal text-muted text-center", a = "font-body size-xs line-height-leading-4 letter-spacing-tracking-normal text-hint text-center", l = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-muted", _ = "font-body size-xs line-height-leading-4 letter-spacing-tracking-tight text-destructive", c = "flex items-center ds-gap-8 rounded-lg border-default bg-card shadow-component-default", A = {
  lg: {
    container: "padding-y-8 padding-l-8 padding-r-12",
    thumbnail: "width-40 height-40"
  },
  sm: {
    container: "padding-y-6 padding-l-6 padding-r-12",
    thumbnail: "width-32 height-32"
  }
}, g = "rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center bg-subtle", E = "flex-1 min-w-0 flex flex-col ds-gap-2", L = "font-body size-sm line-height-leading-5 letter-spacing-tracking-normal font-medium text-default truncate", I = "flex items-center ds-gap-4 font-body size-xs line-height-leading-4 letter-spacing-tracking-normal text-muted", h = "text-hint", u = {
  uploaded: "text-success",
  uploading: "text-muted",
  error: "text-destructive"
}, D = {
  uploaded: "Uploaded",
  uploading: "Uploading",
  error: "Error"
}, f = "w-full height-4 bg-muted rounded-full overflow-hidden", b = "h-full bg-state-primary transition-all duration-200", x = "flex items-center ds-gap-4 flex-shrink-0", m = 40, O = {
  lg: 20,
  sm: 16
};
export {
  x as FILE_UPLOAD_ACTIONS,
  t as FILE_UPLOAD_AREA_BASE,
  l as FILE_UPLOAD_AREA_CAPTION,
  r as FILE_UPLOAD_AREA_CLICK_TEXT,
  o as FILE_UPLOAD_AREA_CLICK_TEXT_DISABLED,
  s as FILE_UPLOAD_AREA_DESC,
  a as FILE_UPLOAD_AREA_DESC_DISABLED,
  _ as FILE_UPLOAD_AREA_ERROR_CAPTION,
  m as FILE_UPLOAD_AREA_ICON_SIZE,
  n as FILE_UPLOAD_AREA_PADDING,
  e as FILE_UPLOAD_AREA_STATE,
  d as FILE_UPLOAD_AREA_TITLE,
  i as FILE_UPLOAD_AREA_TITLE_DISABLED,
  c as FILE_UPLOAD_CARD_BASE,
  O as FILE_UPLOAD_CARD_ICON_SIZE,
  A as FILE_UPLOAD_CARD_SIZE,
  E as FILE_UPLOAD_CONTENT,
  L as FILE_UPLOAD_FILENAME,
  I as FILE_UPLOAD_META,
  h as FILE_UPLOAD_META_DIVIDER,
  b as FILE_UPLOAD_PROGRESS_FILL,
  f as FILE_UPLOAD_PROGRESS_TRACK,
  D as FILE_UPLOAD_STATUS_LABEL,
  u as FILE_UPLOAD_STATUS_TEXT,
  g as FILE_UPLOAD_THUMBNAIL
};
