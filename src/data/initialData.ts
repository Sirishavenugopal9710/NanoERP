import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: ' ',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  title: 'INVOICE',
  companyName: 'Balaji Traders',
  name: 'Balaji',
  companyAddress: 'Rajajinagar',
  companyAddress2: '4th Block',
  companyCountry: 'India',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'India',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: '  ',
    
      quantity: ' ',
      rate: ' ',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: 'Rs',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
