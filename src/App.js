import React from 'react';
import './App.css';
import 'bootswatch/dist/simplex/bootstrap.css';

import NavBar from './Screens/Components/NavBar';
import AppRoutes from './Screens/Components/AppRoutes';

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

function App() {
  return (
    
    <div >

      
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>
      

    </div>
  
  );
}

export default App;