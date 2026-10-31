import express from 'express';

import invoiceRouter from './invoice.route.ts';

const app = express();

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

// http://localhost:3000/api/invoices

app.use('/api/invoices', invoiceRouter);

app.use((_request, response) => {
  response.status(404).json({
    error: {
      status: 404,
      message: 'Recurso não encontrado.',
    },
  });
});

app.listen(3000);
