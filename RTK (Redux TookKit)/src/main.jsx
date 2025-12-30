import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './Slices/accountSlice.js'
import bonusReducer from './Slices/bonusSlice.js'
import {Provider} from 'react-redux'
import Reducer from './reducers/RewardRed.js'
import { NameReducer } from './reducers/NameRed.js'
import { dataSlice } from './AsyncThunk/fetchNews.js'

let store = configureStore({
  reducer: {
    account: ThemeReducer,
    bonus: bonusReducer,
    reward: Reducer,
    name: NameReducer,
    news: dataSlice.reducer,
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <App  />
    </Provider>
  </StrictMode>,
)
