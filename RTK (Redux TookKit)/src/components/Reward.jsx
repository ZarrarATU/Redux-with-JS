import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/RewardRed'

function Reward() {

  const reward = useSelector(state=>state.reward)
  const dispatch = useDispatch()

    

  return (
    <div>
        <h1> Gifts: {reward.gift} </h1>
        <button onClick={e=>dispatch(increment())}>get Gift</button>
    </div>
    
  )
}

export default Reward