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


const coin = document.getElementById('coin')
const callbtn = document.getElementById('callbtn')

callbtn.addEventListener('click', () => {

 
  let coinvalue = Number(coin.innerText);
  if(coinvalue < 20){
    return
  }
  const result = coinvalue - 20;
  coin.innerText = result;


})