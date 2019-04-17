import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import devToolsEnhancer from 'remote-redux-devtools';
import {Provider} from 'react-redux'
import {rootReducer} from './store/reducers'

const store = createStore(rootReducer,applyMiddleware(thunk));

render (<Provider store={store}><App/></Provider>, document.getElementById('root'))