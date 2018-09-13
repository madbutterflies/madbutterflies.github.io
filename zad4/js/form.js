//object with regular expressions
var regexPatterns = {
    name: /^[A-ZĆŁÓŚŹŻ][a-ząćęłóśźż]{1,30}$/,
    surname: /^[A-ZĄĆĘŁÓŚŹŻ][a-ząćęłóśźż]{1,30}(-[A-ZĄĆĘŁÓŚŹŻ][a-ząćęłóśźż]{1,30})?$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
//getting form items
var btnSend = document.getElementById("sub-button");
var inputs = document.querySelectorAll("input");
var agree = document.getElementById("agree");
//setting event listeners
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("change",validate);
    inputs[i].addEventListener("blur",validate);
}

agree.addEventListener("change", validate);
//validation functions
function validateNonTextInputs(element){
    var result = true;
    if(!agree.checked){
        if(agree === element) agree.parentNode.style ="color: #ff0000";
        result = false;
    }
    else agree.parentNode.style = "";
    return result;
}
function validate(){
    var isValid = true;
    for(var i = 0; i < inputs.length; i++){
        console.log(regexPatterns[inputs[i].id]);
        if(!regexPatterns[inputs[i].id].test(inputs[i].value) && inputs[i].type.toLowerCase() === "text") {
            isValid = false;
            if(inputs[i] === this) this.style = "border: 2px #ff0000 solid";
        }
        else inputs[i].style ="";
    }
    var nonTextValid = validateNonTextInputs(this);
    if(isValid && nonTextValid){
        btnSend.disabled = false;
    }
    else btnSend.disabled = true;
}
