import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import newsReducer from '../reducer/newsreducer'

const configureStore = () =>{
    const store  = createStore( combineReducers({
        newslist: newsReducer
    }) ,applyMiddleware(thunk) )

    return store
}

 
export default configureStore