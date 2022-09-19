export const priceToNumber = (price) => {
  return parseFloat(price.replace('$', ''));
}
