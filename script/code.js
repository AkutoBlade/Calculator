let btnEqual = document.querySelector('#equal');

function button(exp){
    document.getElementById('InputBox').value += exp;  
};

function equal(){
     try{
    document.getElementById('InputBox').value = eval(document.getElementById('InputBox').value);
     }catch(e){
     document.getElementById('InputBox').value='Syntax Error';
     }
    };





