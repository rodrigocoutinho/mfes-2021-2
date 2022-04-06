# language: pt
@pesquisa
Funcionalidade: Criar avaliação de usabilidade
  A fim de  criar avaliação de usabilidade
  Como usuário Engenheiro de Software
  Eu quero criar avaliação de usabilidade de software

    Cenário: Criar avaliação
        Dado que o Engenheiro de Software tenha acesso a tela de login
        E que um usuário esteja logado
        Quando  Clica no botão de criação de pesquisa
        E o nome da avaliação é preenchido "Nome"
        E a descrição é preenchida "Descrição"
        E o tcle é preenchido "TCLE"
        E o status é preenchido "Em andamento"
        E clica no botão salvar pesquisa
        Então a pesquisa é criada e exibida na tela "Pesquisa cadastrada com sucesso!"

