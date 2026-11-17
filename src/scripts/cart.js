const buttons = document.querySelectorAll("[data-add-to-cart]");

const cart = {};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.id;
        if (cart[name]) {
            cart[name]++;
        } else {
            cart[name] = 1;
        }

        button.textContent = `Add (${cart[name]})`

        console.log(cart)

    });
});