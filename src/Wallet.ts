import { Currency } from "./Currency";
import { Money } from "./Money";

export enum Order {
  ASC,
  DESC,
}

export class Wallet {
  private _balance: Money;

  static sort(wallets: Wallet[], order: Order) {
    const sortedWallets = wallets.sort((a, b) => {
      if (order === Order.ASC) {
        return a.balance().amount - b.balance().amount;
      } else {
        return b.balance().amount - a.balance().amount;
      }
    });
    return sortedWallets;
  }

  constructor(currency: Currency) {
    this._balance = new Money(currency, 0);
  }

  credit(money: Money) {
    this._balance = this._balance.add(money);
  }

  balance(): Money {
    return this._balance;
  }
}
