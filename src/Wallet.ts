import { Currency } from "./Currency";
import { Money } from "./Money";

export class Wallet {
  private _balance: Money;

  constructor(currency: Currency) {
    this._balance = new Money(currency, 0);
  }

  credit(money: Money) {
    this._balance = this._balance.addMoney(money);
  }

  balance(): Money {
    return this._balance;
  }
}
