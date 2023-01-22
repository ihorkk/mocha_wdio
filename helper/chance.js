const Chance = require("chance");
const chance = new Chance();

class Generator {
    generateUsername = chance.word({ length: 5 });
    generateEmail = chance.email({ domain: "kenbi.com" });
    generatePassword = chance.string({
        length: 12,
        alpha: true,
        numeric: true,
    });
    generateNewEmail = chance.email({ domain: "pt.com" });
    generateNewPassword = chance.string({
        length: 12,
        alpha: true,
        numeric: true,
    });
}

module.exports = new Generator();
