import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Dashboard from '../Dashboard/Dashboard';

export function Routing() {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  )
}