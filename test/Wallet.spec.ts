import { Currency, Wallet } from "../src/Wallet";
import { Money } from "../src/Money";

const INR10 = new Money(Currency.INR, 10);

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
});
