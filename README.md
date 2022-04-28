# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
npx create-react-app list-promotions
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Lista de Promoções

Um listagem de produtos em promoções em ReactJS, utilizando uma API fake com JSON Server




## Documentação da API

#### Retorna todos os itens

```http
  GET /localhost:5000/?_embed=comments
```


## Instalação

Crie um diretório:
```
mkdir apifake
cd apifake
```
Rode o comando abaixo com o nodejs instalado na máquina
```
npm init
```
Instale com npm

```bash
  npm install -g json-server
```
Crie um arquivo db.json    
```
[
  {
    "id": 1,
    "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
    "price": 1799,
    "imageUrl": "https://m.media-amazon.com/images/I/61o0lt6Sh6L._AC_SL1000_.jpg",
    "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S",
    "comments": [
      {
        "id": 1,
        "comment": "TELA HD",
        "promotionId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "Faqueiro Tramontina Laguna Inox - 100 Peças",
    "price": 246.05,
    "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem/0324bf9ad81ccbc5a8e22a1a41015649.png",
    "url": "",
    "comments": [
      {
        "id": 2,
        "comment": "de R$ 599,90 \n por R$246,05à vista \n (5% de desconto) \n ou R$ 259,00 em 5x de R$ 51,80 sem juros",
        "promotionId": 2
      }
    ]
  },
  {
    "id": 3,
    "title": "Tênis West Coast Marrom",
    "price": 119.99,
    "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem/fe0a1e4ddcbd8f9a99a05908b6d29ea2.png",
    "url": "",
    "comments": []
  },
  {
    "id": 4,
    "title": "Fone de Ouvido Jaybird Run XT Sport Bluetooth, Cinza",
    "price": 699.9,
    "imageUrl": "https://m.media-amazon.com/images/I/61AcdWphNAL._AC_SL1500_.jpg",
    "url": "https://www.amazon.com.br/Fones-ouvido-sem-Jaybird-True/dp/B07MSLF5YC",
    "comments": []
  }
]
```
Adicione no arquivo package json em scripts:
```
"scripts": {
    "start": "json-server --watch db.json --port 5000 delay=5000"
  },
```
Para rodar a api use o comando:
```
npm start
```
Aparecerá o seguinte resultado:

```
$npm start

> apifake@1.0.0 start
> json-server --watch db.json --port 5000 delay=5000


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:5000/promotions
  http://localhost:5000/comments

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
  Watching...

GET /promotions?_embed=comments 200 25.777 ms - -
GET /promotions?_embed=comments 304 19.116 ms - -

```

## Referência

 - [JSON SERVER](https://www.npmjs.com/package/json-server)