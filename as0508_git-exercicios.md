### Atividade Supervisionada 002: Git Exercícios - 15/12/2021.

Responda as questões abaixo (exercite os comandos do git correspondentes). Lembre-se de que o “interessante” não é exatamente o conjunto de respostas, mas o processo de obtê-las e a experiência obtida com a execução dos comandos.


1. Qual o comando para obter a versão instalada do Git?
  1.1 **Resposta:** git --version
2. Qual o efeito da execução de cada um dos comandos abaixo?
  a. git help
  2.1 **Resposta:** mostra opções para ajudar, em relação aos comandos e descrições disponiveis.
  b. git help checkout
  2.2 **Resposta:** abre o manual do comando checkout.
  c. git help merge
  2.3 **Resposta:** abre manual do comando merge
  d. git init
  2.4 **Resposta:** inicializa o git na diretório.
  e. git add --all
  2.5  **Resposta:** adiciona os arquivos a lista de commit
  f. git add -u
  2.6 **Resposta:** atualiza o indece
  g. git config -l
  2.7 **Resposta:** mostra as variaveis e seus valores, definidos no arquivo de configuração
  h. git mv a.txt b.txt
  2.8 **Resposta:** renomeia o arquivo.
  i. git reset --hard
  2.9 **Resposta:** descarta alterações do commit.
  j. git log -27
  2.10 **Resposta:**  mostra log do commit
3. O fluxo “clássico” de interação com o Git é algo como “alterar um ou mais arquivos”, “acrescentar essas mudanças para serem contemplados no próximo commit” e, finalmente, executar um “commit”. Quais os comandos necessários para realizar os dois últimos “passos” desse fluxo?
3.1 **Resposta:** add e commit -m "descrição para o commit".
4. Qual o comando deve ser executado para identificar o que foi alterado desde o último “commit”?
4.1 **Resposta:** 
5. Em um dado repositório, arquivos simplesmente copiados para lá, ou seja, _untracked_, podem ser exibidos/identificados com que comando?
5.1 **Resposta:** 
6. Qual o comando para efetuar um _commit_?
6.1 **Resposta:** 
7. Qual o comando que devemos empregar para descartar mudanças ocorridas no arquivo teste.txt, por exemplo?
7.1 **Resposta:** 
8. O que deve ser feito para que um determinado diretório do seu repositório seja ignorado pelo Git? Faça uma busca por **.gitignore**.
8.1 **Resposta:** adicionar esse diretorio no arquivo .gitignore, arquivo ou tipo de arquivo para que seja ignorado.
9. O que acontece se o seu repositório local for acidentalmente removido?
9.1 **Resposta:** 
10. Como clonar um repositório remoto?
10.1 **Resposta:** git clone "link do diretório"
11. Em alguns cenários **git log** pode produzir extensos resultados. Se houver interesse em visualizar o histórico de um repositório, onde cada mudança é fornecida exatamente em uma única linha, qual o comando que deve ser empregado?
11.1 **Resposta:** 
12. Em qual arquivo o Git armazena informações de configuração empregadas por usuário?
12.1 **Resposta:**
13. Qual o comando para criar um repositório local?
13.1 **Resposta:** git init 
14. Qual o nome do diretório criado pelo Git quando se executa o comando **git init**?
14.1 **Resposta:** 
15. Qual o comando para adicionar todos os arquivos modificados? (Aqueles para os quais **git status** identificam como **modified**?)
15.1 **Resposta:**
16. O Git faz uso do valor de hash conhecido por SHA1. O que isto significa? Qual o propósito? O que é SHA1?
16.1 **Resposta:** 
17. Qual a palavra para indicar o último _commit_ em vez do valor de hash SHA1 correspondente?
17.1 **Resposta:** 
18. Quando se cria dois arquivos usando um editor de texto qualquer e, na sequência, executamos o comando **git add -u**, os dois arquivos criados passam de _untracked_ para _new file_?
18.1 **Resposta:** 
19. Qual o efeito da execução dos dois comandos abaixo, nesta ordem, em um dado repositório?
**git reset --soft HEAD~1**
**git reset --hard**
19.1 **Resposta:** 
20. Após o emprego de um ambiente integrado de desenvolvimento (IDE), é comum a criação de arquivos e diretórios. Qual o comando que podemos empregar para remover arquivos e diretórios _untracked_?
20.1 **Resposta:** 
21. Qual o nome do arquivo no qual podemos inserir a indicação para o Git de arquivos e diretórios a serem ignorados?
21.1 **Resposta:** 
22. Quando se cria o arquivo _MinhaClasse.class_ em um dado diretório e desejamos que arquivos com a extensão .class, como neste caso, sejam ignorados por todos os membros de uma equipe que estão contribuindo com um dado projeto, como devemos proceder?
22.1 **Resposta:** 
23. jQuery é uma famosa biblioteca em JavaScript. Consulte detalhes em [jQuery](http://jquery.com). O repositório correspondente encontra-se em [gitRep](https://github.com/jquery/jquery.git). Faça o clone deste repositório.
23.1 **Resposta:** 
24. No repositório **jqueryrepo**, criado no passo anterior, qual o efeito do comando
**git shortlog -sne**?
24.1 **Resposta:** 
25. No repositório **jqueryrepo**, qual o efeito de **git remote -v**?
25.1 **Resposta:** 
26. Um repositório Git pode ser etiquetado ao longo do tempo. Ou seja, _commits_ específicos podem ser “marcados” ou “etiquetados” para facilitar referências posteriores. Para listar todas as “etiquetas” (_tags_) estabelecidas para um dado repositório, qual comando deve ser executado?
26.1 **Resposta:** 
27. Caso um dato repositório retorne muitas “marcas” ou “etiquetas” para o comando **git tag**, como retornar apenas aquelas que atendem a determinado padrão, por exemplo, iniciadas por 2.0?
27.1 **Resposta:** 
28. Qual o efeito do comando **git tag -a 3.4-gold -m “minha versão ouro”**?
28.1 **Resposta:** 
29. Após executado o comando acima, qual o efeito de **git show 3.4-gold**?
29.1 **Resposta:** 
30. O que o comando **git push origin 3.4-gold** teria como efeito?
30.1 **Resposta:** 
31. Após executar um commit, qual o efeito de **git commit --amend**?
31.1 **Resposta:** 
32. Após executar **git add x.txt**, qual o efeito de **git reset HEAD x.txt**?
32.1 **Resposta:** 
33. Após alterar o conteúdo de um arquivo committed em passo anterior, qual o efeito do comando **git checkout -- a.txt**?
33.1 **Resposta:** 
34. Qual a diferença entre os comandos **git reset HEAD a.txt** e **git checkout -- a.txt**?
34.1 **Resposta:** 
35. Veja como interpretar o resultado de git diff [aqui](https://medium.com/therobinkim/how-to-read-a-git-diff-6c87a9dc47c5). Execute, em um dos seus projetos, o comando **git diff HEAD~1 HEAD** e certifique-se de que entende o resultado apresentado.
35.1 **Resposta:** 



INSTRUÇÕES:
1. A respostas podem ser adicionadas neste mesmo arquivo, imediatamente após cada questão, seguindo o seguinte padrão: 1.1. **Resposta**: descrever a resposta na sequência.
1. Fazer o _commit_ deste arquivo no seu repositório pessoal, na _branch master_ .
3. A data limite para concluir esta tarefa é dia 18/12/2021, as 23h59min.











</DIV/>
