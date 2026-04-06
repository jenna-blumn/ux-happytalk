const t = (e) => {
  if (typeof e == "number") return `${e}px`;
  const r = parseFloat(e);
  return !isNaN(r) && String(r) === e.trim() ? `${r}px` : e;
};
export {
  t as getPixelValue
};
