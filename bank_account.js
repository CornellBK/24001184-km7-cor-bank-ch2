export class BankAccount{
    constructor(nama, saldo){
        this.nama = nama;
        this.saldo = saldo;
    }

    deposit = () => {
        const balance = document.getElementById("balance");
        let depValue = +prompt('How much do you want to deposit?');
        if(depValue <= 0){
            alert('Deposit value can not be negative or zero');
            return;
        }
        if(!Number.isInteger(depValue)){
            alert('Please input a valid number');
            return;
        }
        this.saldo += depValue;
        balance.textContent = this.saldo;
        alert("Your new balance is: " + this.saldo);
    }

    withdraw = () => {
        const balance = document.getElementById("balance");
        let withdrawValue = +prompt('How much do you want to withdraw?');
        if(withdrawValue <= 0){
            alert('Withdrawal value can not be negative or zero');
            return;
        }
        if(!Number.isInteger(withdrawValue)){
            alert('Please input a valid number');
            return;
        }

        if(this.saldo - withdrawValue < 0){
            alert('Balance not enough for withdrawal, current balance is : ' + this.saldo);
            return;
        }

        this.saldo -= withdrawValue;
        balance.textContent = this.saldo;
        alert("Your new balance is: " + this.saldo);
    }
}