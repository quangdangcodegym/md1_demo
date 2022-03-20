function hTop(){
    let Img_value = document.getElementById("img");
    Img_value.style.top = parseInt(Img_value.style.top) - 5 + "px";
}
function hBottom(){
    let Img_value = document.getElementById("img");
    Img_value.style.top = parseInt(Img_value.style.top) + 5 + "px";
}
function hRight(){
    let Img_value = document.getElementById("img");
    Img_value.style.left = parseInt(Img_value.style.left) + 5 + "px";
    // 19+5+"px" = 195px
}
function hLeft(){
    let Img_value = document.getElementById("img");
    Img_value.style.left = parseInt(Img_value.style.left) - 5 + "px";
}
function Move_Key(Event){
    console.log(Event.keyCode);
    switch (Event.keyCode) {
        case 37:
            hLeft();
            break;
        case 39:
            hRight();
            break;
        case 38:
            hTop();
            break;
        case 40:
            hBottom();
            break;
    }
}
function Do_Ready(){
    window.addEventListener('keydown', Move_Key);
}