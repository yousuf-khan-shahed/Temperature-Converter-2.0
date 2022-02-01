const tempInput = document.querySelector("#inpBox")
const fahrenToCelBnt = document.querySelector(".btn1")
const celToFahrenBtn = document.querySelector(".btn2")
const clear = document.querySelector(".clearBtn")
const showResult = document.querySelector("#result")

function fahrenToCel() {
    const tempInp = tempInput.value
    let cel = (tempInp - 32) * (5/9)
    let celResult = cel + " Degree Celcius"
    showResult.textContent = celResult
}
function celToFahren() {
    const tempInp = tempInput.value
    let fahren = (tempInp * (9/5) + 32) 
    let fahrenResult = fahren + " Degree Fahrenheit"
    showResult.textContent = fahrenResult 
}
function clr() {
    tempInput.value = ""
    showResult.textContent = "Result Will Show Here "
}
function event_handler_on_fahrenToCel_btn(){
    if(tempInput.value === ""){
        alert("Please provide valid input.")
    }else{
        fahrenToCel()
    }
}
function event_handler_on_celToFahren_btn(){
    if(tempInput.value === ""){
        alert("Please provide valid input.")
    }else{
        celToFahren()
    }
}

fahrenToCelBnt.addEventListener('click',event_handler_on_fahrenToCel_btn)
celToFahrenBtn.addEventListener('click',event_handler_on_celToFahren_btn)
clear.addEventListener('click',clr)