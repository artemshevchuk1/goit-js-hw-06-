const form = document.querySelector(".login-form");

form.addEventListener("submit",onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
if(mail !== "" && password  !=="") {
    const formData={
        mail,
        password
    };
    console.log(formData);
}
    else {
     alert("Заповніть всі поля");
   }
   form.reset();
}
