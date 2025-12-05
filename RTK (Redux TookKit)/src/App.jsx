import './App.css'
import Account from './components/account'
import Bonus from './components/Bonus'


function App() {

  return (
    <div className="main">

      <h4>Current Amount: {}</h4>
      <h4>Total Bonus: {}</h4>

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
