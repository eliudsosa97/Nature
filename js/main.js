

// Cargar el archivo JSON con los productos
fetch('./js/products.json')
  .then(response => response.json())
  .then(products => showProducts(products))
  .catch(error => console.error('Error al cargar los productos:', error));

// Función para mostrar los productos en la página
function showProducts(products) {
  const productsSuplementos = document.getElementById('products__suplementos');
  const productsCosmetica = document.getElementById('products__cosmetica');
  const productsAlimentacion = document.getElementById('products__alimentacion');
  const productsDestacados = document.getElementById('destacados__container');

  // Filtrar por categoría 
  
  //"suplementos"
  
  const suplementosHTML = products.filter(product => product.category.id === 'suplementos')
    .map(product => `
      <a href="#" class="card__grid">
        <img src=${product.image} alt=${product.title}>
        <h4>${product.title}</h4>
        <h5>$ ${product.precio}</h5>
      </a>
    `).join('');

// Cosmetica

const cosmeticaHTML = products.filter(product => product.category.id === 'cosmetica')
    .map(product => `
      <a href="#" class="card__grid">
        <img src=${product.image} alt=${product.title}>
        <h4>${product.title}</h4>
        <h5>$ ${product.precio}</h5>
      </a>
    `).join('');

// Alimentación

const alimentacionHTML = products.filter(product => product.category.id === 'alimentacion')
    .map(product => `
      <a href="" class="card__grid">
        <img src=${product.image} alt=${product.title}>
        <h4>${product.title}</h4>
        <h5>$ ${product.precio}</h5>
      </a>
    `).join('');

const destacadosHTML = products.filter(product => product.featured === true)
    .map(product => `
    <div class="card">
        <button class="icon__heart">
            <img src="./assets/heart-icon.svg" alt="heart-icon">
        </button>
        <img src=${product.image} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <button href="#" class="btn btn-success d-flex justify-content-center btn__agregar">Ver más</button>
        </div>
    </div>
    `).join('');


  productsSuplementos.innerHTML = suplementosHTML;
  productsCosmetica.innerHTML = cosmeticaHTML;
  productsAlimentacion.innerHTML = alimentacionHTML;
  productsDestacados.innerHTML = destacadosHTML;

}

// Obtén todos los botones con la clase "btn__agregar"
const buttons = document.querySelectorAll('.btn__agregar');

// Array para almacenar los productos seleccionados en la lista de deseos
const listaDeseos = [];

// Agrega el evento click a cada botón
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productoSeleccionado = products[index]; // Suponiendo que tienes un array "products" con los datos de los productos

    // Verifica si el producto ya está en la lista de deseos para evitar duplicados
    if (!listaDeseos.includes(productoSeleccionado)) {
      listaDeseos.push(productoSeleccionado); // Agrega el producto al array de lista de deseos
      actualizarListaDeseos(); // Actualiza la lista de deseos en el DOM
    }
  });
});

// Función para actualizar la lista de deseos en el DOM
function actualizarListaDeseos() {
  const listaElement = document.getElementById('lista');
  listaElement.innerHTML = ''; // Limpia la lista para evitar duplicados

  listaDeseos.forEach(producto => {
    const listItem = document.createElement('li');
    listItem.textContent = producto.title; // Muestra el nombre del producto, puedes mostrar otros detalles aquí
    listaElement.appendChild(listItem);
  });
}




