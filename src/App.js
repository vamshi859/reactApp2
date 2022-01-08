import React from "react";
import Form from './Form'
import { Route } from "react-router-dom";
// import Show from "./Show";
import Add from "./Add";
const App = () =>
{
 
 return (
    <div>
      {/* <Form /> */}
      <Route path='/' exact component={Add} />
      {/* <Route path='/show' exact component={Show} /> */}
      <Route path='/form' exact component={Form} />
    </div>
  )
}

export default App;