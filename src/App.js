import React from 'react'
import './App.css'
import TargetChars from './components/TargetChars'
import Display from './components/Display'
import AttemptChars from './components/AttemptChars'
import {RandomStringProvider} from './context/RandomString'

const App = () => {

function shuffle(str){

let arr = [...str]
let objs = []


for (let i = arr.length-1; i > 0; i--) {
   
const j = Math.floor( Math.random() * (i + 1));

[ arr[i], arr[j] ] = [  arr[j],arr[i]  ] ;

}

for (let i = 0; i < arr.length; i++) {

    objs.push( Object({id: i, char: arr[i], color:'black'}) )
    
}


console.log(objs)

return objs


}



    return (

<RandomStringProvider>
        <div className="App">
            
         
        

< Display />
< AttemptChars/>


< TargetChars shuffle={shuffle} />

        </div>

</RandomStringProvider>
    )
}


export default App