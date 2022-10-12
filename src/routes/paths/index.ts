import { productIdPattern } from "../replacePatterns";

export const PATH = Object.freeze({
  PRODUCT: {
    ONE: `products/${productIdPattern}`,
    LIST: "products",
  },
});
