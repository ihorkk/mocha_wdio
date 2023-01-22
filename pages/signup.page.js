class SignUpPage {
    get usernameInput() {
        return $("#nome");
    }

    get emailInput() {
        return $("#email");
    }

    get passwordInput() {
        return $("#password");
    }

    get submitBtn() {
        return $('button[type="submit"]');
    }

    get successfullAlert() {
        return $('[class="alert alert-dismissible alert-primary"]');
    }

    get errorAlerts() {
        return $$('[class*="btn-close-error-alert"]');
    }

    async signup({ username, email, password }) {
        await this.usernameInput.setValue(username);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }

    open() {
        browser.url("cadastrarusuarios");
        browser.maximizeWindow();
    }
}

module.exports = new SignUpPage();
