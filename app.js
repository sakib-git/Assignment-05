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
    
 
  });
}
