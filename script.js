//alert("welcome to my porfolio website!");
function showMessage(){
    alert("hello richard, javascript is working");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
let images =[
    "dan shan.png",
    "rich.png",
    "richard.png",
    "ricky.jpg/"
];
let current =0;
function nextslide(){
    current++;
    if (current >=images.length){
        current=0;
    }
    document.getElementById("slide").src= images
    [current];
}
function prevslide(){
    current--;
    if (current < 0){
        (current =images.length - 1);
    }
    document.getElementById("slide").src= images
    [current];
}
/*AUTO SLIDE*/
setinterval(nextslide,3000);