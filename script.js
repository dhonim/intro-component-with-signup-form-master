let form=document.getElementById('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(validateForm()){
       window.location.href = 'https://www.google.co.in/';
    }
    
    
});
function validateForm() {
  
    // Get form values
    let firstname=document.getElementById('Firstname').value
let lastname=document.getElementById('Lastname').value
let email=document.getElementById('Emailaddress').value
let password=document.getElementById('password').value

   if(firstname==null||password==null){
    alert('full the details')
    return false;
   }
   if(firstname!='Vignesh'||password!='1234'){
   alert('enter valid password')
    return false;
   }

    // If all validations pass
    return true;
}
