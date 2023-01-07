const convert = document.getElementById('convert')
let inputted = document.getElementById('enteredValue')
let inputValue = document.getElementsByClassName('input-value')

const feet = document.getElementById('feet')
const meter = document.getElementById('meters')
const liters = document.getElementById('liters')
const gallons = document.getElementById('gallons')
const kilos = document.getElementById('kilos')
const pounds = document.getElementById('pounds')

convert.addEventListener('click',function(){
    if(inputted.value===""){
        return
    }
    for(let i=0;i<inputValue.length;i++){
        inputValue[i].innerHTML=inputted.value;
    }

    MetersToFeet(inputted)
    FeetToMeters(inputted)
    litersToGallons(inputted)
    gallonstoLiters(inputted)
    kilosToPounds(inputted)
    poundsToKilos(inputted)
    
})


function MetersToFeet(value){
let newNum= value.value*3.281
newNum= newNum.toFixed(3)
feet.innerHTML=newNum

}

function FeetToMeters(value){
    const newNum = value.value/3.281
    meter.innerHTML=newNum.toFixed(3)
}

function litersToGallons(value){
    const newNum = value.value*0.264
    gallons.innerHTML=newNum.toFixed(3)
}
function gallonstoLiters(value){
    const newNum = value.value/0.264
    liters.innerHTML=newNum.toFixed(3)
}

function kilosToPounds(value){
    const newNum= value.value*2.204
    kilos.innerHTML=newNum.toFixed(3)
}

function poundsToKilos(value){
    const newNum = value.value/2.204
    pounds.innerHTML=newNum.toFixed(3)
}