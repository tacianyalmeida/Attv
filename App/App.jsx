import data from '../../data/data.json'
import Button from './Button/Button'
import Reaction from './Reaction/Reaction'
import Memory from './Memory/Memory'
import Verbal from './Verbal/Verbal'
import Visual from './Visual/Visual'
const App = () =>{
    console.log(data)

    return(
        <>
        
        <Button texto={"Continue"}></Button>
      
        <Reaction></Reaction>
      </>
    )
}
export default App;