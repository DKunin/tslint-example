// barista.ts

class Barista {
  public static callOrder(name: string) {
    console.log('Peppermint Mocha Frappuccino for ' + name);
  }
}

const customer = {
  name: 'Todd',
};

Barman.callOrder(customer.name);
