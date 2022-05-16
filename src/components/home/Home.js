import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import MakeCV from '../makecv/MakeCV.js';
import img1 from './imgs/Frame17.png';
import slide1 from './imgs/Untitled-1.jpg';
import slide2 from './imgs/Untitled-2.jpg';
import slide3 from './imgs/Untitled-3.jpg';
import './Home.css';
import showSlides from './showSlides.js';
import showMap from './showMap.js';

let slides = [slide1, slide2, slide3];

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="slideshow-container">
          {slides.map((slide,index) => (
            <div key={index} className="mySlides fade">
              <img className='slide--img' src={slide} />
            </div>
          ))}
        </div>
        <div className='slide--dot'>
          {slides.map((slide,index) => (
            <span key={index} className="dot"></span>
          ))}
        </div>
        <Link to="/taocv" className='taoCV--btn btn'>Tạo CV ngay!</Link>
        <Routes>
          <Route path='/taocv' element={<MakeCV/>}/>
        </Routes>
      </div>
      <div className="contact">
        <div className='container'>
          <h2 className="contact--title">Contact</h2>
          <p className="contact--slogan">Mọi góp ý xin hãy cho chúng tôi biết</p>
          <div className="row contact--wrap">
            <div className="col-lg-6 col-sm-12">
              <p className='contact--info'>
                <i className="uil uil-map-marker"></i>
                Địa chỉ: <a>Hà Đông, Hà Nội</a>
              </p>
              <p className='contact--info'>
                <i className="uil uil-phone"></i>
                Phone: <a href="tel:+084123456789">+084123456789</a>
              </p>
              <p className='contact--info'>
                <i className="uil uil-envelope"></i>
                Email: <a href="mailto:mail@mail.com">mail@mail.com</a>
              </p>
            </div>
            <form className="col-lg-6 col-sm-12" action="">
              <div className="form">
                <input type="text" required placeholder="Name" className="contact__form" />
                <input type="email" required placeholder="Email" className="contact__form" />
              </div>
              <div className="form">
                <input type="text" required placeholder="Message" className="contact__form" />
              </div>
              <div className='send'>
                <button className='send--btn btn'>SEND</button>
              </div>
            </form>
          </div>
        </div>
        </div>
      <img onClick={showMap} className='imgMap' title="Bấm vào để xem địa chỉ trên google map" src={img1}></img>
    </React.Fragment>
  );
}
showSlides();
export default Home;