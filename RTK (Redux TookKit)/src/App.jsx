import { useDispatch, useSelector } from 'react-redux'
import './App.css'
// import Account from './components/Account'
// import Bonus from './components/Bonus'
// import { useDispatch, useSelector } from 'react-redux'
// import Name from './components/Name'
// import Reward from './components/Reward'
// import { switchTheme } from './Slices/accountSlice'
import { fetchData } from './AsyncThunk/fetchNews'
import { useEffect } from 'react'

function App() {

  // const account = useSelector(state=>state.account)
  // const name = useSelector(state=>state.name.name)
  // const bonus = useSelector(state=>state.bonus)
  // const dispatch = useDispatch()

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.news)


  function handleClick() {
    dispatch(fetchData())
    // console.log(data);
    
  }


  useEffect(()=>{
     console.log(data);
     
  },[data])


  return (
    // <div className="main" onClick={()=>dispatch(switchTheme())}>

    //   <h4>Current Amount: {account.dark ? 'DARK THEME' : 'Light theme'}</h4>
    //   <h4>Total Bonus: {bonus.points}</h4>

    //   NAME: {name}

    //   {/* <Account></Account> */}
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <Bonus ></Bonus>

    //   <br />
    //   <Reward></Reward>
    //   <Name></Name>

    // </div>

    <div className="AsyncThunk">
      <button onClick={handleClick} className="button">GET NEWS</button>

      <div>
  {loading && <div>LOADING...</div>}

  {error && <div>REJECTED: {error}</div>}

  {!loading && !error && Array.isArray(data) &&
    data.map(n => (
      <div key={n.id}>
        {n.title}
      </div>
    ))
  }
</div>


    </div>

  )
}

export default App
