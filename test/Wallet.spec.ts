import { Order, Wallet } from "../src/Wallet";
import { Money } from "../src/Money";
import { Currency } from "../src/Currency";

const INR10 = new Money(Currency.INR, 10);
const INR30 = new Money(Currency.INR, 30);
const INR40 = new Money(Currency.INR, 40);
const INR50 = new Money(Currency.INR, 50);

describe("Behaviours of Wallet", () => {
  it("should return the balance Rs.10 when I add Rs.10 to wallet", () => {
    const wallet = new Wallet(Currency.INR);

    wallet.credit(INR10);

    const balance = wallet.balance();
    expect(balance).toEqual(INR10);
  });

  it("should return the balance Rs.30 when I add Rs.10 and then add Rs.20 to wallet", () => {
    const wallet = new Wallet(Currency.INR);
    wallet.credit(INR10);

    wallet.credit(new Money(Currency.INR, 20));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.INR, 30));
  });

  it("should return the balance $3 when I add $1 and then add $2 to wallet", () => {
    const wallet = new Wallet(Currency.USD);
    wallet.credit(new Money(Currency.USD, 1));

    wallet.credit(new Money(Currency.USD, 2));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.USD, 3));
  });

  it("should return the balance Rs.3 when I add Rs.1 and then add $1 to wallet", () => {
    const wallet = new Wallet(Currency.INR);
    wallet.credit(new Money(Currency.INR, 1));

    wallet.credit(new Money(Currency.USD, 1));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.INR, 3));
  });

  it("should return the balance Rs.5 when I add Rs.3 and then add $1 to wallet", () => {
    const wallet = new Wallet(Currency.INR);
    wallet.credit(new Money(Currency.INR, 3));

    wallet.credit(new Money(Currency.USD, 1));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.INR, 5));
  });

  it("should return the balance $2 when I add $1 and then add Rs.2 to wallet", () => {
    const wallet = new Wallet(Currency.USD);
    wallet.credit(new Money(Currency.USD, 1));

    wallet.credit(new Money(Currency.INR, 2));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.USD, 2));
  });

  it("should return the balance $3 when I add $1 and then add Rs.4 to wallet", () => {
    const wallet = new Wallet(Currency.USD);
    wallet.credit(new Money(Currency.USD, 1));

    wallet.credit(new Money(Currency.INR, 4));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.USD, 3));
  });

  it("should return the balance EUR 2 when I add Eur 2 to the wallet", () => {
    const wallet = new Wallet(Currency.EUR);
    wallet.credit(new Money(Currency.EUR, 2));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.EUR, 2));
  });

  it("should return the balance EUR 2 when I add Eur 1 and $2 to the wallet", () => {
    const wallet = new Wallet(Currency.EUR);
    wallet.credit(new Money(Currency.EUR, 1));

    wallet.credit(new Money(Currency.USD, 2));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.EUR, 2));
  });

  it("should return the balance EUR 2 when I add EUR 1 and Rs 4 to the wallet", () => {
    const wallet = new Wallet(Currency.EUR);
    wallet.credit(new Money(Currency.EUR, 1));
    wallet.credit(new Money(Currency.INR, 4));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.EUR, 2));
  });

  it("should return the balance PKR2 when I add PKR1 and PKR 1 to the wallet", () => {
    const wallet = new Wallet(Currency.PKR);
    wallet.credit(new Money(Currency.PKR, 1));
    wallet.credit(new Money(Currency.PKR, 1));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.PKR, 2));
  });
  it("should return the balance Rs.4 when I add PKR 4 and Rs. 2 to the wallet", () => {
    const wallet = new Wallet(Currency.INR);
    wallet.credit(new Money(Currency.INR, 2));
    wallet.credit(new Money(Currency.PKR, 4));

    const balance = wallet.balance();
    expect(balance).toEqual(new Money(Currency.INR, 4));
  });
  it("Should return the wallet in ascending order on the basis of balance", () => {
    const wallet1 = new Wallet(Currency.INR);
    const wallet2 = new Wallet(Currency.INR);
    const wallet3 = new Wallet(Currency.INR);
    const wallet4 = new Wallet(Currency.INR);

    wallet1.credit(INR30);
    wallet3.credit(INR40);
    wallet2.credit(INR50);
    wallet4.credit(INR10);

    const wallets = [wallet1, wallet2, wallet4, wallet3];

    const sortedWallets = Wallet.sort(wallets, Order.ASC);
    expect(sortedWallets).toEqual([wallet4, wallet1, wallet3, wallet2]);
  });
  it("Should return the wallet in descending order on the basis of balance", () => {
    const wallet1 = new Wallet(Currency.INR);
    const wallet2 = new Wallet(Currency.INR);
    const wallet3 = new Wallet(Currency.INR);
    const wallet4 = new Wallet(Currency.INR);

    wallet1.credit(INR30);
    wallet3.credit(INR40);
    wallet2.credit(INR50);
    wallet4.credit(INR10);

    const wallets = [wallet1, wallet2, wallet4, wallet3];

    const sortedWallets = Wallet.sort(wallets, Order.DESC);
    expect(sortedWallets).toEqual([wallet2, wallet3, wallet1, wallet4]);
  });
  // it("Should return the wallet in ascending order on the basis of balance",()=>{})
});
