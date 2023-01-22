class MainPage {
    open() {
        browser.url("/");
        browser.maximizeWindow();
    }
}

module.exports = new MainPage();
