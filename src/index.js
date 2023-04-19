// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  // crear las 2 variables
  //! puedo hacer busquedas sobre un elemento especifico, en este caso sobre el argumento que recibo
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

  //retornar subtotal en la ejecucion de la funcion
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

  console.log(totalPrice);

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
  // tenemos que buscar el nodo completo del padre button < td < tr --> 2 parentNode arriba
  event.target.parentNode.parentNode.remove();
  
  // para actualizar el codigo volvemos a llamar a la funcion
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Test")

  // buscar los valores que vamos a utilizar
  //! css selector by type x [ type = y ]
  const nameInput = document.querySelector(".create-product input[type = text]")
  const priceInput = document.querySelector(".create-product input[type = number]")
  console.log(nameInput.value, priceInput.value)

  // crear el elemento html en el tbody
  //! podemos ir creando cada elemento de uno en uno, o todos a la vez con el innerHtml
  // buscamos donde crearlo
  const table = document.querySelector("tbody")

  // creamos el html y interpolamos los valores de los campos nameInput y priceInput
  const elementoAgregar = `        
  <tr class="product">
    <td class="name">
      <span>${nameInput.value}</span>
    </td>
    <td class="price">$<span>${priceInput.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
</tr> `

  // agregamos al html el nuevo codigo
  table.innerHTML+= elementoAgregar;

  //! tenemos que volver a llamar a la funcionalidad de los botones de remover para que se aplique cada vez que se crea uno nuevo
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
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
