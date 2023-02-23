import React from  'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessPage from '../pages/access';
import Dashboard from '../pages/dashboard';
import OrderPlaced from '../pages/orderplaced';
import AuthRoute from './auth';
import ProtectedRoute from './protected';


const RouterBook = () => {
    return(
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<AuthRoute><AccessPage/></AuthRoute> } />
        <Route path='dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute> }/>
        <Route path='orderplaced' element={<ProtectedRoute><OrderPlaced/></ProtectedRoute> }/>
        <Route/>
       </Routes>
       </BrowserRouter>
    )
}

export default RouterBook