import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../views/Login';
import DashboardIndex from '../views/Dashboard';
import PrivateRoute from './PrivateRoute';
import LayOutIndex from '../views/Layout';
import MessageIndex from '../views/MessageBox';

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<DashboardIndex />} />
      <Route path="/chat">
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute redirectPath={'/chat/login'} secretkey={"chatToken"} />}>
          <Route path="home" element={<LayOutIndex />} >
            <Route path="message" element={<MessageIndex />} />
          </Route>
        </Route>
      </Route>
      {/* music */}
      <Route path="/music">
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute redirectPath={'/music/login'} secretkey={"musicToken"} />}>
          <Route path="dashboard" element={<DashboardIndex />} />
        </Route>
      </Route>
      <Route path="*" element={<><h1>Not found Page</h1></>} />
    </Routes>
  )
}
