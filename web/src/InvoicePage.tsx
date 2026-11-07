import { Invoice } from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';

export default function InvoicePage() {
      const invoices: Invoice[] = [{
            id: 1,
            amount: 125037,
            status: 'pending',
            issueDate: '2026-09-25',
            dueDate: '2026-10-20',
            customer: {
                id: 7,
                name: 'Construtora Meridiano',
                email: 'comercial@meridiano.com.br',
            },
        }, {
            id: 2,
            amount: 35000,
            status: 'paid',
            issueDate: '2026-10-01',
            dueDate: '2026-10-31',
            customer: {
                id: 4,
                name: 'Grafica Nova',
                email: 'grafica@meridiano.com.br',
            },
        }, {
            id: 3,
            amount: 1836988,
            status: 'pending',
            issueDate: '2026-10-20',
            dueDate: '2026-11-25',
            customer: {
                id: 15,
                name: 'Tenditudo',
                email: 'comercial@Tenditudo.com.br',
            },
        }];

    return <>
        <h1>Faturas</h1>

        <main>
            <InvoiceTable datas={invoices} />
        </main>
    </>;
}