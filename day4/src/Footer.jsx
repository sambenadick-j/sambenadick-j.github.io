import React from 'react'
import { useState,useRef } from 'react';
import { useContext } from 'react';
import MyContext from './ContextApi.jsx';
const Footer = ({}) => {
  const refer=useRef();

  function handleClick(){
    refer.current.focus();
  }
  let datafromglobale = useContext(MyContext)
  return (
    <>
      {datafromglobale}
      <input ref={refer}type="text"></input>
      <button onClick={handleClick}>submit</button>
    </>
    
  )
}

export default Footer