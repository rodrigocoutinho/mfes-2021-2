module.exports = function () {

  //Cenário contas válidas
  this.Given(/^que um usuário ainda não tem cadastro$/, function () {
    helpers.loadPage('http://localhost:3000/register')
  });

  this.When(/^fornece nome "([^]*)"$/, function (name) {
    return driver.findElement(by.name('name')).sendKeys(name);
  });

  this.When(/^telefone "([^]*)"$/, function (telefone) {
    return driver.findElement(by.name('fone')).sendKeys(telefone);
  });

  this.When(/^fornece tipo "([^]*)"$/, function (tipo) {
    return driver.findElement(by.name('tipo')).sendKeys(tipo);
  });

  this.When(/^fornece email "([^]*)"$/, function (email) {
    return driver.findElement(by.name('email')).sendKeys(email);
  });

  this.When(/^fornece senha "([^]*)"$/, function (senha) {
    return driver.findElement(by.name('password')).sendKeys(senha);
  });

  this.Then(/^é exibida mensagem de usuario cadastrado "([^]*)"$/, async function (mensagemEsperada) {
    await driver.findElement(by.id('signup')).click();
    const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

    return expect(mensagemProduzida).to.equal(mensagemEsperada);
  });   //Fim do Cenário contas válidas
}