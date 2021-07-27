import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Login from './Login';
import Layout from './Layout';

library.add(fab, fas)
function App(){

    return(

        <BrowserRouter>
         <Switch>
             <Route exact path="/Login" component={Login}></Route>
             <Route exact path="/Index" component={Layout}></Route>
         </Switch>
        </BrowserRouter>
    )


}

export default App;