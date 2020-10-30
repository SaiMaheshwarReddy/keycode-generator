const keyPressed = document.querySelector(".key__pressed")
const keyName = document.querySelector(".key__name")
var x = document.getElementsByTagName("title")[0];
document.querySelector('.container').classList.add('none')

window.addEventListener('keydown', (e)=> {
    document.querySelector('.header').innerHTML = ""
    document.querySelector('.container').classList.remove('none')
    x.textContent = "Keycode Generator"
    keyPressed.textContent = ""
    keyName.textContent = ""
var key = e.key
var keyCode = e.keyCode
if(key===" ") {
    keyPressed.textContent = keyCode
    keyName.textContent = "Space Event"
}else if(key==="Meta") {
    keyPressed.textContent = keyCode
    keyName.textContent = "Windows"
}else {
    keyPressed.textContent = keyCode
    keyName.textContent = key
    

x.textContent = keyCode + " " + x.textContent
}
})

var x = document.getElementsByTagName("title")[0];

x = x + keyCode