

function clock() {

    let hours = document.getElementById("hour");
    let min = document.getElementById("min")
    let secs = document.getElementById("sec")

    let h = new Date().getHours();
    hours.innerHTML = h;

    let m = new Date().getMinutes();
    min.innerHTML = m

    let s = new Date().getUTCSeconds();
    secs.innerHTML = s;

}


var interval = setInterval(clock,1000);

function dateBuilder(d) {

    let month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

}

let ham = document.querySelector('.nav-ham');
let nav = document.querySelector(".nav");
let exit = document.querySelector(".exit")


ham.addEventListener('click', () =>{

    nav.classList.toggle('hide-mobile');
    nav-ham.classList.add('hide-mobile')
    exit.classList.toggle('hide-mobile')

});
exit.addEventListener('click', () =>{

    nav.classList.toggle('hide-mobile');
    ham.classList.remove('hide-mobile');
    ham.classList.remove('hide-mobile');
    exit.classList.add('hide-mobile');

});









