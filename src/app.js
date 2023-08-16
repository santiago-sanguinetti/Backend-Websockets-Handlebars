import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import express from "express";
import ProductManager from "./components/ProductManager.js";
import CartManager from "./components/CartManager.js";
import createProductsFile from "./utils/createProductsFile.js";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

const app = express();
export const productManager_app = new ProductManager(
    `${__dirname}/components/products.json`
);

export const cartManager_app = new CartManager(
    `${__dirname}/components/carts.json`
);

createProductsFile(productManager_app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

const port = 8080;

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Tarea 3 Backend - Santiago Sanguinetti");
});
