
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
import BlogDetails from './Components/BlogDetails/BlogDetails';
import ManageBlog from './Components/ManageBlog/ManageBlog';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CreateAdmin from './Components/CreateAdmin/CreateAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
       <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manageBlog">
              <ManageBlog></ManageBlog>
            </Route>

            <Route path="/addBlog">
            <AddBlog></AddBlog>
            </Route>
            <Route path="/createAdmin">
              <CreateAdmin></CreateAdmin>
            {/* <AddBlog></AddBlog> */}
            </Route>
            {/* <Route path="/dashboard">
           
            </Route> */}

            <Route path="/allBlog/:_id" >
              <BlogDetails></BlogDetails>
             </Route>
            <Route path="/addAmin" >
            <AddAdmin></AddAdmin>
             </Route>

             <PrivateRoute path="/dashboard" >
             <DashBoard></DashBoard>
             </PrivateRoute>
          </Switch>
        </Router>
          {/* <h1>Blog</h1>
          <Login></Login>
      <Home></Home>
      
       */}
       </UserContext.Provider>
     
    </div>
  );
}

export default App;
