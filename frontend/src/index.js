import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Bulletinboard from './bulletinboard';
import Findidpassword from './findidpassword';
import Login from './login';
import Main from './main';
import Signup from './signup';
import WritePost from './writePost';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/findidpassword" element={<Findidpassword/>} />
        <Route path="/bulletinboard" element={<Bulletinboard/>} />
        <Route path="/writePost" element={<WritePost/>} />
      </Routes>
    </Router>
  </StrictMode>
);