module.exports = function () {
    //Inicio dos Cenários de  Dados Ausentes
  
  // Nome ausente
  this.Given(/^que um usuário não preenche o nome para criação de conta$/, function () {
    helpers.loadPage('http://localhost:3000/register')
  });

  this.When(/^campo obrigatório nome não é preenchido$/, function () {
    return driver.findElement(by.name('name')).sendKeys("");
  });

  this.Then(/^é exibida mensagem de nome "([^]*)"$/, async function (mensagemEsperada) {
    await driver.findElement(by.id('signup')).click();
    const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

    return expect(mensagemProduzida).to.equal(mensagemEsperada);
  });

  // Telefone ausente
  this.Given(/^que um usuário não preenche o telefone para criação de conta$/, function () {
    helpers.loadPage('http://localhost:3000/register');
    driver.findElement(by.name('name')).sendKeys("Nome");
  });

  this.When(/^campo obrigatório telefone não é preenchido$/, function () {
    return driver.findElement(by.name('fone')).sendKeys("");
  });

  this.Then(/^é exibida mensagem de telefone "([^]*)"$/, async function (mensagemEsperada) {
    await driver.findElement(by.id('signup')).click();
    const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

    return expect(mensagemProduzida).to.equal(mensagemEsperada);
  });

  // Email ausente
  this.Given(/^que um usuário não preenche o email para criação de conta$/, function () {
    helpers.loadPage('http://localhost:3000/register');
    driver.findElement(by.name('name')).sendKeys("Nome");
    driver.findElement(by.name('fone')).sendKeys("62-9999-9999");
    driver.findElement(by.name('tipo')).sendKeys("Engenheiro de Software");
  });

  this.When(/^campo obrigatório email não é preenchido$/, async function () {
    return await driver.findElement(by.name('email')).sendKeys("");
  });

  this.Then(/^é exibida mensagem de email "([^]*)"$/, async function (mensagemEsperada) {
    await driver.findElement(by.id('signup')).click();
    const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

    return expect(mensagemProduzida).to.equal(mensagemEsperada);
  });

  // Senha ausente
  this.Given(/^que um usuário não preenche a senha para criação de conta$/, function () {
    helpers.loadPage('http://localhost:3000/register')
    driver.findElement(by.name('name')).sendKeys("Nome");
    driver.findElement(by.name('fone')).sendKeys("62-99999-9999");
    driver.findElement(by.name('tipo')).sendKeys("Engenheiro de Software");
    driver.findElement(by.name('email')).sendKeys("rodrigo@teste.com.br");
  });

  this.When(/^campo obrigatório senha não é preenchido$/, function () {
    return driver.findElement(by.name('password')).sendKeys("");
  });

  this.Then(/^é exibida mensagem de senha "([^]*)"$/, async function (mensagemEsperada) {
    await driver.findElement(by.id('signup')).click();
    const mensagemProduzida = await driver.findElement(by.id('mensagem')).getAttribute('value');

    return expect(mensagemProduzida).to.equal(mensagemEsperada);
  });
}