module.exports = function () {
    //Cenário conta existente

    this.Given(/^que um usuário que tem cadastro$/, function () {
        helpers.loadPage('http://localhost:3000/register')
    });

    this.When(/^fornece nome da conta existente "([^]*)"$/, function (name) {
        return driver.findElement(by.name('name')).sendKeys(name);
    });

    this.When(/^telefone da conta existente "([^]*)"$/, function (telefone) {
        return driver.findElement(by.name('fone')).sendKeys(telefone);
    });

    this.When(/^fornece tipo da conta existente "([^]*)"$/, function (tipo) {
        return driver.findElement(by.name('tipo')).sendKeys(tipo);
    });

    this.When(/^fornece email da conta existente "([^]*)"$/, function (email) {
        return driver.findElement(by.name('email')).sendKeys(email);
    });

    this.When(/^fornece senha da conta existente "([^]*)"$/, function (senha) {
        return driver.findElement(by.name('password')).sendKeys(senha);
    });

    this.Then(/^é exibida mensagem da conta existente "([^]*)"$/, async function (mensagemEsperada) {
        await driver.findElement(by.id('signup')).click();
        const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

        return expect(mensagemProduzida).to.equal(mensagemEsperada);
    });
    //Fim do Cenário conta existente
}