const express = require('express');
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Captando arquivos estáticos para o server.js
app.use(express.static(path.join(__dirname, 'public')));

// Criando a lógica da API na página, em que é necessário encontrar com uma Keyword
app.get('/api/scrape', async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    try {
        const url = `https://www.amazon.com/s?k=${keyword}`;
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const dom = new JSDOM(response.data); // Cria o DOM
        const document = dom.window.document;

        const products = []; // Armazena os detalhes dos produtos que virão do scrapping
        const items = document.querySelectorAll('.s-result-item'); // Recebe todos os items e produtos selecionados da página da Amazon
        items.forEach(item => { // Itera e extrai cada detalhe requeridos dos produtos até que não haja mais produtos
            const title = item.querySelector('h2 .a-link-normal.a-text-normal');
            const rating = item.querySelector('.a-icon-alt');
            const reviews = item.querySelector('.a-size-small .a-link-normal');
            const image = item.querySelector('.s-image');

            if (title && rating && reviews && image) { // Checa se todos os detalhes estão corretos e adiciona o item ao array Products que vai conter a lista de items
                products.push({
                    title: title.textContent.trim(),
                    rating: rating.textContent.trim(),
                    reviews: reviews.textContent.trim(),
                    image: image.src
                });
            }
        });

        res.json(products);
    } catch (error) { // Tratar exceção sinalizando erro interno do servidor
        res.status(500).json({ error: error.message });
    }
});

// Define uma rota coringa para a lógica das requisições quanto ao front end HTML
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Vincula a conexão ao host e porta
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
