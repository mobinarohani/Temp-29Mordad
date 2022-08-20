let btnconvert=document.querySelector('.convert')
let btnreset=document.querySelector('.reset')
let btnchange=document.querySelector('.change')
let title=document.querySelector('.title')
let inputTemp=document.querySelector('.temperature')
let result=document.querySelector('.result')

let titleCovert=true
btnchange.addEventListener('click',function(){
    if(titleCovert){
        title.innerHTML='Convert  °F  to  °C'
        inputTemp.placeholder="°F"
        titleCovert=false
        document.title='Convert  °F  to  °C'
    }else{
        title.innerHTML='Convert  °C  to  °F'
        inputTemp.placeholder="°C"
        titleCovert=true
        document.title='Convert  °C  to  °F'
    }
})

btnreset.addEventListener('click',function(){
    inputTemp.value=''
    result.innerHTML=''
})

btnconvert.addEventListener('click',function(){
    result.innerHTML=''
    if(inputTemp.value!=""){
        result.style.color='#7dc4b8'
        if(!isNaN(inputTemp.value)){
            if(titleCovert){
                result.innerHTML=(inputTemp.value * 9/5) + 32
            }else{
                result.innerHTML=(inputTemp.value - 32) * 5/9 
            }

        }else{
            result.style.color='red'
            result.innerHTML='Please Enter Number !'
        }
    }else{
        result.style.color='red'
        result.innerHTML='Please Enter value !'
    }
})