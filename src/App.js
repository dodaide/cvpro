import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Form from './components/form/Form';
import Home from './components/home/Home.js';
import MakeCV from './components/makecv/MakeCV.js';
import Export from './components/export/Export';
import Final from './components/final/Final';
import logo from './logo.png';


function App() {
  return (
    <React.Fragment>
      <div className="header container-fluid">
        <div className='container navi'>
          <Link className="header--logo" to="*">
            <img className='logo' src={logo}/>
          </Link>
          <ul className="header--nav">
            <li><Link to='*'>Home</Link></li>
            <li><Link to='/taocv'>Tạo CV</Link></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/taocv' element={<MakeCV/>}/>
        <Route path='/forms' element={<Form/>}/>
        <Route path='/export' element={<Export/>}/>
        <Route path='/final' element={<Final/>}/>
      </Routes>
      <div className="footer .container-fluid">
        <div className='container'>
          <p className="footer--content">
            Powered by Trần Doãn Đô - Hoàng Hải Lan
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
