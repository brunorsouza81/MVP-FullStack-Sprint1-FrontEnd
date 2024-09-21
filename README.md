# MVP Full Stack - Sprint 1 - Back-End (API Maquininha)
## 1. Introdução

Este projeto é parte do MVP - _Minimum Viable Product_ - da _Sprint 1_ do curso **Desenvolvimento _Full Stack_ Básico** da PUC-Rio. O MVP é composto de um Back-End, com banco de dados, e de um Front-End. Neste repositório encontra-se a parte do Front-end da aplicação. A parte do Back-end pode ser acessada em [MVP-FullStack-Sprint1-BackEnd](https://github.com/brunorsouza81/MVP-FullStack-Sprint1-BackEnd.git).

>O objetivo do projeto é realizar o cadastro de maquininhas de adquirência para facilitar o controle de estoque dos terminais POS de uma *Cooperativa de Crédito*. As cooperativas de crédito oferecem serviços bancários com baixo custo para a população.

Uma das dores dessas cooperativas é o controle de estoque de terminais POS. É importante saber quantos terminais estão em estoque para realizar novos pedidos de terminais a tempo da entrega acontecer sem interromper as novas negociações em andamento.

  
## 2. Front-end
O Front-end da aplicação é responsável pela captura e exibição de dados em tempo real para o usuário. 

O Front-end está organizado da seguinte forma:

- index.html *(é a página web da aplicação visualizada pelo usuário)*
- styles.css *(é onde fica a estilização dos componentes web exibidos para o usuário)*
- scripts.js *(contém as funções necessárias para o funcionamento da aplicação web)*
- img:
    - adquirencia.jpg *(Banner exibido na página web da aplicação)*


## 3. Como executar
- Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

## 4. Considerações
Por se tratar de um MVP, algumas funcionalidades da API não foram implementadas neste momento, ficando para versões futuras da aplicação. Dentre as já mapeadas, destacam-se as relacionadas abaixo:

- Rota GET de listagem de terminais com filtragem por modelo ou status;
- Rota PUT para atualização do status do terminal cadastrado no banco de dados.
