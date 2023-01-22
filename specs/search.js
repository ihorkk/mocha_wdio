const HomePage = require("../pages/home.page");
const SignUpPage = require("../pages/signup.page");
const Generate = require("../helper/chance");
const Data = require("../helper/data");

describe("Search bar", () => {
    before("should create an account", async () => {
        SignUpPage.open();
        await SignUpPage.signup({
            username: Generate.generateUsername,
            email: Generate.generateEmail,
            password: Generate.generatePassword,
        });
        await expect(browser).toHaveUrl("https://front.serverest.dev/home");
    });

    it("should enter value in the search bar and receive a result", async () => {
        await HomePage.search({ value: Data.searchValue });
        await expect(HomePage.searchResults).toHaveChildren({ gte: 1 });
    });
});
