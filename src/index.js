import React from 'react'
import ReactDom from 'react-dom'
import './styles/stylessheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducer/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDom.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));