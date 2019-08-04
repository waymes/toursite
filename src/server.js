const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: 'src' });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/trip/:id', (req, res) => {
      const query = { id: req.params.id };
      app.render(req, res, '/trip', query);
    });
    server.get('/article/:id', (req, res) => {
      const query = { id: req.params.id };
      app.render(req, res, '/article', query);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
