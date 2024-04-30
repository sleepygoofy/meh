const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Read the count from a file
let count = parseInt(fs.readFileSync('count.txt', 'utf8'));

// Increment the count on each visit
app.get('/', (req, res) => {
    count++;
    fs.writeFileSync('count.txt', count.toString());
    res.send(`Visitor Count: ${count}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
