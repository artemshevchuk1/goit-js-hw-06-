const decrementeBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const changeValue = document.querySelector("#value");

let newValue=0;

function clickBtn(){
    changeValue.textContent=newValue  
};

incrementBtn.addEventListener("click",()=>{
    newValue+=1;
    clickBtn();
});

decrementeBtn.addEventListener("click",()=>{
    newValue-=1;
    clickBtn();
  });
