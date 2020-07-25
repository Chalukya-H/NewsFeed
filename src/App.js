import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NewsFeedShow from './components/newsfeed_view/newsfeedShow'

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path= '/' component = {NewsFeedShow} exact = {true} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
