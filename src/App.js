import {lazy,Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

const Login=lazy(()=>import('./components/Login'));
const Dashboard=lazy(()=>import('./components/Dashboard'));
const AddUser=lazy(()=>('./components/AddUser'));
const EditUser=lazy(()=>('./components/EditUser'));

function App() {
  return (
    <Suspense
  fallback={
    <div className="loading">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  }
>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
    </Routes>
    </Suspense>
  );
}

export default App;
