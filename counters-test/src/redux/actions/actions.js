import {ADD, ADD2, ADD_NUMBER, SUB} from "./actionTypes";

export function add() {
    return{
        type: ADD
    }
}

export function sub() {
    return{
        type: SUB
    }
}

export function add_number(number) {
    return{
        type: ADD_NUMBER,
        payload: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(add_number(number))
        }, 4000)
    }
}

export function add2(number) {
    return{
        type: ADD2,
        payload: number
    }
}