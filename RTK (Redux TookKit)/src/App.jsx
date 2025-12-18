import './App.css'
// import Account from './components/Account'
import Bonus from './components/Bonus'
import { useDispatch, useSelector } from 'react-redux'
import Reward from './components/Reward'
import { switchTheme } from './Slices/accountSlice'


function App() {

  const account = useSelector(state=>state.account)
  const bonus = useSelector(state=>state.bonus)
  const dispatch = useDispatch()
 
  
  

  return (
    <div className="main" onClick={()=>dispatch(switchTheme())}>

      <h4>Current Amount: {account.dark ? 'DARK THEME' : 'Light theme'}</h4>
      <h4>Total Bonus: {bonus.points}</h4>

      {/* <Account></Account> */}
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
