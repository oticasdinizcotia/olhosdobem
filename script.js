let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    wave1.style.backgroundPositionX = 50 + value * 2 + 'px';
    wave2.style.backgroundPositionX = 40 + value * -2 +  'px';
    wave3.style.backgroundPositionX = 30 + value * 1 +  'px';
    wave4.style.backgroundPositionX = 20 + value * -1 +  'px';
});