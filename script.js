
const products = [
    {
        id: 1,
        name: "Roy Cooper Letting Crimanals Free",
        price: 25.99,
        images: ["images/product1.png", "images/product1-2.png"],
        description: "Red Shirt with design"
    },
    {
        id: 2,
        name: "Red and white hat",
        price: 15.99,
        images: ["images/product2.png"],
        description: "Michael Whatley v Radical Roy hat"
    },
    {
        id: 3,
        name: "Baby T-Shirt",
        price: 19.99,
        images: ["images/product3.png", "images/product3-2.png"],
        description: "Warm and cozy hoodie with a modern design."
    },
    {
        id: 4,
        name: "sticker",
        price: 4.99,
        images: ["images/product4.png"],
        description: "Whatley for Senate sticker"
    },
    {
        id: 5,
        name: hoodie",
        price: 4.99,
        images: ["images/product5.png","images/product5-2.png"],
        description: "Whatley for Senate MAGA hoodie"
    }
    
];


const grid = document.getElementById("product-grid");

if (grid) {
    products.forEach(p => {
        const card = document.createElement("a");
        card.href = `product.html?id=${p.id}`;
        card.className = "product-link";

        
        card.innerHTML = `
            <div class="product-card">
                <img src="${p.images[0]}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>$${p.price}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}


const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (productId) {
    const product = products.find(p => p.id == productId);

    if (product) {
        // Set basic product info
        document.getElementById("product-title").innerText = product.name;
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-price").innerText = "$" + product.price;
        document.getElementById("product-description").innerText = product.description;

        // Slideshow setup
        const slideshowImage = document.getElementById("slideshow-image");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");

        let currentIndex = 0;

        function showImage(index) {
            slideshowImage.src = product.images[index];
        }

        prevButton.addEventListener("click", () => {
            currentIndex--;
            if (currentIndex < 0) currentIndex = product.images.length - 1;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            currentIndex++;
            if (currentIndex >= product.images.length) currentIndex = 0;
            showImage(currentIndex);
        });

        // Initialize slideshow with the first image
        showImage(currentIndex);
    }

}


