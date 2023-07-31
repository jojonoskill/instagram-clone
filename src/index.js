import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { initializeApp } from "firebase/app";
import store from './store';
import {BrowserRouter} from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyBZFpAM5kMub8OmNaR_5hC1E2BC3QdhrJ0",
  authDomain: "instagram-clone-455af.firebaseapp.com",
  databaseURL: "https://instagram-clone-455af-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagram-clone-455af",
  storageBucket: "instagram-clone-455af.appspot.com",
  messagingSenderId: "57268371128",
  appId: "1:57268371128:web:e521345eddb5dd9d5f3e4d",
  measurementId: "G-4VZKCXP1YD"
};

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
