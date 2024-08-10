const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

let students = [];

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const { name, age } = req.body;
    students.push({ name, age });
    res.status(201).json({ name, age });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
