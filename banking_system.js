import {BankAccount} from './bank_account.js'

const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const welcomeMsg = document.getElementById('welcome');

let nama = prompt("Mohon input nama anda");
while(nama == null){
    nama = prompt("Mohon input nama anda");
}
welcomeMsg.textContent = 'Welcome ' + nama;


let account = new BankAccount(nama, 0);

depositButton.addEventListener('click', () => {
    account.deposit();
})

withdrawButton.addEventListener('click', () => {
    account.withdraw();
})