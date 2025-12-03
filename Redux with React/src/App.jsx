import './App.css'
import Account from './components/account'
import Bonus from './components/Bonus'
import { useState } from 'react';


function App() {
    let [account,setAccount] = useState({amount: 0});
    let [bonus,setBonus] = useState({points: 0});

  return (
    <div className="main">

      <h4>Current Amount: {account.amount}</h4>
      <h4>Total Bonus: {bonus.points}</h4>

      <Account account={account} setAccount={setAccount}></Account>
      <br />
      <br />
      <br />
      <br />
      <Bonus bonus={bonus} setBonus={setBonus}></Bonus>

    </div>
    
  )
}

export default App
