class Shopping {

    handleClear () {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const ProductsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = '';

        CATALOG.forEach(({ id, name, price}) => {
            if ( ProductsStore.indexOf(id) !== -1 ) {
                htmlCatalog += `

                    <tr>
                        <td class="shopping-element__name">🧠 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₴</td>
                    </tr>
                
                `;
                sumCatalog += price;
            }

            console.log(sumCatalog)
        });

        const html = `
        
        
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}

                    <tr>
                        <td class="shopping-element__name">🍌 Сумма: </td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₴</td>
                    </tr>

                </table>
            </div>
        
        `;
        ROOT_SHOPPING.innerHTML = html;
    }

}

const shoppingPage = new Shopping();