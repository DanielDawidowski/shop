const productList = {
    products: [
        {
            title: "Mobile Phone",
            imageUrl: "https://i.ibb.co/v1DG4ph/a-amp-s.jpg",
            price: 199.99,
            description: "Good Samsung"
        },
        {
            title: "RRD 2",
            imageUrl: "https://i.ibb.co/G9V5Vyw/ps4-rdd2.jpg",
            price: 59.99,
            description: "Red Dead Redemption 2"
        },
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for ( const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();