import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './store/reducers'


const store = createStore(rootReducer);

render (<Provider store={store}><App/></Provider>, document.getElementById('root'))