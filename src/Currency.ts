import { Money } from "./Money";

export class Currency {
  private _conversionRate: number;
  constructor(conversionFactor: number) {
    this._conversionRate = conversionFactor;
  }
  static readonly INR = new Currency(1);
  static readonly USD = new Currency(2);
  static readonly EUR = new Currency(4);
  conversionRate(): number {
    return this._conversionRate;
  }
  convert(amount: number, currency: Currency) {
    const inINR = amount * currency.conversionRate();
    return inINR / this.conversionRate();
  }
}
