
import './App.css';
import Home from './Components/Home/Home';
import AddBlog from './Components/AddBlog/AddBlog';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
       <Router>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            

          </Switch>
        </Router>
          {/* <h1>Blog</h1>
          <Login></Login>
      <Home></Home>
      <AddAdmin></AddAdmin>
      <AddBlog></AddBlog> */}
       </UserContext.Provider>
     
    </div>
  );
}

export default App;
