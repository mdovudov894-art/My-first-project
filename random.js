let colors = ["black","red","blue","green","yellow","orange","purple","pink"];

function changeColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

    
 addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        changeColor();
    }
})
function clickBtn(){
      let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
setInterval(changeColor, 10);