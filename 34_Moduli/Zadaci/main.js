import { generateImage } from './general.js';
let src1 = generateImage('01.JPG'); 
let body = document.body;
let image1 = document.createElement('img');
body.appendChild(image1);
image1.setAttribute('src', src1);
image1.alt = 'slika';


// import { message } from './message.js'

// const h1 = document.createElement('h1');
// h1.textContent = message

// document.body.appendChild(h1)