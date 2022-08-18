// select image by adding .rotateimages to img in html file
// create array of images
let rotateImages = document.querySelector('.rotateimages');
let imageArray = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg']
let i = 0; // current image index

// event listeners for previous and next buttons
document.querySelector("previous-btn").addEventListener("click", previous)
document.querySelector("next-btn").addEventListener("click", next)

// create functions for previous and next images
function previous(){
    if( i <= 0 ) i = imageArray.length;
    i--;
    return setImage();
}

function next(){
    if( i >= imageArray.length-1 ) i = -1;
    i++;
    return setImage();
}

// create function to update DOM with array of images
function setImage(){
    return rotateImages.setAttribute('src', 'assets/' + imageArray[i]);
}