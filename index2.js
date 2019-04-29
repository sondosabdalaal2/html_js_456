let pElements = document.getElementsByTagName('p');
console.log(pElements);
pElements[0].innerHTML= 'hello';
pElements[1].style.fontSize='24px';
pElements[2].style.color ='red';
let pElementsclass = document.getElementsByClassName('paraghragh');
console.log(pElementsclass);
let cssElemnts = document.querySelectorAll('p.p1')
console.log(cssElemnts);