import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
import axios from "axios";
import { thunk } from "redux-thunk";



const inc = 'increment'
const dec = 'decrement'
const store = createStore(reducer,applyMiddleware(logger.default,thunk))

function reducer(state={amount: 2},action){

    switch (action.type) {
        case inc:
            return {amount: state.amount + action.payload};
        case dec:
            return {amount: state.amount - 1};
    
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


// async function fetchData(){
    
//     console.log(data);
// }
// fetchData()


setTimeout(()=>{
    store.dispatch(increment('subhan'))
},1000)
