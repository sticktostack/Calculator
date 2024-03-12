let resultBox = document.querySelector('#resultbox')
let buttons = document.querySelectorAll('button')
let allClear = document.querySelector('#allclear')


let result = ''
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        resultBox.value = result += button.value 
        allClear.addEventListener('click',()=>{
            resultBox.value = ''
            result = ''
        })
      
        console.log(button.value);
    })
})

 
