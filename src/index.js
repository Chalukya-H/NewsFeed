import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()
store.subscribe( () =>{
  store.getState()
})
 

const ele = (
  <Provider store = {store}> 
      <App/>
  </Provider>
)
ReactDOM.render(  ele,  document.getElementById('root') );
  