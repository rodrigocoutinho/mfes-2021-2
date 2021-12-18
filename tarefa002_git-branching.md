### Tarefa 002: Git Branching - 15/12/2021

1. Qual o nome da _branch_ padrão do Git?
1.1 master
2. O que o comando **<code>git branch nome</code>** realiza?
2.1 muda para branch em questão
3. Como criar uma _branch_ a partir de um commit específico?
3.1 git checkout -b branch commit
4. Em um repositório, qual o efeito do comando **<code>git checkout -b bugfix/234</code>**?
4.1 cria e faz o checkout para nova branch
5. Qual o comando para se alternar para uma _branch_ de nome **experimento2**?
5.1 git branch experimento2
6. Em um repositório com duas _branches_, **b1** e **b2**, onde b1 é o corrente, qual o efeito do comando **<code>git branch</code>**?
6.1 lista as branchs
7. O que o comando **<code>git checkout -b nome</code>** faz?
7.1 cria e faz o checkout para nova branch
8. Qual a função do <code>**comando git branch -d teste</code>**?
8.1 deletar a branch test
9. Durante o desenvolvimento de um software é comum, por exemplo, utilizar um novo recurso por meio de experimentação. Talvez uma nova tecnologia, uma nova biblioteca que pode ser útil ao que está em desenvolvimento, ou até mesmo uma nova versão de um produto já empregado. Para que o uso deste novo recurso não interfira com o que é considerado pronto, uma _branch_ pode ser criada para a experimentação. Código que for criado para a experimentação existirá apenas na _branch_ criada. Se eventualmente o experimento demonstrar um resultado satisfatório, as alterações realizadas na _branch_ poderão ser incorporadas no que é considerado pronto, ou seja, na _branch_ principal (_master_). Esta última ação é conhecida por _merge_. Neste item, crie uma sequência de comandos que simula um caso simples de criação e uso seguido de _merge_ empregando uma _branch_ para ilustrar uma experimentação conforme acima. A sequência deve incluir, obrigatoriamente:
6.1 
        a. criação de uma ou mais _branches_;
        git checkout -b test
        b. chaveamento para pelo menos dois branches e
        git branch master
        git branch test
        c. merge.
        git merge test

INSTRUÇÕES:

INSTRUÇÕES:
1. A respostas podem ser adicionadas neste mesmo arquivo, imediatamente após cada questão, seguindo o seguinte padrão:
  1.1. **Resposta**: descrever a resposta na sequência.
1. Fazer o _commit_ deste arquivo no seu repositório pessoal, na _branch master_ .
3. A data limite para concluir esta tarefa é dia 18/12/2021, as 23h59min.

</DIV/>
