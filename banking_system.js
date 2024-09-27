import {BankAccount} from './bank_account.js'

const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const welcomeMsg = document.getElementById('welcome');
const balance = document.getElementById("balance");

let nama = prompt("Mohon input nama anda");
while(nama == null){
    nama = prompt("Mohon input nama anda");
}
welcomeMsg.textContent = 'Welcome ' + nama;


let account = new BankAccount(nama, 0);

const disableButtons = () => {
    depositButton.disabled = true;
    withdrawButton.disabled = true;
}

const enableButtons = () => {
    depositButton.disabled = false;
    withdrawButton.disabled = false;
}

depositButton.addEventListener('click', () => {
    let depValue = +prompt('How much do you want to deposit?');
    if(depValue <= 0){
        alert('Deposit value can not be negative or zero');
        return;
    }
    if(!Number.isInteger(depValue)){
        alert('Please input a valid number');
        return;
    }
    disableButtons();
    balance.textContent = 'Please wait';
    setTimeout(() => {
        account.deposit(depValue);
        balance.textContent = account.getSaldo();
        enableButtons();
    }, 3000);
})

withdrawButton.addEventListener('click', () => {
    let withdrawValue = +prompt('How much do you want to withdraw?');
    if(withdrawValue <= 0){
        alert('Withdrawal value can not be negative or zero');
        return;
    }
    if(!Number.isInteger(withdrawValue)){
        alert('Please input a valid number');
        return;
    }

    if(account.getSaldo() - withdrawValue < 0){
        alert('Balance not enough for withdrawal, current balance is : ' + account.getSaldo());
        return;
    }
    disableButtons();
    balance.textContent = 'Please wait';
    setTimeout(() => {
        account.withdraw(withdrawValue);
        balance.textContent = account.getSaldo();
        disableButtons();
    }, 3000);
})