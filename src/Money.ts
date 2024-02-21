import { Currency } from "./Currency";

export class Money {
  private _currency: Currency;
  private _amount: number;

  constructor(currency: Currency, amount: number) {
    this._currency = currency;
    this._amount = amount;
  }
  add(money: Money): Money {
    if (money._currency == this._currency)
      return new Money(this._currency, money._amount + this._amount);
    const convertedAmount = this._currency.convert(
      money._amount,
      money._currency
    );
    return new Money(this._currency, this._amount + convertedAmount);
  }
  get amount(): number {
    return this._amount;
  }
  get currency(): Currency {
    return this._currency;
  }
}
