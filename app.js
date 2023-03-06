const generateRandNum = () => {
  return Math.round(Math.random() * 10000);
};

const generatePin = () => {
  const pinNum = generateRandNum();
  if (pinNum.toString().length === 4) {
    return pinNum;
  } else {
    return generatePin();
  }
};

document.getElementById("generate__pin__btn").addEventListener("click", () => {
  const pin = generatePin();
  const pinDisplay = document.getElementById("pin__input");

  pinDisplay.value = pin;
});



document.getElementById("calculator").addEventListener("click", (e) => {
  const confirmInput = document.getElementById("confirm__input");

  let number = e.target.innerText;

  if (!isNaN(number)) {
    confirmInput.value += number;
  } else if (number === "c") {
    confirmInput.value = "";
  }else if(number === "<"){
    const arr = confirmInput.value.split('')
    arr.pop(0)
    confirmInput.value = arr.join('')
  }

  
});



  document.getElementById("submit__btn").addEventListener("click",()=>{
    const pinInput = document.getElementById("pin__input").value;
    const confirmInput = document.getElementById("confirm__input").value;
    const success = document.getElementById('success')
    const failed = document.getElementById('failed')

    if(parseInt(pinInput) === parseInt(confirmInput)){
      success.classList.remove('hidden')
      setTimeout(()=>{
        success.classList.add('hidden');
      }, 5000)
    }else{
      failed.classList.remove("hidden");
      setTimeout(() => {
        failed.classList.add("hidden");
      }, 5000);
    }
   
  });