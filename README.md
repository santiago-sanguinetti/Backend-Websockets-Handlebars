# Backend - Tarea3 - Servidores web
Este proyecto es una aplicación Node.js con Express que gestiona productos utilizando un administrador de productos.

## Cómo utilizar esta aplicación
### Requisitos
- Node.js (v14 o superior)
- npm (Node Package Manager)

### Instalación
1. Descarga o clona este repositorio a tu máquina local:
   ```bash
   git clone https://github.com/santiago-sanguinetti/Backend-Tarea3.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd nombre-del-proyecto
   ```
4. Instala las dependencias utilizando npm:
   ```bash
   npm install
   ```
### Uso
1. Navega al directorio `src`:
   ```bash
   cd src
   ```
2. Inicia el servidor:
   ```bash
   node app.js
   ```
3. Abre tu navegador web y accede a http://localhost:8080 para ver el mensaje de bienvenida.
4. Para obtener la lista de productos, accede a http://localhost:8080/products.

   - Puedes agregar un parámetro de consulta ?limit= para limitar la cantidad de productos mostrados, por ejemplo: http://localhost:8080/products?limit=5.
5. Para obtener un producto específico por su ID, accede a http://localhost:8080/products/:pid, reemplazando :pid con el ID del producto deseado, por ejemplo: http://localhost:8080/products/1.
