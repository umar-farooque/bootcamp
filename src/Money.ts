import { Currency } from "./Currency";

export class Money {
  private _currency: Currency;
  private _amount: number;

  constructor(currency: Currency, amount: number) {
    this._currency = currency;
    this._amount = amount;
  }
  addMoney(money: Money): Money {
    if (money.currency == this.currency)
      return new Money(this.currency, money.amount + this.amount);
    const convertedAmount = this.currency.convert(money.amount, money.currency);
    return new Money(this.currency, this.amount + convertedAmount);
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }
}
