import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { DataStore, Predicates } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);


export default function App() {

  return (
    <Authenticator>
    {({ signOut, user }) => (
      <div className="App">
        <p>
          Hey {user.username}, welcome to my channel, with auth!
        </p>
  
        <button onClick={signOut}>Sign out</button>
      </div>
    )}
  </Authenticator>
  );
}