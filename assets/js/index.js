const buyButtons = document.querySelectorAll('.btn-cart');

buyButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        let product = event.target.parentNode.cloneNode(true);
        let shoppingCart = document.querySelector('#products-list');
        let totalElement = document.querySelector('#total');
        let total = 0;

        shoppingCart.appendChild(product);

        shoppingCart.childNodes.forEach(element => {
            if (element.childNodes[3]) {
                total += parseFloat(element.childNodes[3].childNodes[5].textContent.replace('$', ''));
            }
            console.log(total);
        });

        totalElement.textContent = parseInt(total);
    });
});


