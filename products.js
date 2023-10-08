document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data from your file
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            // Access the array of objects in your JSON
            data.forEach(item => {
                // Create a card element
                const card = document.createElement('div');
                card.classList.add('card');

                // Populate card with data
                card.innerHTML = `
                <div class="relative h-96 w-96 rounded-md">
  <img src="${item.image}" alt="${item.name}" class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">${item.name}</h1>
    <p class="mt-2 text-sm text-gray-300">
    ${item.description}
    </p>
    <a href="${item.link}" target="_blank"> <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    Shop now →
  </button></a>
   
  </div>
</div>

            
                `;

                // Append the card to the container
                const cardsContainer = document.getElementById('cards-container');
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error(error));
});
