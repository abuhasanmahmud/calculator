
const screen=document.getElementById('calculator-screen');
const buttons=document.querySelectorAll('button');

for(item of buttons){
    item.addEventListener('click',function(event){
        buttonText=event.target.innerText;
        // console.log(buttonText);
       
        if(buttonText == 'c'){
            screen.value='';
        }
        else if(buttonText== '='){
            screen.value=eval(screen.value);
            
        }
        else{
            screen.value+=buttonText;
        }
    })
}