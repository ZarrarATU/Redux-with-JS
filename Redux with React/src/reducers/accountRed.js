import { inc,dec,incByAmt } from "../actions/action";

function accountReducer(state={amount: 200},action){

    switch(action.type){
        case inc:
            return {...state,amount: state.amount+2000}
        case dec:
            return {...state,amount: state.amount-1}
        case incByAmt:
            return {...state,amount: state.amount+action.payload}
        default:
            return state;
    }

}

export default accountReducer;