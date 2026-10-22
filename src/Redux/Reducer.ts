import { actionTypes } from "./ActionTypes"

export interface IinitialState{
    count : number,
    inputText : string
}

const initialState : IinitialState ={
    count : 0,
    inputText : ''
}

interface IpayloadIncrement{
    type : actionTypes.INCREMENT,
    payload : number
}

interface IpayloadDecrement{
    type : actionTypes.DECREMENT
}

interface IpayloadChangeInput{
    type : actionTypes.CHANGEINPUT,
    payload : string
}


const Reducer=(state = initialState, action : IpayloadIncrement | IpayloadDecrement | IpayloadChangeInput)=>{
    switch (action.type) {
        
        case actionTypes.INCREMENT : return {...state, count : state.count + action.payload}
        case actionTypes.DECREMENT : return {...state, count : state.count -1}
        case actionTypes.CHANGEINPUT : return {...state, inputText : action.payload}
        default: return state
    }
}

export default Reducer