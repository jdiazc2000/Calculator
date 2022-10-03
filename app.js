
//Inputs for Op1,Op2,Operation and result
const Value1Box = document.getElementById("Val1");
const Value2Box = document.getElementById("Val2");
const operationbox = document.getElementById("Type");
const textspace = document.getElementById("result");

//Divs for Input1 numbers buttons and Input2 numbers buttons
const NumbersVal1Buttons = document.querySelector(".buttons1")
const NumbersVal2Buttons = document.querySelector(".buttons2")

//Operations Buttons
const btnCalcu = document.getElementById("btnCalcular");
const PlusBtn = document.getElementById('+value');
const MinusBtn = document.getElementById('-value');
const MultiBtn = document.getElementById('*value');
const DivideBtn = document.getElementById('/value');
const dotBtn1 = document.getElementById('.value1')
const dotBtn2 = document.getElementById('.value2')
const btnCleanInput = document.getElementById("clearinput")
const btnResetAll = document.getElementById("ResetAllData")

//Values and operator texts
const Val1Text = document.getElementById('val1_text')
const OperatorText = document.getElementById('operator_text')
const Val2Text = document.getElementById('val2_text')

//Boolean who is created to difference if DEL button will clean the last character on input1 or input2 
let Numbers1buttons = true

//Function to hide Val1 buttons and display Val2 buttons
const NumbersToVal1ButtonstHide = () => {
    NumbersVal1Buttons.style.display="none";
    NumbersVal2Buttons.style.display="grid";
    Numbers1buttons = false
}

//Function to hide Val2 buttons and display Val1 buttons
const NumbersToVal2ButtonsHide = () => {
    NumbersVal1Buttons.style.display="grid";
    NumbersVal2Buttons.style.display="none";
    Numbers1buttons = true
}

//Type of operations - who adds text inside operation input and adds the text into result text - Functions
PlusBtn.addEventListener('click', () =>{
      operationbox.value  = "+"
      textspace.innerText += operationbox.value
      NumbersToVal1ButtonstHide()
});
MinusBtn.addEventListener('click', () =>{
    operationbox.value  = "-"
    textspace.innerText += operationbox.value
    NumbersToVal1ButtonstHide()
});
MultiBtn.addEventListener('click', () =>{
    operationbox.value  = "*"
    textspace.innerText += operationbox.value
    NumbersToVal1ButtonstHide()
});
DivideBtn.addEventListener('click', () =>{
    operationbox.value  = "/"
    textspace.innerText += operationbox.value
    NumbersToVal1ButtonstHide()
});

//Functions for button to add dots on Op1 or Op2 inputs
dotBtn1.addEventListener('click', () => {
    Value1Box.value += "."
    textspace.innerText += "."
})
dotBtn2.addEventListener('click', () => {
    Value2Box.value += "."
    textspace.innerText += "."
})

const CalcularFnct = () => {
  let op1 = Value1Box.value
  let op2 = Value2Box.value
  let operation = operationbox.value
  let resultado;

  //Valicación si el op1 y op2 son números enteros o contienen decimal
    if(op1.includes('.')){
    op1 = parseFloat(Value1Box.value);
    console.log('op1 convertidos a Float')
  }else{
    if(op1 != ''){
        op1 = parseInt(Value1Box.value);
        console.log('op1 convertidos a Int')
      }else{
        alert('Campo Valor 1 no tiene valor o este no es valido')
      }
  }
    
    if(op2.includes('.')){
    op2 = parseFloat(Value2Box.value);
    console.log('op2 convertidos a Float')
  }else{
    if(op2 != ''){
        op2 = parseInt(Value2Box.value);
        console.log('op2 convertidos a Int')
      }else{
        alert('Campo Valor 2 no tiene valor o este no es valido')
      }
}

  if(operation === "+" || operation === "-" || operation === "*" || operation === "/" && typeof(operation) === 'string') {
    console.log(operation)
    if(typeof(op1) === 'number' && typeof(op2) === 'number' || typeof(op1) === 'float' && typeof(op2) === 'float'){
        console.log(op1,op2)
       switch (operation) {
            case "+":
              resultado = op1 + op2;
              console.log(resultado)
              break;
            case "-":
               resultado = op1 - op2;
              console.log(resultado)
              break;
           case "*":
              resultado = op1 * op2;
              console.log(resultado)
             break;
            case "/":
              resultado = op1 / op2;
              console.log(resultado)
              break;
          }
          if(resultado <= 0){
           resultado = 0;
       }
    
          Value1Box.value  = resultado
          Value2Box.value  = ''
          operationbox.value = ''

          textspace.innerText = resultado;

          NumbersToVal2ButtonsHide()
          Numbers1buttons = true
    }else{
        alert('Añada valores en ambos campos')
    }
  } else {
    alert("Error en el calculo, por favor revisar los campos ingresados.");
  }
};

btnCleanInput.addEventListener('click', () => {
    if(Numbers1buttons){
        let value1slice = Value1Box.value.slice(0,-1)
        Value1Box.value = value1slice
        textspace.innerText = Value1Box.value
        console.log('Ultimo digito borrado Valor 1')
    }else{
        let value2slice = Value2Box.value.slice(0,-1)
        Value2Box.value = value2slice
        console.log('Ultimo digito borrado Valor 2')
    }
})

btnResetAll.addEventListener('click', () =>{
    textspace.innerText = ''
    Value2Box.value = ''
    operationbox.value = ''
    Value1Box.value = ''
})

