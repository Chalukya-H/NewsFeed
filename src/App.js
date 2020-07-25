import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NewsFeedShow from './components/newsfeed_view/newsfeedShow'
import SearchOptions from './components/searchnews/searchoptions'
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path= '/' component = {SearchOptions} exact = {true} />
            <Route path= '/newsfeed/:id' component = {NewsFeedShow} exact = {true} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
