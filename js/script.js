let productNameInpt = document.getElementById("producName");
let productPriceInpt = document.getElementById("producPrice");
let productCategoryInpt = document.getElementById("producCategory");
let productDescInpt = document.getElementById("productDesc");
let tableBody = document.getElementById("tableBody");

let productsContainer = [];
function addProduct() {
  let product = {
    name: productNameInpt.value,
    price: productPriceInpt.value,
    category: productCategoryInpt.value,
    decs: productDescInpt.value,
  };
  productsContainer.push(product);
  console.log(productsContainer);
  displayProudcts(productsContainer);
}

function displayProudcts() {
  let cartona = "";
  for (let i = 0; i < productsContainer.lenght; i++) {
    cartona += `
                  <tr>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].decs}</td>
            <td><div class="btn btn-warning">update</div></td>
            <td><div class="btn btn-danger">delete</div></td>
          </tr`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}
