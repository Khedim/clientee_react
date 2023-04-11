import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Bot } from './pages/dashboard/Bot';
import { KnowledgeBase } from './pages/dashboard/KnowledgeBase';
import { Credentials } from './pages/dashboard/Credentials';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<SignIn />} />
      <Route path='login' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='dashboard' element={<Dashboard />} >
        <Route path='bot' element={<Bot />} />
        <Route path='knowledge-bese' element={<KnowledgeBase />} />
        <Route path='credentials' element={<Credentials />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
