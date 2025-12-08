import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './Slices/accountSlice.js'
import bonusReducer from './Slices/bonusSlice.js'
import {Provider} from 'react-redux'
import Reducer from './reducers/RewardRed.js'

let store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: Reducer,
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <App  />
    </Provider>
  </StrictMode>,
)
