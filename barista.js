// barista.ts
class Barista {
    static callOrder(name) {
        console.log('Peppermint Mocha Frappuccino for ' + name);
    }
}
let customer = {
    name: 'Todd',
};
Barista.callOrder(customer.name);
