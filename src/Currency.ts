export class Currency {
  private _conversionRate: number;
  constructor(conversionFactor: number) {
    this._conversionRate = conversionFactor;
  }
  static readonly PKR = new Currency(1);
  static readonly INR = new Currency(Currency.PKR.conversionRate() * 2);
  static readonly USD = new Currency(Currency.INR.conversionRate() * 2);
  static readonly EUR = new Currency(Currency.INR.conversionRate() * 4);

  conversionRate(): number {
    return this._conversionRate;
  }
  toBase(amount: number, currency: Currency): number {
    return amount * currency.conversionRate();
  }
  fromBase(amount: number, currency: Currency): number {
    return this.toBase(amount, currency) / this.conversionRate();
  }
  convert(amount: number, currency: Currency) {
    return this.fromBase(amount, currency);
  }
}
