//HERE IS WHERE YOU ARE PROBLEM SOLVING
// CAN YOU USE REFS TO GET THE ACTUAL VALUE????


import {useContext, useRef, useState, useEffect} from 'react'

import {randomStringContext} from '../context/RandomString'
import {ACTIONS} from '../context/RandomString'


const AttemptChars = () => {

const [randomString, dispatch] = useContext(randomStringContext)

const [userInput, setUserInput] = useState('')


const inputRef = useRef()


function compare(value) {

const idx = userInput.length-1;
const len = userInput.length;



const latestUserChar = inputRef.current.value[len]

// const latestRandomChar = randomString[len]?.char ?? ''

const latestRandomChar = randomString[len]?.char ?? dispatch({type: ACTIONS.RESHUFFLE })


dispatch( { type: ACTIONS.COMPARE, payload: inputRef.current.value})




if(latestUserChar === latestRandomChar && latestRandomChar !== undefined){

setUserInput(value)



}

else{

setUserInput('')
dispatch( { type: ACTIONS.REPAINT })

}




}


    return (
        <div>
<br/>
<br/>
<span> { !!randomString.length ? 'Try copying the above here ↓↓↓ ' : '' }</span>
<br/>
<br/>
<input 
type="text"
value={userInput}
onChange={(e)=>{ compare(e.target.value) }}
ref={inputRef}
/>
            
        </div>
    )
}


export default AttemptChars



// what do i want to do I want to get the every key press matching with the display