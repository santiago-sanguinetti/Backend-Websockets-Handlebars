const socket = io();
const productsTable = document.getElementById("productsTable");
const srvResponse = document.getElementById("srvResponse");

socket.on("realTimeProducts", (data) => {
    const productsContainer = document.getElementById("srvResponse");
    productsContainer.innerHTML = "";

    const table = document.createElement("table");
    table.className = "table table-striped table-hover";
    table.innerHTML = `
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody id="products">
        ${data
            .map(
                (prod) => `
            <tr>
              <td>${prod.id}</td>
              <td>${prod.title}</td>
              <td><img src="${prod.thumbnails}" alt="" width="100px" /></td>
              <td>${prod.description}</td>
              <td>$ ${prod.price}</td>
            </tr>
          `
            )
            .join("")}
      </tbody>
    `;

    productsContainer.appendChild(table);
});

const addProduct = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const code = document.getElementById("code").value;
    const thumbnails = document.getElementById("thumbnails").value;
    const stock = document.getElementById("stock").value;
    const category = document.getElementById("category").value;

    const product = {
        title: title,
        description: description,
        price: price,
        code: code,
        thumbnails: [thumbnails],
        stock: stock,
        category: category,
    };

    socket.emit("newProduct", product);
};

const btnAddProduct = document.getElementById("btnAddProduct");
btnAddProduct.addEventListener("click", addProduct);

function deleteProduct() {
    const idProduct = +document.getElementById("inputDeleteId").value;
    socket.emit("deleteProduct", idProduct);
}
