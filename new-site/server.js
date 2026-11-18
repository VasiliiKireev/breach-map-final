const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/check/:email', (req, res) => {
  res.json({ 
    breached: true, 
    breaches: [{ Title: 'LinkedIn', BreachDate: '2012-05-05', DataClasses: ['Email', 'Password'] }] 
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
