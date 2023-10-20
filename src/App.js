import React from 'react';
import './App.css';
import 'bootswatch/dist/simplex/bootstrap.css';

import NavBar from './Screens/Components/NavBar';
import AppRoutes from './Screens/Components/AppRoutes';

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';
import SessionProvider from './Screens/main/SessionProvider';

function App() {
  return (
    
    <div >

      <SessionProvider>
      
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>

      </SessionProvider>

    </div>
  
  );
}

export default App;