document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("home");
    const productSection = document.getElementById("products");
    const productGrid = document.getElementById("product-grid");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-btn");
    const exploreButton = document.getElementById("explore-products");

    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const modalPrice = document.getElementById("modal-price");

    // Sample Products
    const products = [
        { name: "Smartphone X", image: "/Images/smartphone.jpg", description: "High-speed 5G smartphone with AI camera.", price: "$799" },
        { name: "Gaming Laptop", image: "/Images/gaming-laptop.jpg", description: "Powerful laptop with RTX 4060 and 16GB RAM.", price: "$1299" },
        { name: "Wireless Earbuds", image: "/Images/earbuds.jpg", description: "Noise-canceling Bluetooth earbuds with deep bass.", price: "$199" },
        { name: "Smartwatch Pro", image: "/Images/smartwatch.jpg", description: "Fitness tracking smartwatch with heart rate monitor.", price: "$249" },
        { name: "4K Smart TV", image: "/Images/smart-tv.jpg", description: "Ultra HD 55-inch smart TV with HDR10 support.", price: "$899" },
        { name: "Bluetooth Speaker", image: "/Images/speaker.jpg", description: "Portable wireless speaker with 360° surround sound.", price: "$99" },
        { name: "Gaming Console", image: "/Images/console.jpg", description: "Next-gen gaming console with 4K graphics.", price: "$499" },
        { name: "Mechanical Keyboard", image: "/Images/keyboard.jpg", description: "RGB backlit keyboard with tactile switches.", price: "$149" },
        { name: "Drone 4K", image: "/Images/drone.jpg", description: "Compact drone with 4K camera and GPS.", price: "$699" },
        { name: "VR Headset", image: "/Images/vr-headset.jpg", description: "Immersive virtual reality headset with motion tracking.", price: "$399" }
    ];

    // Render products dynamically
    function renderProducts() {
        productGrid.innerHTML = "";
        products.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;

            // Click event to open modal
            productCard.addEventListener("click", () => openModal(index));

            productGrid.appendChild(productCard);
        });
    }

    // Open modal function
    function openModal(index) {
        const product = products[index];
        modalTitle.textContent = product.name;
        modalImage.src = product.image;
        modalDescription.textContent = product.description;
        modalPrice.textContent = product.price;

        modal.classList.add("active"); // Show modal
    }

    // Close modal on button click
    closeModal.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event bubbling
        modal.classList.remove("active"); // Hide modal
    });

    // Close modal when clicking outside the modal-content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Ensure modal is hidden on page load
    modal.classList.remove("active");

    // Handle navigation clicks
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetId === "home") {
            // Ensure home section is displayed
            document.getElementById("home").style.display = "block";
            document.getElementById("products").style.display = "none";
            document.getElementById("contact").style.display = "none";

            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else if (targetSection) {
            document.getElementById("home").style.display = "block"; // Ensure home section is still visible
            document.getElementById("products").style.display = "block";
            document.getElementById("contact").style.display = "block";

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector("nav").offsetHeight,
                behavior: "smooth"
            });
        }
    });
});

// Fix "Explore Products" Button Scroll Issue
document.getElementById("explore-products").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("products").style.display = "block"; // Ensure Products is visible

    const productSection = document.getElementById("products");
    if (productSection) {
        window.scrollTo({
            top: productSection.offsetTop - document.querySelector("nav").offsetHeight,
            behavior: "smooth"
        });
    }
});

    
    
    // When "Explore Products" button is clicked, show products and hide home
    exploreButton.addEventListener("click", function () {
        homeSection.style.display = "none";
        productSection.style.display = "block";
        contactSection.style.display = "none"; // Ensure contact is also hidden
    });

    // Initialize product display
    renderProducts();
});
