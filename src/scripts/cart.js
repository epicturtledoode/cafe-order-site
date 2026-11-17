const buttons = document.querySelectorAll("[data-add-to-cart]");

const cart = JSON.parse(localStorage.getItem("cart")) || {};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.id;
        if (cart[name]) {
            cart[name]++;
        } else {
            cart[name] = 1;
        }

        localStorage.setItem("cart", JSON.stringify(cart))

        button.textContent = `Add (${cart[name]})`

        console.log(cart)

    });
});