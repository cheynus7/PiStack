const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/time-remaining', (req, res) => {
    res.json({ timeRemaining: 21600000 }); // Placeholder response
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});