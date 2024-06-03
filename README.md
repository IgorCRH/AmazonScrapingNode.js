## Descrição
Desafio que consiste na codificação de uma página de scraping de produtos da Amazon dado uma palavra-chave. Então, todos os produtos do tipo da palavra-chave devem ser retornados.

## Enunciado
Backend/API (Node.js):
Set up a Node.js project with the necessary dependencies (express, axios and JSDOM).
Write a script using axios to fetch the contents of the Amazon search results page for a given keyword.
Use JSDOM to parse the HTML content and extract the following details for each product listing on the first page:
Product Title
Rating (stars out of five)
Number of reviews
Product image URL
Create an endpoint /api/scrape where a GET request with a query parameter ?keyword=yourKeyword initiates the scraping process and returns the extracted data in JSON format.
Frontend (HTML, CSS, Vanilla JavaScript):
Develop a simple webpage with:
An input field to enter the search keyword.
A button to initiate the scraping process.
Style the webpage to be user-friendly and presentable.
Implement JavaScript to make an AJAX call to the backend endpoint when the button is clicked, and display the results formatted cleanly on the page.

## Linguagens e Ferramentas
- Node.js (Axios, JSDOM e Express)
- HTML
- CSS
- Javascript Puro (Front-End)

## Instruções
- Crie uma pasta para o projeto
- Adicione os arquivos e pastas do repositório nesta pasta
- Abra a pasta principal contendo o(s) projeto(s) node em sua máquina
- Navegue para dentro da pasta do projeto na IDE de sua preferência (neste projeto foi utilizado o VSCode) com o comando cd
- Execute o comando npm install express axios jsdom, na pasta do projeto
- Execute o comando npm start nomedapastadoprojeto
- Acesse por meio do localhost:3000

## Vídeo



https://github.com/IgorCRH/AmazonScrapingNode.js/assets/125159948/9db254e1-4bc2-4820-b913-863af551f183

