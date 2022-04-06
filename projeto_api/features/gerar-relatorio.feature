# language: pt

@gerar_relatorio
Funcionalidade: Gerar relatório de usabilidade
  A fim de gerar relatório de avaliação de usabilidade
  Como usuário Engenheiro de software
  Eu quero gerar relatório de avaliação de usabilidade de software

    Cenário: Gerar Relatório
        Dado que o Engenheiro de Software tenha avaliação de usabilidade cadastrada.
        E que esteja logado
        Quando  a avaliação estiver finalizada
        E o Engenheiro de Software clicar no botão Gerar relatório
        Então o relatório é gerado
        E relatório é exibido