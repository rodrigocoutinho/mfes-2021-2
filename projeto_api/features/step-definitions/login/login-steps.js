module.exports = function () {

    //Login válido
    this.Given(/^que o Engenheiro de Software possui uma conta válida$/, function () {
        helpers.loadPage('http://localhost:3000/')
    });

    this.When(/^usuário fornece email válido "([^"]*)"$/, function (email) {
        return driver.findElement(by.id('email')).sendKeys(email);
    });
    
    this.When(/^forneça senha válida "([^"]*)"$/, function (senha) {
        return driver.findElement(by.id('password')).sendKeys(senha);
    });

    this.Then(/^exibir a mensagem de sucesso "([^"]*)"$/, async function (mensagemEsperada) {
        await driver.findElement(by.id('btn_entrar')).click();
        const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');
        return await expect(mensagemProduzida).to.equal(mensagemEsperada);
    });

    //Login inválido
    this.Given(/^que o Engenheiro de Software possui uma conta inválido$/, function () {
        helpers.loadPage('http://localhost:3000/')
    });

    this.When(/^usuário fornece email inválido "([^"]*)"$/, function (email) {
        return driver.findElement(by.id('email')).sendKeys(email);
    });
    
    this.When(/^forneça senha inválida "([^"]*)"$/, function (senha) {
        return driver.findElement(by.id('password')).sendKeys(senha);
    });

    this.Then(/^exibir mensagem de falha "([^"]*)"$/, async function (mensagemEsperada) {
        await driver.findElement(by.id('btn_entrar')).click();
        const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

        return expect(mensagemProduzida).to.equal(mensagemEsperada);
    });


}

