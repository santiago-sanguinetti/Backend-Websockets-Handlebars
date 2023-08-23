# Backend - Websockets + Handlebars
Este proyecto es parte del curso de Desarrollo Backend de CoderHouse. El objetivo de este proyecto es crear una aplicación web que permita administrar productos y carritos de compra utilizando tecnologías como Node.js, Express, Handlebars y Socket.io.

## Funcionalidades

- Gestión de productos: Agregar, listar, actualizar y eliminar productos.
- Gestión de carritos: Agregar y listar carritos de compra.
- Vista en tiempo real de productos utilizando Socket.io.
- Integración de Handlebars para las vistas.

## Cómo utilizar esta aplicación
### Requisitos
- Node.js: [Enlace de descarga](https://nodejs.org/)
- npm (Node Package Manager)
- Postman (para probar las API)

### Instalación
1. Descarga o clona este repositorio a tu máquina local:
   ```bash
   git clone https://github.com/santiago-sanguinetti/Backend-Websockets-Handlebars.git
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
2. Abre tu navegador y visita: `http://localhost:8080`

## API Endpoints

- `/api/products`: Endpoints relacionados con la gestión de productos.
- `/api/carts`: Endpoints relacionados con la gestión de carritos.

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

## Vistas

- `/`: Vista de inicio con la lista de productos.
- `/realtimeproducts`: Vista en tiempo real de productos utilizando Socket.io.