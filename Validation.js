function PhoneValidation (){
let PhoneValidation=/ 0\d{10} /; //maxLength = 11
x.test(PhoneValidation);
//--------------------------------x is the dom value of the phone input text-------------------------//
if(x.test(PhoneValidation)===false)
    return false;
else 
return true;
}

function EmailValidation (){
    let EmailValidation=/\w+@(gmail|hotmail|yahoo).com /i; 
    let value=document.getElementById("text").value;
    if(value.test(EmailValidation)===false)
        return false;
    else if(value===""){
alert("the email field is empty");
    }
    else 
    return true;
}
    function PasswordValidation (){

let PasswordValidation=/ \w{8,}/;
let value=document.getElementById("pass").value;
if(value.test(PasswordValidation)===false)
            return false;
        else if(value===""){
            alert("the password field is empty");
        }
        else 
        return true;

    }
    