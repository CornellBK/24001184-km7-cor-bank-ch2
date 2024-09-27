export class BankAccount{
    constructor(nama, saldo){
        this.nama = nama;
        this.saldo = saldo;
    }

    getSaldo = () => {
        return this.saldo;
    }

    deposit = (depValue) => {
        const balance = document.getElementById("balance");
        this.saldo += depValue;
        balance.textContent = this.saldo;
        alert("Your new balance is: " + this.saldo);
    }

    withdraw = (withdrawValue) => {
        const balance = document.getElementById("balance");
        this.saldo -= withdrawValue;
        balance.textContent = this.saldo;
        alert("Your new balance is: " + this.saldo);
    }
}