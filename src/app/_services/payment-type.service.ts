import { Injectable } from '@angular/core';
import { PaymentType } from '../_model/payment-type';

@Injectable()
export class PaymentTypeService {
  paymentType: PaymentType[] = [
    { id: 1, name: 'Direct Bank Transfare' },
    { id: 2, name: 'Cheque Payment' },
    { id: 3, name: 'Paypal' },
    { id: 4, name: 'Visa' },
    { id: 5, name: 'Mastercard' },
    { id: 6, name: 'On Dilivery' },
  ];

  getAllPayments(): PaymentType[] {
    return this.paymentType.slice();
  }

  constructor() {}
}
