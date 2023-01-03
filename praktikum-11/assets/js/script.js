// menangkap elemen dengan menggunakan looping
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click', (element) => {
        computerChoice (element);
    })
})

function computerChoice(element){
    //menangkap pilihan user
    let pilihanUser = element.target.result;

    //menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    //membuat pilihan untuk komputer
    let choices = ['Rock', 'Paper', 'Scissors']

    //membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    if ( pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
       hasil.innerHTML = 'You Win';
    }

    if ( pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        hasil.innerHTML = 'You Win';
    }

    if ( pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        hasil.innerHTML = 'You Win';
    }

    //jika komputer yang menang
    if ( pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
        hasil.innerHTML = 'You Lose';
    }

    if ( pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        hasil.innerHTML = 'You Lose';
    }

    if ( pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        hasil.innerHTML = 'You Lose';
    }

    //jika draw atau seri
    if(pilihanUser == pilihanKomputer){
        hasil.innerHTML = 'Draw';
    }
}