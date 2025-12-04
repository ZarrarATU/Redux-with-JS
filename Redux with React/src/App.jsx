import './App.css'
import Account from './components/account'
import Bonus from './components/Bonus'
import { useEffect, useState } from 'react';
import { incrementByAmt } from './actions/action';
import accountReducer from './reducers/accountRed';



function App({store}) {
    let [account,setAccount] = useState({amount: 0});
    let [bonus,setBonus] = useState({points: 0});
    
    setTimeout(()=>{
      // store.dispatch(incrementByAmt)
      console.log(store.getState());
      
        
    },[])
    
   
    

  return (
    <div className="main">

      <h4>Current Amount: {store.getState().account.amount}</h4>
      <h4>Total Bonus: {bonus.points}</h4>

      <Account store={store} account={account} setAccount={setAccount}></Account>
      <br />
      <br />
      <br />
      <br />
      <Bonus bonus={bonus} setBonus={setBonus}></Bonus>

    </div>
    
  )
}

export default App
