"use client";
const r = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], l = (e) => `${e.getFullYear()}.${String(e.getMonth() + 1).padStart(2, "0")}`, i = (e, a, t) => {
  if (t.disabledFuture) {
    const n = /* @__PURE__ */ new Date();
    if (e > n.getFullYear() || e === n.getFullYear() && a > n.getMonth())
      return !0;
  }
  return !!(t.minDate && (e < t.minDate.getFullYear() || e === t.minDate.getFullYear() && a < t.minDate.getMonth()) || t.maxDate && (e > t.maxDate.getFullYear() || e === t.maxDate.getFullYear() && a > t.maxDate.getMonth()));
};
export {
  u as MONTHS_EN,
  r as MONTHS_KO,
  l as formatYearMonth,
  i as isMonthDisabled
};
