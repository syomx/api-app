import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

import {createStore} from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import {Provider} from 'react-redux'
import {rootReducer} from './store/reducers'

const store = createStore(rootReducer, devToolsEnhancer());

render (<Provider store={store}><App/></Provider>, document.getElementById('root'))