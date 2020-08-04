const rotator = Array.from(document.getElementsByClassName("rotator__case"));

let removeClass = function() {
    let element = rotator.find(items => items.classList.contains('rotator__case_active'));
    element.classList.remove('rotator__case_active');
 }

 let counter = 0;

 let ads = function() {
    removeClass();
    counter++;
    if (counter > rotator.length - 1) {
        counter = 0;
    }
    rotator[counter].classList.add('rotator__case_active');
    console.log(counter);
 }

 setInterval(ads, 1000);