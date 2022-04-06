# language: pt

@avaliar
Funcionalidade: Preencher avaliação
  A fim de  preencher a avaliação de usabilidade de software
  Como usuário logado
  Eu quero preencher a avaliações de usabilidade de software

    Cenário: Avaliar
        Dado que o Usuário possua conta
        E que esteja logado
        Quando  as respostas estiverem preenchidas
        E o usuário clica no botão enviar
        Então é exibida a mensagem "Avaliação realizada com sucesso"