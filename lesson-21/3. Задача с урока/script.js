class Wallet {
    _ballance = 0;
    getBalance () {
        return console.log(this._ballance);
    }
    deposit (amount) {
        return this._ballance += amount;
    }
    withdraw (amount) {
        if(this._ballance > amount) {
            return this._ballance -= amount;
        } else{
            console.log('No enough funds');
            return;
        }
    }
}


const newWallet = new Wallet();
newWallet.getBalance();
newWallet.deposit(1200);
newWallet.getBalance();
newWallet.withdraw(123);
newWallet.getBalance();
newWallet.withdraw(1233);