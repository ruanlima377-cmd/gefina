import { Router } from 'express';

import {
  findAllInvoices,
  findAllInvoiceById
} from './invoice.service.ts';

const router = Router();

router.get('/api/invoices', (_request, response) => {
  const invoices = findAllInvoices();
  
  response.status(200).json(invoices);
});

router.get('/api/invoices/:id', (request, response) => {
  const id = Number(request.params.id);

  const invoice = findAllInvoiceById(id);

  if (!invoice) response.status(404).json({
      error: {
        status: 404,
        message: 'Fatura não encontrada.',
      }
    });

  response.status(200).json(invoice);
});

export default router;