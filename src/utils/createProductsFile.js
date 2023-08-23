function createProductsFile(productManagerInstance) {
    for (let i = 0; i < 10; i++) {
        productManagerInstance.addProduct(
            "producto prueba",
            "Este es un producto prueba",
            `abc${i}`,
            200,
            25,
            "Sin categoria",
            "Sin imagen"
        );
    }
}
export default createProductsFile;
