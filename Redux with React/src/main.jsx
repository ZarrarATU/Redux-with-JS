import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import accountReducer from './reducers/accountRed.js'
import bonusReducer from './reducers/bonusRed.js'
import {thunk} from 'redux-thunk'

const store = createStore(combineReducers({
  account: accountReducer,
  bonus: bonusReducer,
}),applyMiddleware(thunk))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
)
