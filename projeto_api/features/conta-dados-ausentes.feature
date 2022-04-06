# language: pt

@conta_com_dados_ausentes
Funcionalidade: Criar uma conta com dados ausentes na plataforma de avaliação de usabilidade de software
  A fim de criar de conta na plataforma.
  Como usuario interno
  Eu quero criar conta com dados obrigatórios ausentes na plataforma de avaliações de usabilidade de software.

    Cenário: Nome ausente
        Dado que um usuário não preenche o nome para criação de conta
        Quando campo obrigatório nome não é preenchido
        Então é exibida mensagem de nome "O nome é obrigatório!"

    Cenário: Telefone ausente
        Dado que um usuário não preenche o telefone para criação de conta
        Quando campo obrigatório telefone não é preenchido        
        Então é exibida mensagem de telefone "O telefone é obrigatório!"

    Cenário: Email ausente
        Dado que um usuário não preenche o email para criação de conta
        Quando campo obrigatório email não é preenchido
        Então é exibida mensagem de email "O email é obrigatório!"

    Cenário: Senha ausente
        Dado que um usuário não preenche a senha para criação de conta
        Quando campo obrigatório senha não é preenchido
        Então é exibida mensagem de senha "A senha é obrigatória!"