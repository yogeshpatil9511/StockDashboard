// Initialize wishlist data
const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
const wishlistItems = document.getElementById('wishlist-items');
const wishlistSelect = document.getElementById('wishlist-select');
const addToWishlistBtn = document.getElementById('add-to-wishlist');

// Function to render wishlist
function renderWishlist() {
    wishlistItems.innerHTML = '';
    wishlist.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => removeWishlistItem(item));
        wishlistItems.appendChild(li);
    });
}

// Function to add item to wishlist
function addToWishlist() {
    const selectedItem = wishlistSelect.value;
    if (selectedItem && !wishlist.includes(selectedItem)) {
        wishlist.push(selectedItem);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        renderWishlist();
    }
}

// Function to remove item from wishlist
function removeWishlistItem(item) {
    const index = wishlist.indexOf(item);
    if (index > -1) {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        renderWishlist();
    }
}

// Add event listener to the button
addToWishlistBtn.addEventListener('click', addToWishlist);

// Render the wishlist initially
renderWishlist();

// Chart.js - Market Overview Chart
const ctx = document.getElementById('overviewChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
        datasets: [
            {
                label: 'Bitcoin (BTC/USD)',
                data: [25000, 27000, 29000, 31000, 30000, 32000], // Sample Bitcoin prices
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.2)',
                fill: true,
            },
            {
                label: 'Gold (XAU/USD)',
                data: [1900, 1950, 1925, 1980, 2000, 2025], // Sample Gold prices
                borderColor: '#ffd700',
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                fill: true,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price (USD)'
                }
            }
        }
    }
});