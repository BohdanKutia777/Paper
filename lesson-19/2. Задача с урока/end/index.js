export const wallet = {
    transactions: [1, 2, 3],
    getMax() {
        return Math.max.apply(null, this.transactions);
    },
    getMin() {
        return Math.min.apply(null, this.transactions);
    },
};