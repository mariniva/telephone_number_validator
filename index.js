const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const input = document.getElementById('user-input');
const regex = /^(1|1 )?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
const result = document.getElementById('results-div');

const checkValid = () =>{

   if (input.value===''){
      alert('Please provide a phone number');
      return
   }
   result.innerHTML+=regex.test(input.value)
   ?`<p class='valid'>Valid US number: ${input.value}</p>`
   :`<p class='invalid'>Invalid US number: ${input.value}</p>`;
  
}

checkBtn.addEventListener ("click",checkValid);
input.addEventListener("keydown",(e)=>{
   if (e.key==="Enter"){
      checkValid();
   }
})

clearBtn.addEventListener("click",()=>result.innerHTML='');