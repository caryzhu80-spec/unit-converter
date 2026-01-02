const userInput = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");



convertBtn.addEventListener("click",function(){
   let  inputNumber = Number(userInput.value);
    
    if(isNaN(inputNumber) || userInput.value.trim() === "" || inputNumber < 0){
        alert("Please enter a valid positive number");
    }else{
    render(inputNumber)
    }
})

function render(num){
    let convertedFeet = num * 3.28084;  
    let convertedMeters = num / 3.28084; 
    let convertedGallons = num * 0.264172;  
    let convertedLiters = num * 3.78541;  
    let convertedPounds = num * 2.20462;  
    let convertedKilos = num * 0.453592; 

    lengthEl.innerHTML = `${num} meters = ${convertedFeet.toFixed(3)} feet   |  ${num} feet = ${convertedMeters.toFixed(3)} meters`;
    volumeEl.innerHTML = `${num} liters = ${convertedGallons.toFixed(3)} gallons  |  ${num} gallons = ${convertedLiters.toFixed(3)} liters`;
    massEl.innerHTML = `${num} kilos = ${convertedPounds.toFixed(3)} pounds   |  ${num} pounds = ${convertedKilos.toFixed(3)} kilos`
}