import { useDispatch, useSelector } from 'react-redux';
import Home from './Components/Home';
import { IinitialState } from './Redux/Reducer';
import { changeInput, decrement, increment } from './Redux/Actions';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';

function App() {
  const name = "Sarra"
  const age : number = 22
  const count = useSelector((state : IinitialState) => state.count)
  const inputText = useSelector((state : IinitialState)=> state.inputText)
  const dispatch = useDispatch()
 
  return (
    <div>
      <h1>Checkpoint TS REACT</h1>
      <h2>Counter Redux</h2>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <br/>
      <input type='text' onChange={(e)=> dispatch(changeInput(e.target.value))}/>
      <h2>{inputText}</h2>
      <Home name={name} age={age}/>
      <Greeting name={name}/>
      <Counter name={name}/>
      
    </div>
  );
}

export default App;
