let email = document.forms['form'] ['email'];
let firstName = document.forms['form'] ['fname'];
let lastName = document.forms['form'] ['lname'];

function validate(e) {
    
 e.preventDefault();
 
 let emailvalue = email.value;
 let fnamevalue = firstName.value;
 let lnamevalue = lastName.value;
 
    if(emailvalue=='') {
        alert('email should not be empty');
    return;
   }
     if(lnamevalue=='') {
        alert('lastname should not be empty');
    return;
   }
     if(fnamevalue=='') {
         alert('firstname should not be empty');
    return;
   }
}