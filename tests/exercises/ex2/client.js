const ORDER_PREFIX = 'ISA';

class ClientService {
    constructor(minimalPurchaseForDiscount = 500) {
        this.minimalPurchaseForDiscount = minimalPurchaseForDiscount;
    }

    getNextOrderNumber(client) {
        return `${ORDER_PREFIX}-#${client.orders.length + 1}`;
    }

    calculateDiscount(client) {
        const ordersValue = client.orders.reduce((acc, curr) => acc + curr, 0);

        let discount = 0;
        if (ordersValue > this.minimalPurchaseForDiscount) {
            discount += 0.1;
        }

        if (client.type === 'INTERNAL') {
            discount += 0.15;
        }

        return discount;
    }

    calculateNewOrderValue(client, orderValue) {
        return orderValue - this.calculateDiscount(client) * orderValue;
    }
}