const SignUpPage = require("../pages/signup.page");
const Generate = require("../helper/chance");

describe("Signup", () => {
    beforeEach("Open the signup page", async () => {
        SignUpPage.open();
    });

    it("should sign up with valid credentials", async () => {
        await SignUpPage.signup({
            username: Generate.generateUsername,
            email: Generate.generateEmail,
            password: Generate.generatePassword,
        });
        await expect(SignUpPage.successfullAlert).toBeDisplayed();
        await expect(browser).toHaveUrl("https://front.serverest.dev/home");
    });

    it("should not sign up with empty inputs", async () => {
        await SignUpPage.signup({
            username: "",
            email: "",
            password: "",
        });
        await expect(SignUpPage.errorAlerts).toBeElementsArrayOfSize(3);
    });
});
