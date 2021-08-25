const subButton = document.querySelector('.submit_button')

subButton.addEventListener('click',emailValidation)

function emailValidation(event) { 
          event.preventDefault();
    var checkEmail=document.getElementById("email").value;

    if (checkEmail!="") { 

            var emailRegex = /\S+@\S+\.\S+/;

            var isEmail = emailRegex.test(document.getElementById("email").value);

            if (!isEmail) {
                document.getElementById("email").style.borderColor='red';
                document.getElementById('successText').style.display = 'none'
                document.getElementById("errorText").innerText="Please enter valid email";

            } else { 
                document.getElementById("successText").innerText="submitted";
                document.getElementById("errorText").style.display= 'none';
                document.getElementById("email").style.borderColor='green';
            }
            return isEmail;
   }else{
    document.getElementById("email").style.borderColor='red';
    document.getElementById("errorText").innerText=" Whoops!! looks like you forgot to add your email";
     
   } 
}