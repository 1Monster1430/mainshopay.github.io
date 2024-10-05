const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/cart.html', (req, res) => {
    res.sendFile(__dirname + '/public/cart.html');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
