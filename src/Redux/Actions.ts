import { actionTypes } from "./ActionTypes"

export const increment=(payload : number)=>{
    return(
        {
            type : actionTypes.INCREMENT,
            payload
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : actionTypes.DECREMENT
        }
    )
}

export const changeInput=(payload : string)=>{
    return(
        {
            type : actionTypes.CHANGEINPUT,
            payload
        }
    )
}