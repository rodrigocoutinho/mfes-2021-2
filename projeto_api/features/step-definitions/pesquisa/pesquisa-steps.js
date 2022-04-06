module.exports = function () {

    //Login válido
    this.Given(/^que o Engenheiro de Software tenha acesso a tela de login$/, function () {
        helpers.loadPage('http://localhost:3000/');

    });

    this.Given(/^que um usuário esteja logado$/, async function () {
        driver.findElement(by.id('email')).sendKeys("rodrigo@teste.com.br");
        driver.findElement(by.id('password')).sendKeys("123");
        return await driver.findElement(by.id('btn_entrar')).click();
    });
    
    this.When(/^Clica no botão de criação de pesquisa$/, async function () {
        helpers.loadPage('http://localhost:3000/pesquisas')
        //setTimeout(async function(){}, 5000)
        return await driver.findElement(by.id('novapesquisa')).click()
    });

    this.When(/^o nome da avaliação é preenchido "([^]*)"$/, async function (nome) {
        driver.findElement(by.id('name')).sendKeys(nome);
    });

    this.When(/^a descrição é preenchida "([^]*)"$/, async function (descricao) {
        driver.findElement(by.id('descricao')).sendKeys(descricao);
    });

    this.When(/^o tcle é preenchido "([^]*)"$/, async function (tcle) {
        driver.findElement(by.id('tcle')).sendKeys(tcle);
    });

    this.When(/^o status é preenchido "([^]*)"$/, async function (status) {
        driver.findElement(by.id('tcle')).sendKeys(status);
    });

    this.When(/^clica no botão salvar pesquisa$/, async function () {
        return await driver.findElement(by.id('btn_salvar_pesquisa')).click();
    });

    this.Then(/^a pesquisa é criada e exibida na tela "([^]*)"$/, async function (mensagemEsperada) {
        const mensagemProduzida = await driver.switchTo().alert().getText();
        await expect(mensagemProduzida).to.equal(mensagemEsperada);
        driver.switchTo().alert().accept();
        
        return helpers.loadPage('http://localhost:3000/pesquisas')
    });
}