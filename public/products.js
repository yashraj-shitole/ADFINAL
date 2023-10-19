// document.addEventListener("DOMContentLoaded", function () {
//     fetch('/products.json')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(item => {
//                 const card = document.createElement('div');
//                 card.classList.add('card');

//                 card.innerHTML = `
//                 <div class="relative h-96 w-96 rounded-md">
//   <img src="${item.image}" alt="${item.name}" class="z-0 h-full w-full rounded-md object-cover"
//   />
//   <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//   <div class="absolute bottom-4 left-4 text-left">
//     <h1 class="text-lg font-semibold text-white">${item.name}</h1>
//     <p class="mt-2 text-sm text-gray-300">
//     ${item.description}
//     </p>
//     <a href="${item.link}" target="_blank"> <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//     Shop now →
//   </button></a>
   
//   </div>
// </div>

            
//                 `;

//                 const cardsContainer = document.getElementById('cards-container');
//                 cardsContainer.appendChild(card);
//             });
//         })
//         .catch(error => console.error(error));
// });





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
  productDescription.className = 'product-description'; // Apply the description style

  // Create and style the product link
  const productLink = document.createElement('a');
  productLink.href = product.link;
  productLink.target = '_blank';
  productLink.textContent = 'Product Link';
  productLink.className = 'product-link'; // Apply the link style

  // Create and style the delete button
  
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

// Define a function to add a new product


// Define a function to clear the add product form

// Define a function to show the add product form


// Define a function to delete a product


// Call the showProducts function when the page loads
showProducts();
