console.log("jhola pta");

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
      <a href="#" class="card__grid">
        <img src=${product.image} alt=${product.title}>
        <h4>${product.title}</h4>
        <h5>$ ${product.precio}</h5>
      </a>
    `).join('');


  productsSuplementos.innerHTML = suplementosHTML;
  productsCosmetica.innerHTML = cosmeticaHTML;
  productsAlimentacion.innerHTML = alimentacionHTML;

}


