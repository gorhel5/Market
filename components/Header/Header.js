class Header {

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter">
                    🛒 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }


}

const headerPage = new Header();

const ProductsStore =  localStorageUtil.getProducts();
headerPage.render(ProductsStore.length);