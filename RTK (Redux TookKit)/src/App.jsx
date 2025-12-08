import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'
import Reward from './components/Reward'


function App() {

  const account = useSelector(state=>state.account)
  const bonus = useSelector(state=>state.bonus)
 
  
  

  return (
    <div className="main">

      <h4>Current Amount: {account.amount}</h4>
      <h4>Total Bonus: {bonus.points}</h4>

      <Account></Account>
      <br />
      <br />
      <br />
      <br />
      <Bonus ></Bonus>

      <br />
      <Reward></Reward>

    </div>
    
  )
}

export default App
