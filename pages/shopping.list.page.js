class ShoppingListPage {
    get item() {
        return $('div[class="card-body"]');
    }

    get addToCartBtn() {
        return $('//button[text()="Adicionar no carrinho"]');
    }
}

module.exports = new ShoppingListPage();
