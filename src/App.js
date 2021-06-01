import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Imports pages
import login from './pages/login'

function App(){
  return (
    <Router>
      <Route path='/' component={login} />
    </Router>
  );
}

export default App;
