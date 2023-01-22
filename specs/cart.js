const SignUpPage = require("../pages/signup.page");
const HomePage = require("../pages/home.page");
const ListPage = require("../pages/shopping.list.page");
const Generate = require("../helper/chance");

describe("Cart", () => {
    before("should create an account", async () => {
        SignUpPage.open();
        await SignUpPage.signup({
            username: Generate.generateUsername,
            email: Generate.generateEmail,
            password: Generate.generatePassword,
        });
        await expect(browser).toHaveUrl("https://front.serverest.dev/home");
    });

    it("should add an item to the cart", async () => {
        await HomePage.addToListBtn.click();
        await expect(browser).toHaveUrlContaining("minhaListaDeProdutos");
        await ListPage.addToCartBtn.click();
        await expect(browser).toHaveUrlContaining("carrinho");
    });
});
