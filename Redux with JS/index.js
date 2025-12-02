import { createStore,applyMiddleware,combineReducers } from "redux";
import logger from 'redux-logger'
import axios from "axios";
import { thunk } from "redux-thunk";



const inc = 'amount/increment';
const dec = 'amount/decrement';
const incBonus = 'bonus/increment';
const store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
}),applyMiddleware(logger.default,thunk))

function accountReducer(state={amount: 2},action){

    switch (action.type) {
        case inc:
            return {amount: state.amount + action.payload};
        case dec:
            return {amount: state.amount - 1};
    
        default:
            return state;
    }

  
    
}

function bonusReducer(state={bonus: 0},action){
   switch(action.type){
     case incBonus:
        return {bonus: state.bonus + 2};
     case inc:
        if(action.payload > 300)
        return {bonus: state.bonus + 1};
     default:
        return state;      
 

   }
}

store.subscribe(()=>{
    // console.log(store.getState())

})

// async function increment(dispatch,useState){
//     const {data} = await axios.get('http://localhost:3000/amount/hamza')
//     dispatch({type: inc,payload: data.price})
// }

function increment(id){
    return async function (dispatch,useState) {

        const {data} = await axios.get(`http://localhost:3000/amount/${id}`)
        dispatch({type:inc,payload: data.price})
          
    }
}

function decrement(){
    return {type: dec}
}

function incrementBonus(){
    return {type: incBonus}
}


// async function fetchData(){
    
//     console.log(data);
// }
// fetchData()


// setTimeout(()=>{
//     store.dispatch(increment('mahad'))
// },1000)


// setTimeout(()=>{
//     store.dispatch(increment('subhan'))
// },1000)

setTimeout(()=>{
    store.dispatch(incrementBonus())
},1000)

