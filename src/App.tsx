import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import {
  Routes,
  Route,
} from "react-router-dom"
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <Authenticator>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Authenticator>
    </div>
  );
}

export default App;
