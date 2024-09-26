let saldo = 0;

function showSaldo(){
    const saldoText = document.getElementById("saldo");
    saldoText.textContent = saldo;
}

function tambahSaldo() {
    const saldoText = document.getElementById("saldo");
    let tambah = +prompt('Berapa saldo yang ingin ditambah?');
    if(tambah < 0){
        alert('Penambahan saldo tidak boleh minus');
        return;
    }
    if(!isInteger(tambah)){
        alert('Mohon input angka');
        return;
    }
    saldo += tambah;
    saldoText.textContent = saldo;
    alert("Saldo baru : " + saldo);
}

function kurangiSaldo() {
    const saldoText = document.getElementById("saldo");
    let kurang = +prompt('Berapa saldo yang ingin dikurangi?');
    if(kurang < 0){
        alert('Pengurangan saldo tidak boleh minus');
        return;
    }
    if(!isInteger(kurang)){
        alert('Mohon input angka');
        return;
    }
    saldo -= kurang;
    saldoText.textContent = saldo;
    alert("Saldo baru : " + saldo);
}

window.onload = showSaldo;