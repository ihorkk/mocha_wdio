const Login = require("../pages/login.page");
const Generate = require("../helper/chance");
const SignUpPage = require("../pages/signup.page");
const HomePage = require("../pages/home.page");

describe("Login", () => {
    before("should create an account", async () => {
        SignUpPage.open();
        await SignUpPage.signup({
            username: Generate.generateUsername,
            email: Generate.generateEmail,
            password: Generate.generatePassword,
        });
        await HomePage.logoutBtn.click();
    });

    it("should login with valid credentials", async () => {
        await Login.login({
            email: Generate.generateEmail,
            password: Generate.generatePassword,
        });
        await expect(browser).toHaveUrl("https://front.serverest.dev/home");
        await HomePage.logoutBtn.click();
    });

    it("should not login with invalid credentials", async () => {
        await Login.login({
            email: Generate.generateNewEmail,
            password: Generate.generateNewPassword,
        });
        await expect(Login.errorAlerts).toBeElementsArrayOfSize(1);
    });

    it("should not login with empty inputs", async () => {
        await Login.login({ email: "", password: "" });
        await expect(Login.errorAlerts).toBeElementsArrayOfSize(2);
    });
});
