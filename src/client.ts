import { Burguer } from './burger';
import { PRODUCT_TYPE } from './enum/product.type';
import { ProductManager } from './product-manager';
import { Product } from './product';

const productManager = new ProductManager();
const product = new Product();

const burger = productManager.createProduct(PRODUCT_TYPE.BURGER);
const pizza = productManager.createProduct(PRODUCT_TYPE.PIZZA);

console.log(burger.operation());
console.log(pizza.operation());
