import React from 'react'
import {StaticRouter,Switch,Route} from 'react-router-dom'
import NewsFeedShow from './components/newsfeed_view/newsfeedShow' 

function App() {
  return (
    <StaticRouter>
        <Switch>             
            <Route path= '/' component = {NewsFeedShow} exact = {true} />
        </Switch>
    </StaticRouter>
  )
}

export default App;
