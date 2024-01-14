export function formatPrice(price: number): string {
  const formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(price);
}

