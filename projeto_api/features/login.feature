# language: pt

@login
Funcionalidade: Logar na plataforma de avaliação de usabilidade de software
  A fim de  logar na plataforma
  Como usuario registrado
  Eu quero Logar para ter acesso a criação e avaliação de usabilidade

    Cenário: Login válido
        Dado que o Engenheiro de Software possui uma conta válida
        Quando usuário fornece email válido "rodrigo@teste.com.br"
        E forneça senha válida "123"
        Então exibir a mensagem de sucesso "Usuario Logado"

    Cenário: Login inválido
        Dado que o Engenheiro de Software possui uma conta inválido
        Quando usuário fornece email inválido "testando@teste.com.br"
        E forneça senha inválida "teste"
        Então exibir mensagem de falha "Usuário ou senha incorreta"