var slider_img = document.querySelector('.slider-img');
var adsImages = [
    'Element/Homepage/Testi/testi1.png', 
    'Element/Homepage/Testi/testi2.png', 
    'Element/Homepage/Testi/testi3.png'
];
var i = 0;

function prev() {
    if (i <= 0) i = adsImages.length;
    i--;
    return setImg();
}

function next() {
    if (i >= adsImages.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', adsImages[i]);
}
