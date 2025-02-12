const path = require('path');
const express = require('express');


const app = express();

app.use('', express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  return response.sendFile('index.html', { root: '.' });
});

app.get('/for-alexis-c73h1', (request, response) => {
  return response.sendFile('contact.html', { root: '.' });
});

app.get('/alexis', (request, response) => {
  return response.sendFile('web1.html', { root: '.' });
});

app.get('/facebook', (request, response) => {
  return response.redirect('https://www.facebook.com/p/KeyMi-61573048131824/?wtsid=rdr_0rVkq5ej07N8cj2XY&from_intent_redirect=1#');
});

app.get('/auth/discord', (request, response) => {
  return response.sendFile('dashboard.html', { root: '.' });
});


const port = '8000';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
