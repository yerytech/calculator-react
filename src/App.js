
import './App.css';
import logoyerytech from './image/mdark.png'
import Button from './components/Button';
import Screen from './components/Screen'
import BtnClear from './components/BtnClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {


  const [input, setInput] = useState(0)
  const addInput = (value) => {   
   setInput(input + value)

  }
  const result = () => {
    if(input){
      setInput(evaluate(input))
    } else {
      alert('Ingrese un valor')
    } 
  }





  return (
    <div className="App">
      <div  className='contenedor-logo-yerytech'>
        <img
          className='logo-yerytech'
          alt='logo-yerytech'
          src={logoyerytech } />    
      </div>
      <div className='calculator-container' >
             <Screen input={input} />

        <div className='fila'> 
          <Button onclick={addInput}>1</Button>
          <Button onclick={addInput}>2</Button>
          <Button onclick={addInput}>3</Button>
          <Button onclick={addInput}>+</Button>
          </div>
        <div className='fila'>
          <Button onclick={addInput}>4</Button>
          <Button onclick={addInput}>5</Button>
          <Button onclick={addInput}>6</Button>
          <Button onclick={addInput}>-</Button>
          </div>
        <div className='fila'>
          <Button onclick={addInput}>7</Button>
          <Button onclick={addInput}>8</Button>
          <Button onclick={addInput}>9</Button>
          <Button onclick={addInput}>*</Button>

          </div>
        <div className='fila'>
          <Button onclick={result}>=</Button>
          <Button onclick={addInput}>0</Button>
          <Button onclick={addInput}>.</Button>
          <Button onclick={addInput}>/</Button>
          </div>
        <div className='fila'>
          <BtnClear clearManager={() => setInput('')}>
            Clear
          </BtnClear>
          </div>

           </div>
    </div>
  );
}

export default App;
