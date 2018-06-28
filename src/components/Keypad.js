import React from 'react'
import './style.css'
import Key from './Key'

const Keypad = () => {
  return (
    <div className="keypad">
     <Key position="head" keyType="action"  keySymbol="C" value="clear" />
     <Key position="head" keyType="operator" keySymbol="±" value="+-" />
     <Key position="head" keyType="action" keySymbol="%" value="%" />
     <Key position="aside" keyType="operator" keySymbol="÷" value="/" />
     <Key keyType="number" keySymbol="7" value="7"/>
     <Key  keyType="number" keySymbol="8" value="8" />
     <Key  keyType="number" keySymbol="9" value="9" />
     <Key position="aside" keySymbol="×" value="*" />
     <Key   keyType="number" keySymbol="4" value="4"/>
     <Key   keyType="number" keySymbol="5" value="5" />
     <Key   keyType="number" keySymbol="6" value="6" />
     <Key position="aside" keyType="number" keySymbol="-" value="-" />
     <Key  keyType="number" keySymbol="1" value="1" />
     <Key  keyType="number" keySymbol="2" value="2"/>
     <Key   keyType="number" keySymbol="3" value="3"/>
     <Key position="aside"  keySymbol="+" value="+" />
     <Key position="bottomLeft"  keyType="number" keySymbol="0" value="0" />
     <Key   keyType="number" keySymbol="." value="."/>
     <Key position="aside" keyType="number" keySymbol="=" value="="/> 
    </div>
  )
}

export default Keypad
