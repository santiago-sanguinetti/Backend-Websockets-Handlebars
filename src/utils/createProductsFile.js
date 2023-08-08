function createProductsFile(productManagerInstance) {
    for (let i = 0; i < 10; i++) {
        productManagerInstance.addProduct(
            "producto prueba",
            "Este es un producto prueba",
            200,
            "Sin imagen",
            `abc${i}`,
            25
        );
    }
}

export default createProductsFile;
