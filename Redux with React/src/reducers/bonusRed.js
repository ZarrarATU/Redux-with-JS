import { inc,dec,incByAmt } from "../actions/action";

function bonusReducer(state={points: 1},action){

    switch(action.type){
        case inc:
            return {...state,amount: state.amount+1}
        case dec:
            return {...state,amount: state.amount-1}
        case incByAmt:
            return {...state,amount: state.amount+action.payload}
        default:
            return state;
    }

}

export default bonusReducer