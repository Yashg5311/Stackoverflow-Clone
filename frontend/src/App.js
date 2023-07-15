import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import StackOverflow from "./components/StackOverflow";
import ViewQuestion from "./components/ViewQuestion";
import Question from './components/Add-Question/Question';
import Auth from './components/Auth'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user =useSelector(selectUser)
  const dispatch = useDispatch()

useEffect(() =>{
  auth.onAuthStateChanged((authUser) => {
     if(authUser){
         dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email,
         }) )
     }else{
      dispatch(logout());
     }
  })
}, [dispatch])

const PrivateRoute = ({ path, element }) => {
  return user ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/auth" replace />
  );
};

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route  path={user ? "/" : "/auth"} element={user ? (<StackOverflow />) : (<Auth/>)} />

        
           
              
           <Route  path='/question' element={user ? (
                <ViewQuestion />
              ) : (
                <Navigate to="/auth" replace />
              )} />
               
           <Route  path='/add-question' element={user ? (
                <Question />
              ) : (
                <Navigate to="/auth" replace />
              )} />
          

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
