const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3003;
app.use(cors({ origin: 'http://localhost:2005' }));
app.use(express.json());//parse JSON body
app.use(express.urlencoded({ extended: true }));//parse form data

const userRoutes = require('./connect.js');
app.use('/', userRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
