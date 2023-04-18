// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  // crear las 2 variables
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // acceder a los valores especificos
  console.log(price.innerText);
  console.log(quantity.value);

  // usar los valores para calcular el subtotal
  const subTotal = price.innerText * quantity.value;
  console.log(subTotal);

  // conseguir el elemento que guarda el subtotal
  const subTotalDOM = product.querySelector(".subtotal span");
  console.log(subTotalDOM, subTotalDOM.innerText);

  // escribir como numero el subtotal en el elemento span
  subTotalDOM.innerText = subTotal;
  console.log(subTotalDOM.innerText);

  //retornar subtotal como numero
  return subTotal;
}

function calculateAll() {
  //* IT 1
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // ITERATION 2
  //... your code goes here
  //* IT 3 - 1)
  let totalPrice = 0;
  // conseguir los nodos de DOM de cada producto
  const allProductsDOM = document.querySelectorAll(".product");
  console.log(allProductsDOM);

  // aplicar el updateSubtotal en cada nodo
  allProductsDOM.forEach((product) => {
    updateSubtotal(product);
    //* IT 3 - 2)
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  // creamos al principio de la funcion una variable para la suma //* IT 3 - 1)
  // sumarlos //* IT 3 - 2)
  console.log(totalPrice);

  // pasarlos al elemento "Total"
  // buscamos el elemento
  const totalDOM = document.querySelector("#total-value span");
  // le pasamos el valor
  totalDOM.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  // tenemos que buscar el nodo completo del padre button<td<tr --> 2 parentNode arriba
  event.target.parentNode.parentNode.remove();
  
  // para actualizar el codigo volvemos a llamar a la funcion
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Test")

  // crear las variables
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);


  //... your code goes here
  // varios botones con la misma funcionalidad
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.querySelector(".create-product .btn")
  createBtn.addEventListener("click", createProduct)
});
