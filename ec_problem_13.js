const checkout = {

    items: [],

    total: 0,

    addItem(item) {
        const price = parseFloat(item.price);

        if (typeof item.price !== 'number' || isNaN(item.price)) {

        console.log("Invalid price.");

        return;

        }

        this.items.push({ ...item, price });

        this.total += item.price;

    },

    getTotal() {

    return `Total: $${this.total.toFixed(2)}`; 
    } 
};

checkout.addItem({ name: "Coffee Maker", price: 99.95 });

checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal());
console.log(checkout.items);