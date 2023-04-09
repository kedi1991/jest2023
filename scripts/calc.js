function addition(a, b){
    return a+b;
}

//when you click the button
document.getElementById("button").addEventListener("click", buttonClick);

//function for the click
function buttonClick(){
    document.getElementById('par').innerText = "You have clicked me!";
}




module.exports = addition;