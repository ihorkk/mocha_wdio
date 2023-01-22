class HomePage {
    get searchInput() {
        return $("input[data-testid='pesquisar']");
    }

    get searchBtn() {
        return $('button[data-testid="botaoPesquisar"]');
    }

    get searchResults() {
        return $('[class="row espacamento"]');
    }

    get addToListBtn() {
        return $('//button[text()="Adicionar a lista"]');
    }

    get logoutBtn() {
        return $('//Button[text()="Logout"]');
    }

    async search({ value }) {
        await this.searchInput.setValue(value);
        await this.searchBtn.click();
    }

    open() {
        browser.url("home");
        browser.maximizeWindow();
    }
}

module.exports = new HomePage();
