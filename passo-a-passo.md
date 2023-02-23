# Passo a passo para criação do projeto

## Instalação do projeto
`ng new crud-angular-bootstrap`
Formatação em css

## Instalação Bootstrap
`nmp install --save bootstrap`
`npm install ngx-bootstrap --save`
Incluir também a importação nas dependencias de **angular.json** em Styles "node_modules/bootstrap/dist/css/bootstrap.min.css"

## Criar module e component de cursos
`ng g m cursos --routing`
`ng g c cursos/cursos-listar`

## Configuração de rotas
Realizar a declação das rotas tanto em app-routing quanto em cursos--routing, feito isso declarar no html raiz(app) o router-outlet para que direcione onde será exibido cursos.

## Navbar
Realizar a inclusão do navbar e configurar as rotas assim como routerLink e routerLinkActive

## Json Server
Realizar a instalação do Json-server para simular uma api
`npm install -g json-server`
Criar um arquivo db.json para simular o back-end
 Executar o db.json com `json-server --watch db.json` para inicializar a 'api'
``
``
``
``
``
``
``
``
``
``
``
``
``
``
``
``
``
