import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import Signup from './Signup';
import AllBooks from './AllBooks';
import Login from './Login';
import LandiingPage from './LandiingPgae';
import { Router } from 'react-router-dom';
import BooksDetails from './BooksDetails';
import Favoorites from './Favoorites';
import ReadinBooks from './ReadinBooks';

function AllRoutes() {
  return (
    <div>

<Routes>
    <Route path = "/" element = {<LandiingPage/>}></Route>
    <Route path = "Signup" element = {<Signup/>}></Route>
    <Route path = "AllBooks" element = {<AllBooks/>}></Route>
    <Route path = "Login" element = {<Login/>}></Route>
    <Route path = "BooksDetails/:id" element = {<BooksDetails/>}></Route>
    <Route path = "Favoorites" element = {<Favoorites/>}></Route>
    <Route path = "ReadinBooks" element = {<ReadinBooks/>}></Route>
</Routes>

    </div>
  )
}

export default AllRoutes