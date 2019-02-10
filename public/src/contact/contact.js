var nameInput = document.getElementById("nameInput");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var sendBTN = document.getElementById("sendBTN");

var myForm= document.getElementById("myForm");

var nameValue ;
var emailValue ;
var subjectValue;
var messageValue ;

sendBTN.addEventListener('click', function(){

   if( checkValiditys()){

    nameValue = nameInput.value;
    emailValue = email.value;
    subjectValue = subject.value;
    messageValue = message.value;

    window.open('mailto:'+emailValue+'?subject='+subjectValue+'&body='+messageValue);

   }






});

function checkValiditys(){

    if(nameInput.value == "" || nameInput.value == null){

        
        alert("Enter a valid Name");
        return false;
    }if(email.value == ""){

        alert("Enter a valid Email");
        return false;
    }if(subject.value == ""){

        alert("Enter a valid Subject");
        return false;
    }if(message.value == ""){

        alert("Enter a valid  Message");
        return false;
    }
}