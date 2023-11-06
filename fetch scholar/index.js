// Function to fetch products from the API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        displayProducts(products);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.title.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        });

        sortSelect.addEventListener('change', () => {
            const sortBy = sortSelect.value;
            const sortedProducts = [...products].sort((a, b) => 
                a[sortBy] > b[sortBy] ? 1 : -1
            );
            displayProducts(sortedProducts);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
            <div class="user-card">
            <img src="${product.image}">
            <h6>${product.id}</h6>
            <h6>₹${product.price}</h6>
            <p>${product.description} </p}
            <br>
            <h6> Rating : {rate : ${product.rating.rate}, count : ${product.rating.count}}</h6>
            </div>
            `
            
            
        
            productList.appendChild(listItem);
        });
    }
});


