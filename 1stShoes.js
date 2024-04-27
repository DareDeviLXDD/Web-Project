function changeImage(newSrc) {
    var mainImage = document.getElementById("mainImage");
    if (mainImage) { // Check if the element exists
        mainImage.src = newSrc;
    } else {
        console.error("Main image not found");
    }
}
function updateSize(size) {
    var selectedSize = document.getElementById("selected-size"); // Correct ID
    if (selectedSize) { // Ensure the element is found
        selectedSize.textContent = size; // Update the content with the selected size
    } else {
        console.error("Selected size element not found"); // Error handling if the ID is incorrect
    }
}
function decrementQuantity() {
    const quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) { // Ensure quantity is at least 1
        currentValue--;
        quantityInput.value = currentValue;
        updateQuantityInUrl(currentValue); // Update URL with new quantity
    }
}
function incrementQuantity() {
    const quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);

    currentValue++;
    quantityInput.value = currentValue;
    updateQuantityInUrl(currentValue); // Update URL with new quantity
}
function updateQuantityInUrl(quantity) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("quantity", quantity); // Update query parameter
    window.history.replaceState({}, '', currentUrl.toString());
}
function addToCart() {
    const quantity = document.getElementById("quantity").value;
    console.log(`Adding ${quantity} items to the cart`); // Example cart logic
}


