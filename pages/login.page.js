class LoginPage {
    get emailInput() {
        return $("#email");
    }

    get passwordInput() {
        return $("#password");
    }

    get submitBtn() {
        return $('button[type="submit"]');
    }

    get errorAlerts() {
        return $$('[class*="btn-close-error-alert"]');
    }

    async login({ email, password }) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }

    open() {
        browser.url("login");
        browser.maximizeWindow();
    }
}

module.exports = new LoginPage();
