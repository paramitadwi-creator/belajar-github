
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");
const emptyMessage = document.getElementById("emptyMessage");
const cartNotice = document.getElementById("cartNotice");

let activeCategory = "all";

function filterProducts() {
    const keyword = searchInput.value.toLowerCase();
    let visibleCount = 0;

    productCards.forEach(function(card) {
        const category = card.dataset.category;
        const name = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        const matchesCategory =
            activeCategory === "all" || category === activeCategory;

        const matchesSearch =
            name.includes(keyword) || description.includes(keyword);

        if (matchesCategory && matchesSearch) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    emptyMessage.hidden = visibleCount !== 0;
}

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        filterButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        activeCategory = button.dataset.category;

        filterProducts();
    });
});

searchInput.addEventListener("input", filterProducts);

document.querySelectorAll(".add-button").forEach(function(button) {
    button.addEventListener("click", function() {
        const productName = button.dataset.product;

        cartNotice.textContent =
            productName + " berhasil ditambahkan ke daftar pilihan!";

        cartNotice.classList.add("show");

        setTimeout(function() {
            cartNotice.classList.remove("show");
        }, 2500);
    });
});

console.log("Digital Atelier website berhasil dimuat!");
