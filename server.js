const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

app.use(express.static('public', { index: 'index.html' }));

// app.use(express.static('public', { index: 'admin.html' }));


//  to get products
app.get('/api/products', (req, res) => {
    const products = readProducts();
    res.json(products);
});

// to add a product
app.post('/api/products', (req, res) => {
    const { name, description, link, image } = req.body;

    if (!name || !description || !link || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const products = readProducts();

    const newProduct = {
        id: products.length + 1,
        name,
        description,
        link,
        image,
    };

    products.push(newProduct);
    writeProducts(products);

    res.json({ message: 'Product added successfully' });
});

//to delete a product by ID
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = readProducts();

    const updatedProducts = products.filter(product => product.id !== productId);
    writeProducts(updatedProducts);

    res.json({ message: 'Product deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function readProducts() {
    const data = fs.readFileSync('products.json', 'utf-8');
    return JSON.parse(data);
}

function writeProducts(products) {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync('products.json', data);
}
