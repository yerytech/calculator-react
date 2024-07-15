import React from 'react';
import '../styles/BtnClear.css'
const BtnClear = (props) => {
  return (
    <div className='button-clear'
    onClick={props.clearManager}
    >
          {props.children}

    </div>
  )
}

export default BtnClear;