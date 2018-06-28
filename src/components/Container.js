import React from 'react'
import Screen from './Screen'
import Keypad from './Keypad'
import './style.css';

const Container = () => {
  return (
    <div className="container">
      <Screen data={0} />
      <Keypad />
    </div>
  )
}

export default Container
