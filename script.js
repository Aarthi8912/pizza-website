window.onload = function () {
    const pizza = document.querySelector(".pizza");
    const ingredientPizza = document.querySelector(".ingredient-pizza");

    function adjustIngredientSize() {
        if (pizza && ingredientPizza) {
            const pizzaWidth = pizza.offsetWidth;

            // Adjust ingredient-pizza size based on pizza size
            ingredientPizza.style.width = `${pizzaWidth * 0.85}px`;
        }
    }

    // Adjust size on page load and window resize
    adjustIngredientSize();
    window.addEventListener("resize", adjustIngredientSize);
};
document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.querySelector(".order-now");
    
    orderButton.addEventListener("click", function() {
        alert("Thank you for ordering! Your delicious pizza will be ready soon.");
    });
});
