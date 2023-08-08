import express from "express";
import ProductManager from "./components/ProductManager.js";
import createProductsFile from "./utils/createProductsFile.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

const productManager_app = new ProductManager("./components/products.json");
createProductsFile(productManager_app);

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Tarea 3 Backend - Santiago Sanguinetti");
});

app.get("/products", async (req, res) => {
    const limit = +req.query.limit;
    try {
        const products = await productManager_app.getProducts();
        if (!isNaN(limit)) {
            const limitedProducts = products.slice(0, limit);
            return res.send(limitedProducts);
        } else {
            return res.send(products);
        }
    } catch {
        res.status(500).send("Error al obtener los productos");
    }
});

app.get("/products/:pid", async (req, res) => {
    const productId = +req.params.pid;

    if (isNaN(productId)) {
        return res
            .status(400)
            .send("El ID del producto debe ser un número válido.");
    }

    try {
        const product = await productManager_app.getProductById(productId);
        if (product === "Not found") {
            return res.status(404).send("Producto no encontrado.");
        }

        return res.send(product);
    } catch {
        res.status(500).send("Error al obtener el producto.");
    }
});
