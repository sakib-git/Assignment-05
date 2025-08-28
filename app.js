// Heart section
const heartCount = document.getElementById('heartCount')
const heart = document.getElementsByClassName('heart')
let heartNumber = 0;
for(let hrt of heart){
  hrt.addEventListener('click', () => {
  heartNumber++;
  heartCount.innerText = heartNumber;
  // hrt.classList.add('text-red-600')
})
}



// copy section
const copybtn = document.getElementsByClassName('copybtn');

    let copyCount = 0;
for (const btn of copybtn) {
  btn.addEventListener('click', () => {
    
    const numbers = btn.parentNode.parentNode.children[2].children[0].innerText;
    const copyCounts = document.getElementById('copyCount')
    copyCount++;
    copyCounts.innerText = copyCount

    // console.log(numbers)

    alert(`📋 নম্বর কপি হয়েছে: ${numbers}`);
    
   navigator.clipboard.writeText(numbers)
  });
 
}




//coin
const coin = document.getElementById('coin')
const callbtn = document.getElementsByClassName('callbtn')
const historyContainer = document.getElementById('history-container')

for(const call of callbtn){
  call.addEventListener('click', () => {
 
      const coinvalue = Number(coin.innerText);

      if(coinvalue < 20){
       return alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
      }
    const countCoin = coinvalue - 20;
    coin.innerText = countCoin
    
   const title2 = call.parentNode.parentNode.children[1].children[1].innerText;
     const numbers = call.parentNode.parentNode.children[2].children[0].innerText;
   alert(`📞 Calling ${title2} ${numbers}`)

   const title = call.parentNode.parentNode.children[1].children[0].innerText;
   console.log(title)

   const time = new Date().toLocaleTimeString()
   const newCart = document.createElement('div')
   newCart.innerHTML = `
            
              <div class="flex justify-between bg-[#fafafa] p-4 rounded-md mt-4 items-center">
              <div>
                <h4 class="font-semibold text-[#111111]">${title}</h4>
              <p class="text-[#666666]">${numbers}</p>
              </div>
              <p>${time}</p>
             </div>
   
   `
   historyContainer.prepend(newCart)



  })
}

   const clearbtn = document.querySelector('.clearbtn')
clearbtn.addEventListener('click', () => {
  historyContainer.innerHTML = '';
})