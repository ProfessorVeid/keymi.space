const path = require('path');
const express = require('express');


const app = express();

app.use('', express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  return response.sendFile('index.html', { root: '.' });
});

app.get('/contact', (request, response) => {
  return response.sendFile('contact.html', { root: '.' });
});

app.get('/facebook', (request, response) => {
  return response.sendFile('https://www.facebook.com/share/1AugcfeqAA/', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
  return response.sendFile('dashboard.html', { root: '.' });
});


const port = '8000';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
