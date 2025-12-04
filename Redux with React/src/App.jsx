import './App.css'
import Account from './components/account'
import Bonus from './components/Bonus'
import { useEffect, useState } from 'react';
import { incrementByAmt } from './actions/action';
import accountReducer from './reducers/accountRed';
import { useSelector } from 'react-redux';



function App({store}) {

    
   const amount = useSelector(state=>state.account.amount)
   const points = useSelector(state=>state.bonus.points)
    
   
    

  return (
    <div className="main">

      <h4>Current Amount: {amount}</h4>
      <h4>Total Bonus: {points}</h4>

      <Account></Account>
      <br />
      <br />
      <br />
      <br />
      <Bonus ></Bonus>

    </div>
    
  )
}

export default App
