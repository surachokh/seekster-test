export function currencyFormat(num) {
  return "฿ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
}

export function dateFormat(date) {
  if (typeof date === "string") {
    let options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("th", options);
  }
}

export function timeFormat(date) {
  if (typeof date === "string") {
    let options = { timeStyle: "short" };
    return new Date(date).toLocaleTimeString("th", options);
  }
}
