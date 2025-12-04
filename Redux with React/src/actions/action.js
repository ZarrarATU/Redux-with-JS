import axios from 'axios'

export const inc = 'account/inc'
export const dec = 'account/dec'
export const incByAmt = 'account/incByAmt'

export function increment(){
    return {type: inc}
}
export function decrement(){
    return {type: dec}
}
export function incrementByAmt(dispatch,getState){
    const {data} = axios.get('http://localhost:3000/amount')

   dispatch({type: inc,payload: data})
}
