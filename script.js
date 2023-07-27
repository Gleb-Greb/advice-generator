let adviceNum = document.querySelector(".number")
let adviceText = document.querySelector(".text")
let btn = document.querySelector(".btn")

let generateAdvice = async () => {
   let result = await fetch('https://api.adviceslip.com/advice')
   let data = await result.json();
   adviceNum.textContent = "Advice #" + data.slip.id
   adviceText.textContent = data.slip.advice
}
btn.addEventListener("click", generateAdvice)

generateAdvice()