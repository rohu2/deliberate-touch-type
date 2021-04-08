import {useContext} from 'react'
import {randomStringContext} from '../context/RandomString'


const Display = () => {

const [randomString, dispatch] = useContext(randomStringContext)

    return (

        
        <div className="text-display-container"  >

        <div  className="text-display" >

           { !!randomString.length ? randomString.map( char => <span key={char.id} style={{ color: char.color }  }  > {char.char} </span>   ): ''  }
            
        </div>
        </div>
    )
}



export default Display