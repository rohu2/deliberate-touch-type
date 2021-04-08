import {useContext} from 'react'
import {randomStringContext} from '../context/RandomString'
import {ACTIONS} from '../context/RandomString'


const TargetChars = ({ shuffle }) => {

const [randomString, dispatch] = useContext(randomStringContext)

    return (
        <div>
<br/>
<br/>
<br/>

<span> { !!randomString.length ? '' : 'Which keys do you want to train?' }</span>
<br/>
<br/>
<input 
type="text"
onChange={(e)=>{ dispatch( { type: ACTIONS.UPDATE, payload : shuffle(e.target.value) })} }/>
            
        </div>
    )
}



export default TargetChars