
# InTunes - Plataforma de Pesquisa de Influencers

O projeto "InTunes" é uma aplicação full stack desenvolvida como parte de um teste técnico em um prazo de 4 dias. A aplicação foi criada para fornecer uma solução completa que permite aos usuários pesquisar e descobrir influencers famosos, além de oferecer uma experiência intuitiva por meio de uma dashboard bem projetada.

Durante o desenvolvimento do projeto, foram implementadas diversas funcionalidades essenciais, como pesquisa de influencers por nome, país, categoria e número de seguidores. A aplicação também inclui recursos avançados, como pesquisa combinada, onde os usuários podem combinar múltiplos critérios para refinar ainda mais os resultados da pesquisa.

# AVISO
O projeto "fullstack-angular" ainda está em desenvolvimento ativo e está passando por melhorias e adições de novas funcionalidades. Algumas das features planejadas ou em andamento incluem:

* Responsividade: O projeto está sendo atualizado para garantir uma experiência responsiva em diferentes dispositivos, como smartphones, tablets e desktops. Isso envolve ajustes no layout, design e interações para que a aplicação se adapte a diferentes tamanhos de tela.

* Pesquisa Combinada: Está sendo desenvolvida uma funcionalidade de pesquisa combinada, permitindo aos usuários realizar pesquisas mais avançadas e complexas, combinando diferentes critérios de pesquisa, como nome, país, categoria e número de seguidores, para obter resultados mais precisos.

* Testes Unitários e de Integração: Está sendo implementada uma suíte abrangente de testes para garantir a qualidade do código e a estabilidade do projeto. Serão criados testes unitários para testar componentes, serviços e outras partes isoladas do código, além de testes de integração para verificar a interação correta entre as diferentes partes do sistema.

* Deploy(Proximo Passo): Será configurado um processo de implantação automatizada para facilitar a implantação da aplicação em um ambiente de produção. Isso pode envolver o uso de ferramentas e serviços como Docker, Kubernetes ou serviços de hospedagem em nuvem, garantindo uma implantação suave e escalável.

* Refatoração: Serão realizadas melhorias contínuas no código, incluindo refatoração para melhorar a legibilidade, modularidade e manutenibilidade do projeto. Isso ajudará a otimizar o desempenho, aprimorar a estrutura do código e tornar o projeto mais fácil de entender e dar manutenção.

Além dessas features mencionadas, outras melhorias e funcionalidades podem ser adicionadas ao projeto ao longo do tempo, de acordo com as necessidades e requisitos em constante evolução.

É importante destacar que o projeto está em desenvolvimento ativo e pode sofrer alterações significativas. Recomenda-se acompanhar as atualizações no repositório do projeto e ler a documentação fornecida para obter informações atualizadas sobre as features e o progresso do desenvolvimento.

# Recursos principais
* Pesquisa de Influencers: Os usuários podem realizar pesquisas por influencers famosos usando diversos critérios, como nome, país, categoria e número de seguidores. A pesquisa é flexível e os resultados são exibidos na dashboard.
* Dashboard Intuitiva: A dashboard é projetada para fornecer uma experiência de usuário agradável e intuitiva, com um layout organizado que exibe os resultados da pesquisa de forma clara e concisa.
* Detalhes dos Influencers: Ao selecionar um influencer na pesquisa, os usuários podem visualizar informações detalhadas sobre o perfil, incluindo imagem, nome, país, categoria e número de seguidores.
* Integração com API: A aplicação se conecta a uma API externa para obter os dados dos influencers e fornecer resultados atualizados e precisos aos usuários.
* Design Responsivo: A interface do usuário é responsiva, garantindo que a aplicação seja acessível e funcione bem em dispositivos móveis, tablets e desktops.

# Benefícios do Projeto
* Pesquisa Eficiente: Com o InTunes, os usuários podem realizar pesquisas avançadas para encontrar os influencers que melhor atendem às suas necessidades, economizando tempo e esforço na busca manual.
* Tomada de Decisão Informada: Os usuários têm acesso a informações detalhadas sobre os influencers, permitindo que tomem decisões informadas com base em critérios relevantes, como popularidade e alcance geográfico.
* Interface Intuitiva: A dashboard intuitiva e de fácil utilização torna a pesquisa de influencers uma tarefa simples e agradável, mesmo para usuários iniciantes.
* Resultados Atualizados: A integração com a API externa garante que os resultados sejam sempre atualizados, fornecendo aos usuários informações precisas e relevantes.

# Tecnologias

## Tecnologias utilizadas no Backend:
* Linguagem de Programação: TypeScript
* Framework Web: Express.js
* Banco de Dados: MySQL com o ORM Sequelize
* Autenticação: JSON Web Tokens (jsonwebtoken)
* Criptografia de Senha: bcryptjs
* Validação de Dados: Joi
* Middleware de CORS: cors
* Gerenciamento de Variáveis de Ambiente: dotenv
* Testes: Mocha, Chai, Sinon
* Ferramenta de Cobertura de Testes: NYC (Istanbul)
* Linter: ESLint

## Tecnologias utilizadas no Frontend:
* Framework: Angular
* Linguagem de Programação: TypeScript
* Gerenciador de Pacotes: npm
* Biblioteca de Reatividade: RxJS
* Sistema de Roteamento: Angular Router
* Validação de Formulários: Angular Forms
* Animações: Angular Animations

## Motivos das Tecnologias Selecionadas:
Essas tecnologias foram selecionadas para fornecer uma base sólida e eficiente para a aplicação "InTunes", permitindo um desenvolvimento ágil, escalável e de fácil manutenção tanto no backend quanto no frontend.

É importante observar que a versão das tecnologias listadas acima é baseada no arquivo package.json fornecido, portanto, pode haver variações nas versões dependendo da data em que o arquivo foi gerado.

Este projeto demonstra o uso de tecnologias modernas e populares para desenvolver uma aplicação web robusta e funcional, oferecendo uma experiência de pesquisa e gerenciamento de influencers de forma eficiente e amigável.

# Estrutura do projeto
O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - Sua aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
 - O `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;

3️⃣ **Front-end:**
  - Ao rodar docker o front-end estara acessivel por uma pessoa acessando o site `http://localhost:4200/`;
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que foi construido nos requisitos.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `docker-compose up -d` somente apos executar o script shell `./install_dependencies.sh` em um terminal `bash`;

# Rodando o Projeto(Docker)
Clone o repositorio do projeto em: `git clone git@github.com:ThiagoFdaSLopes/fullstack-angular.git`.

Apos clonar, executa o script `./install_dependencies.sh` em um terminal `bash`.

Esse serviço ira inicializar os container ```app_backend```, ```app_frontend```, e container do banco de dados mysql.
Ao subir os 3 containers as aplicacoes ja estaram rodando em suas respectivas portas.

Altere no package.json o script ```start``` para o seguinte comando ```ng server --host 0.0.0.0 --poll=2000``` para permitir que seja depurado no localhost o frontend.

Para consumir o frontend acesse em seu navegador: ```http://localhost:4200```

:warning: Atenção :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

:warning: Atenção :warning: O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```bash
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```
Foram encontradas 2 possíveis soluções para este problema:
* Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
* Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.

# Rotas Da Api

### Login

Para fazer login e receber um token de adm use os seguintes dados:

```json
{
  "email": "admin@admin.com",
  "password": "secret_admin"
}
```

#### Fazer Login
```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório no body**. |
| `password` | `string` | **Obrigatório no body**. |

#### Registrar
```http
  POST /login/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório no body**. |
| `password` | `string` | **Obrigatório no body**. |
| `userName` | `string` | **Obrigatório no body**. |

#### Pegar "role" do usuario

```http
  GET /login/role <--(Precisa ter o token)
```

```
 Sera validado se existe um token(authorization) no headers.
```
## Influencers
#### Buscar influencer por ID

```
 Sera validado se existe um token(authorization) no headers.
```

```http
  GET /influencers/:id <--(Precisa ter um token(authorization))
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório no params da rota**.  |


#### Deletando influencer por ID

```
 Sera validado se existe um token no headers e se o usuário é um admin.
```

```http
  DELETE /influencers/:id <--(Precisa ter um token(authorization))
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório no params da rota**.  |

#### Pegar todos influencers

```
 Sera validado se existe um token(authorization) no headers.
```

```http
  GET /influencers
  ```
  
 #### Atualizar Dados de um influencer
 ```http
  PUT /influencers/:id <--(Precisa ter um token(authorization))
  ```

```
 Sera validado se existe um token(authorization) no headers e se o usuário é um admin.
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório no params e body da rota**.  |
| `image`      | `string` | **Obrigatório no body da rota**.  |
| `name`      | `string` | **Obrigatório no body da rota**.  |
| `platform`      | `string` | **Obrigatório no body da rota**.  |
| `country`      | `string` | **Obrigatório no body da rota**.  |
| `followers`      | `number` | **Obrigatório no body da rota**.  |
| `category`      | `string` | **Obrigatório no body da rota**.  |

#### Criar um influencer
```http
  POST /influencers/register <--(Precisa ter um token(authorization))
```

```
 Sera validado se existe um token(authorization) no headers e se o usuário é um admin.
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `image`      | `string` | **Obrigatório no body da rota**.  |
| `name`      | `string` | **Obrigatório no body da rota**.  |
| `platform`      | `string` | **Obrigatório no body da rota**.  |
| `country`      | `string` | **Obrigatório no body da rota**.  |
| `followers`      | `number` | **Obrigatório no body da rota**.  |
| `category`      | `string` | **Obrigatório no body da rota**.  |

#### Pesquisar influencer por alguma coluna

Essa rota foi criado com a ideia de o usuario buscar por um influencer por 1 de 4 opcoes:
Sendo elas: `name, country, category, followers`, podendo apenas pesquisar por 1 delas. A combinacao de parametros de pesquisa sera feita em outra rota.
```http
  POST /influencers/search <--(Precisa ter um token(authorization))
```

```
 Sera validado se existe um token(authorization) no headers podendo ser USER ou ADMIN.
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `image`      | `string` | **Obrigatório no body da rota**.  |
| `name`      | `string` | **Obrigatório no body da rota**.  |
| `platform`      | `string` | **Obrigatório no body da rota**.  |
| `country`      | `string` | **Obrigatório no body da rota**.  |
| `followers`      | `number` | **Obrigatório no body da rota**.  |
| `category`      | `string` | **Obrigatório no body da rota**.  |


## Autores

- Github: [@ThiagoFDaSLopes](https://www.github.com/ThiagoFDaSLopes)
- Linkedin: [@ThiagoLopes](https://www.linkedin.com/in/thiago-lopes-dev-/)

