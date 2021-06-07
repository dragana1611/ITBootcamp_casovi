/*export*/ function generateImage(src){
let image = document.createElement('img');
image.src = src;
image.alt = "the image could not be loaded";
return image;
}

export default generateImage;
// export let message = 'ES6 Modules';