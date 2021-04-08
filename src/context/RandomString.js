import {useReducer} from 'react'
import {createContext} from 'react'

const randomStringContext = createContext()


const ACTIONS = {

    UPDATE : 'update',
    COMPARE : 'compare',
    RESHUFFLE : 'reshuffle',
    REPAINT: 'repaint',

}



const RandomStringProvider = (props) => {


function reducer(state, action){

switch (action.type) {
    case ACTIONS.UPDATE:
      
        return action.payload



        case ACTIONS.COMPARE:
      const len = action.payload.length-1;
      const aim = state[len] 
      console.log(aim)
    if(!!aim){ aim.char === action.payload[len] ? aim.color='green' : aim.color='red' }
            return [...state]


            case ACTIONS.RESHUFFLE:
            
    
         state.sort(( a, b ) =>  0.5 - Math.random()  )
         state.map( obj => obj.color = 'black')

            return  [...state]
                

            case ACTIONS.REPAINT:
            
             state.map( obj => obj.color === 'red'  ?  obj.color = 'red' : obj.color = 'black'  )
    
                return  [...state]





    default:
        break;
}



}


const [randomString, dispatch] = useReducer(reducer, [])



    return (
<div>

<randomStringContext.Provider value={[randomString, dispatch]} >


{props.children}


</randomStringContext.Provider>


        </div>
    )
}



export {ACTIONS}
export {randomStringContext}
export {RandomStringProvider}
