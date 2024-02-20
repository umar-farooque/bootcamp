import { Currency } from "./Wallet";

export class Money {
  private _currency: Currency;
  private _amount: number;

  constructor(currency: Currency, amount: number) {
    this._currency = currency;
    this._amount = amount;
  }

  amount() {
    return this._amount;
  }

  currency() {
    return this._currency;
  }
}
