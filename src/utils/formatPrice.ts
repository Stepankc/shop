export function formatPrice(price: number): string {
  const formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  });
  return formatter.format(price);
}
