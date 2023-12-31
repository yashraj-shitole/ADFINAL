

function showProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; 

  fetch('/api/products')
      .then(response => response.json())
      .then(products => {
          
products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product-card'; 

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.className = 'product-image'; 

  const productName = document.createElement('h3');
  productName.textContent = product.name;
  productName.className = 'product-name'; 

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.className = 'product-description';


  const productLink = document.createElement('a');
  productLink.href = product.link;
  productLink.target = '_blank';
  productLink.textContent = 'Product Link';
  productLink.className = 'product-link'; 


  
  // Append all elements to the product card container
  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(productLink);
  

  productList.appendChild(productDiv);
});
      })
      .catch(error => console.error('Error fetching products:', error));
}

// 
showProducts();
