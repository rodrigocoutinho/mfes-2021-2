# language: pt

@contaexistente

Funcionalidade: Criar conta existente na plataforma de avaliação de usabilidade de software
  A fim de criar de conta na plataforma.
  Como usuario interno
  Eu quero criar conta que ja existente na plataforma de avaliações de usabilidade de software.

    Cenário: Conta Existente
        Dado que um usuário que tem cadastro
        Quando  fornece nome da conta existente "Rodrigo"
        E telefone da conta existente "62-9999-9999"
        E fornece tipo da conta existente "Engenheiro de Software"
        E fornece email da conta existente "rodrigo@teste.com.br"
        E fornece senha da conta existente "123"
        Então é exibida mensagem da conta existente "Usuário já é cadastrado."