const buttons = document.querySelectorAll("[data-add-to-cart]");

const cart = JSON.parse(localStorage.getItem("cart") || "{}");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.id;
        const price = Number(button.dataset.price);
        const icon = button.dataset.icon;
        
        if (cart[name]) {
            cart[name].quantity++;
        } else {
            cart[name] = {quantity:1, price:price, icon:icon};
        };

        localStorage.setItem("cart", JSON.stringify(cart))

        button.textContent = `Add (${cart[name].quantity})`

        console.log(cart)

    });
});