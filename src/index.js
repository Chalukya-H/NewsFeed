import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore' 

const store = configureStore()
store.subscribe( () =>{
  store.getState()
})
 
 
ReactDOM.hydrate( 
   <Provider store = {store}> 
        <App/>
      </Provider>
,  document.getElementById('root') );
  