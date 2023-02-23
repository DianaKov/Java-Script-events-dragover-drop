const img = document.querySelector('.poligon__ball');
const poligon = document.querySelector('.poligon');
const sound = new Audio('./img/tolpa-na-stadione-ozhidanie-svist-vykrikpi-i-obshhij-privetstvennyj-hor-na-vyhod.mp3');
let guest = document.querySelector('.scoreboard__guest-points'); 
let host = document.querySelector('.scoreboard__host-points');
let countGuest = 0; 
let countHost = 0;
const hiddenImgRight = document.querySelector('.poligon__hidden-right');
const hiddenImgLeft = document.querySelector('.poligon__hidden-left');

poligon.addEventListener('dragover', function(e){
    e.preventDefault();
});

poligon.addEventListener('drop', function(e){
    this.appendChild(img);
    img.style.left = e.clientX - img.offsetWidth / 2 + 'px';
	img.style.top = e.clientY - img.offsetHeight / 2 + 'px';


    if (e.target.classList.contains('poligon__first')) {
        addPoints(hiddenImgRight, guest, 'scoreboard__guest-points');
        countGuest++; 
        guest.textContent = countGuest;
    }

    else if (e.target.classList.contains('poligon__second')) {
        addPoints(hiddenImgLeft, host, 'scoreboard__host-points');
        countHost++;
        host.textContent = countHost;
    }

    function addPoints(a, b, c){
        if (!b) {
            b = document.createElement('div');
            b.className = c;
            this.appendChild(b);
        }
        sound.play();
        addImg(a);
    }

    function addImg(a){
        a.style.visibility = 'visible';
        setTimeout(() => {
            a.style.visibility = 'hidden';
        }, 3000);
    }
});
