import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import LoginForm from './Components/Login';
import Home from './Components/Home';
import NewList from './Components/NewList';
import RegisterForm from './Components/Register';

function App() {
  const [isLoggedIn] = useState(true);

  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/newlist" element={<NewList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
