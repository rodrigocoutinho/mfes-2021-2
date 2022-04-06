# language: pt

@contavalida
Funcionalidade: Criar conta na plataforma de avaliação de usabilidade de software
  A fim de criar de conta na plataforma.
  Como usuario externo
  Eu quero criar conta para ter acesso ou criar avaliações de usabilidade de software.

    Cenário: Criar conta válida
        Dado que um usuário ainda não tem cadastro
        Quando  fornece nome "Rodrigo"
        E telefone "62-9999-9999"
        E fornece tipo "Engenheiro de Software"
        E fornece email "rodrigo@teste.com.br"
        E fornece senha "123"
        Então é exibida mensagem de usuario cadastrado "Usuário cadastrado com sucesso"