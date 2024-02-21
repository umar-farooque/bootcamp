import { Money } from "./Money";

export enum Currency {
  USD,
  INR,
  EUR,
}

export class Wallet {
  private _balance: Money;

  constructor(currency: Currency) {
    this._balance = new Money(currency, 0);
  }

  credit(money: Money) {
    this._balance = new Money(
      this._balance.currency(),
      this._balance.amount() + this.convert(money.currency(), money.amount())
    );
  }

  private convert(currency: Currency, amount: number) {
    if (currency == this._balance.currency()) return amount;
    if (currency == Currency.USD) {
      if (this._balance.currency() == Currency.INR) return amount * 2;
      return amount / 2;
    } else if (currency == Currency.EUR) {
      if (this._balance.currency() == Currency.INR) return amount * 4;
      return amount / 2;
    } else {
      if (this._balance.currency() == Currency.EUR) {
        return amount * 0.25;
      }
      return amount * 0.5;
    }
  }

  balance(): Money {
    return this._balance;
  }
}
