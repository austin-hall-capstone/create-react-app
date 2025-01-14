import React from'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/login/Login';
import SignUp from './Components/SignUp/sighnup';
import Splash from './Components/splash_page/splash';
import NotePage from './Components/h_login/NotePage';
//import NoLogin from './Components/h_nologin/nologin';
import QuizGen from './Components/QuizGeneration/QuizGen';
import Navbar from './Components/Navbar/Navbar';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://vyvojvrtkryvbsmcgzrq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dm9qdnJ0a3J5dmJzbWNnenJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTczNjYsImV4cCI6MjAyMzI3MzM2Nn0.g0vq8MRsOox8wKVEq8gde9CA_2egvpfMfoqDHiWJxv4';
const supabase = createClient(supabaseUrl, supabaseKey); 




function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar/>
            <Routes>
                  <Route path='/' element={<Splash/>}/>
                  <Route path='/splash' element={<Splash/>}/>
                  <Route path='/signup' element={<SignUp/>} />
                  <Route path="/login" element = {<Login/>} />
                  <Route path="/quizgen" element = {<QuizGen/>}/>
                  <Route path="/notepage" elemenet={<NotePage/>}/>
            </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;