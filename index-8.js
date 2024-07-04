const textareaEl = document.getElementById("textarea");
const totalCounterEl =document.getElementById("total-counter");
const remainCounterEl =document.getElementById("remain-counter");


textareaEl.addEventListener("keyup",()=>{
    // console.log("key is pressed")

    updateCounter();
})
updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainCounterEl.innerText =textareaEl.getAttribute("maxLength") - textareaEl.value.length ;
}