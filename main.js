const startbutton = document.querySelector(".start__btn");
const openbutton = document.querySelector(".modal__btn");
const closebutton = document.querySelector(".close__btn");
const sharebutton = document.querySelector(".share__btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator(){
      const fieldValue = document.querySelector("#field__value");
      let timevalue = document.querySelector("#feild__time--value");
      let timevalue_int = Number(timeValue.value);

      const fieldResult = document.querySelector(".feild__result")
      const timeResult = document.querySelector(".time__result");

      if(fieldValue.value == ""){
         alert('Nothing inputs');
         fieldValue.focus();
         return false;
      } else if(timevalue.value == ""){
         alert('Nothing inputs');
         timevalue.focus();
         return false;
      } else if(timevalue_int > 24) {
         alert('Wrong value. Put number below 24');
         return false;
      }

      result.style.display = 'none';
      loading.style.display = 'flex';

      setTimeout(function(){
         loading.style.display = 'none'
         result.style.display = 'flex';
         fieldResult.innerText = fieldValue.value;
         timeResult.innerText = parseInt((10000/timevalue_int),10);
      }, 1800);
}

function openModal(){
      modal.style.display = 'flex';
}

function closeModal(){
      modal.style.display = 'none';
}

window.onclick = function (event) {
      if(event.target == modal) {
         closeModal();
      }
}

function copyUrl(){
      const url = window.location.href;

      navigator.clipboard.writeText(url).then(() => {
         alert("Copied URL")
      });
}

sharebutton.addEventListener('click',copyUrl);
openbutton.addEventListener('click',openModal);
closebutton.addEventListener('click',closeModal);
startbutton.addEventListener('click',calculator);