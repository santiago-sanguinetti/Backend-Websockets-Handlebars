# Backend - Primera entrega - Proyecto final
Esta es una aplicación que te permite gestionar productos y carritos de compras. Puedes agregar productos, crear carritos, agregar productos a los carritos y más.

## Cómo utilizar esta aplicación
### Requisitos
- Node.js (v14 o superior)
- npm (Node Package Manager)

### Instalación
1. Descarga o clona este repositorio a tu máquina local:
   ```bash
   git clone https://github.com/santiago-sanguinetti/Backend-ProyectoFinal.git
   ```
2. Abre una terminal en la ubicación del repositorio clonado.
   
3. Instala las dependencias utilizando npm:
   ```bash
   npm install
   ```

### Uso
1. Inicia el servidor:
   ```bash
   npm start
   ```
2. Abre Postman u otra herramienta similar para probar las rutas de la aplicación.

### Rutas Disponibles

#### Productos

- `GET /api/products`: Obtiene una lista de todos los productos. Puede incluir el parámetro `limit` para limitar el número de productos devueltos.

- `GET /api/products/:id`: Obtiene un producto por su ID.

- `POST /api/products`: Agrega un nuevo producto. Requiere un cuerpo JSON con los detalles del producto.

- `PUT /api/products/:id`: Actualiza un producto existente. Requiere un cuerpo JSON con los campos a modificar.

- `DELETE /api/products/:id`: Elimina un producto por su ID.

#### Carritos

- `GET /api/carts`: Obtiene una lista de todos los carritos. Puede incluir el parámetro `limit` para limitar el número de carritos devueltos.

- `GET /api/carts/:id`: Obtiene un carrito por su ID.

- `POST /api/carts`: Crea un nuevo carrito vacío.

- `POST /api/carts/:cid/product/:pid`: Agrega un producto al carrito especificado. Requiere un cuerpo JSON con el ID del producto y la cantidad.

#### Nota

- `:id`, `:cid` y `:pid` en las rutas son parámetros que deben ser reemplazados con los IDs reales correspondientes.