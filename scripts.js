document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const product = {
            name: this.dataset.name,
            price: this.dataset.price,
            image: this.dataset.image
        };
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    });
});
