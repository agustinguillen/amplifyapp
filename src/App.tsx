import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Sales from './components/Sales'
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
        {
          ({user, signOut}) => (
            <Routes>
              <Route path="/" element={<Dashboard user={user ? user : {}} signOut={signOut ? signOut : () => {}} />} />
              <Route path="/dashboard" element={<Dashboard user={user ? user : {}} signOut={signOut ? signOut : () => {}} />} />
              <Route path="/sales" element={<Sales user={user ? user : {}} signOut={signOut ? signOut : () => {}} />} />
            </Routes>
          )
        }
      </Authenticator>
    </div>
  );
}

export default App;
