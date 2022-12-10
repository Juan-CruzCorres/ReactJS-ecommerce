import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB23tRcYAsQC_0E-eVUUi4TrRWBY70zb4c",
  authDomain: "project-games-35661.firebaseapp.com",
  projectId: "project-games-35661",
  storageBucket: "project-games-35661.appspot.com",
  messagingSenderId: "750006569881",
  appId: "1:750006569881:web:cf2b4023e873053c516108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />

);



