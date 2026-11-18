const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/api/check/:email', (req, res) => res.json({ breached: true, breaches: [{ Title: 'LinkedIn' }] }));
app.listen(PORT, () => console.log('Server started'));
