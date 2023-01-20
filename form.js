// validating documents
var Form = document.getElementById("Form");
console.log(Form)

function onSubmit() {

    var firstname = document.getElementById('firstname');
    
    var email = document.getElementById('email')
    
    var surname = document.getElementById("surname");
    
    var number = document.getElementById("number");
    
    var age = document.getElementById("age");

    var radio = document.querySelector('input[name="gender"]:checked');

if (firstname.value == "" || email.value === "" || surname.value === "" || number.value === "") {
     msg.classList.add('error');
     msg.innerHTML = "Please enter all fields";
//    alert('SUCCESS') 

     setTimeout(() => msg.remove(), 2000);

}else if(radio.value != null){

 msg.innerHTML = "gender:"+radio.value
msg.classList.add('success')
msg.innerHTML = "success"
alert('Are you sure you want to submit??')
setTimeout(() => Form.remove(), 500);

// return false; 
} else {
    msg.classList.add('error')
    msg.innerHTML = "Please state your gender"
}
}


const scrollingElement = (document.scrollingElement || document.body);
scrollingElement.scrollTop =  scrollingElement.scrollHeight;
