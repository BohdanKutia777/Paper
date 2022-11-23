const wallet = {
    transactions : [12,313,1231,2312,12312311,12123,12],
    getMin () {
        return Math.min(...this.transactions);
    },
    getMax () {
        return Math.max(...this.transactions);
    }
}

console.log(wallet.getMax());
console.log(wallet.getMin());