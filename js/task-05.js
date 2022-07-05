const refs={
    input: document.querySelector("#name-input"),
    name: document.querySelector("#name-output")
};

refs.input.addEventListener("input",onInputChange );

const emptyString= "Anonymous";

function onInputChange(event){
   if( refs.name.textContent = event.currentTarget.value){
    return onInputChange;
   } else{
    return refs.name.textContent = emptyString;
   }
}