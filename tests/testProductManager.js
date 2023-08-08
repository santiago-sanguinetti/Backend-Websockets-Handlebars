// ---------------------- Testing ----------------------
import ProductManager from "../src/components/ProductManager.js";

const productManagerTest1 = new ProductManager("testProducts.json");
console.log(productManagerTest1.getProducts());

productManagerTest1.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);

console.log(productManagerTest1.getProducts());

console.log(productManagerTest1.getProductById(0));
console.log(productManagerTest1.getProductById(1));

productManagerTest1.updateProduct(1, { stock: 20 });
console.log(productManagerTest1.getProductById(1));

productManagerTest1.deleteProduct(1);
console.log(productManagerTest1.getProductById(1));
