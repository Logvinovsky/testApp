import products from "../mocks/products.json"
import {IProduct} from "../components/Product/product.types";

export const numericRegex = "\\d+";

export const getProducts = (): Promise<IProduct[]> => {
 return new Promise(resolve => {
     setTimeout(() => resolve(products), 500)
 })
}