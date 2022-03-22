# Teste Schaffem

Esta é minha resolução para o teste lógico que me foi passado.

✔ [Link do site com a resolução](https://gustavogomesdias.github.io/test-schaffen/)


## 1. Especificação
Especificação

A empresa Hortaliças e Hortaliças desenvolveu um robô que é programado para realizar a irrigação de uma horta a partir de algumas informações que são inseridas no mesmo. Considerando que todas as hortas são planas, e não possuem obstáculos que devem ser previstos pelo robô, as hortas possuem um tamanho X e Y e cada canteiro dentro da horta possui uma planta que deve ser irrigada.

Os comandos de movimento que são executados pelo robô são:

- D para virar 90º para a direita

- E para virar 90º para a esquerda

- M para movimentar o robô

- I ação de irrigação

 

Entrada de dados

O proprietário da horta deve informar o tamanho da horta (x e y) e a posição na qual o robô será inicialmente posicionado, neste caso deve considerar também para qual direção a face do robô está direcionada (norte - N, sul - S, leste - L ou oeste - O), essa direção vai indicar para onde o robô está caminhando, ou seja, se o robô estiver indo para o norte ele se deslocará da posição (x,y) para (x,y+1).

Após informar o tamanho da horta e a posição inicial do robô, deve-se informar quais canteiros o robô deve passar e irrigar (>= 1 sem limitação de qtde máxima de canteiros. A irrigação pode ser repetida em um mesmo canteiro).

O resultado que deve ser mostrado no final é uma STRING contendo os movimentos que devem ser realizados e a ação de irrigação (I) pelo robô para chegar no último canteiro indicado pelo usuário.

**ATENÇÃO: Para o teste me foi permitido usar qualquer linguagem.**

## 2. Resolução

Eu fiz ela usando TypeScript, HTML e CSS. Usei TypeScript aqui pois é o que domina meu fluxo de trabalho, mas daria perfeitamente para fazer apenas com JavaScript também.

Atualmente, a resolução é um site estático com uma única [página](https://gustavogomesdias.github.io/test-schaffen/), sendo que não foi implementado o responsivo e por isso aconselho usar o computador para ter melhor experiência.

## 3. Para rodar junto do TypeScript

Eu recomendo fazer as alterações no TS se possível e, depois de alterá-lo, rode o comando `npm run build` para parsear o TS para JS e funcionar no HTML.


## Autor
<table>
  <tr>
    <td align="center"><a href="https://github.com/GustavoGomesDias"><img src="https://github.com/GustavoGomesDias.png" width="100px;" alt="Profile"/><br /><sub><b>Gustavo</b></sub></a><br /><a href="https://github.com/GustavoGomesDias" title="Code">😎</a></td>
  <tr>
</table>