import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import 'tw-elements';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';


function App() {
  const [searchValue , setSearchValue] = useState('')
  return (
    <div className="flex">
      <Sidebar></Sidebar>
     <div className='flex-grow'>
      <Home setSearchValue = {setSearchValue} searchValue={searchValue}></Home>
     <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/mainpage' element={<MainPage></MainPage>}></Route>
        <Route path='/dashboard' element={<Dashboard searchValue ={searchValue}></Dashboard>}></Route>
     </Routes>
     </div>
    </div>
  );
}

export default App;
