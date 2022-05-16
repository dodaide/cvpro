import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../form/Form.js';
import './MakeCV.css';
import preview from './preview';
import {closePreview} from './preview'
import mau1 from './imgs/1.jpg';
import mau2 from './imgs/2.jpg';
import mau3 from './imgs/3.jpg';
import mau4 from './imgs/4.jpg';
import mau5 from './imgs/5.jpg';
import mau6 from './imgs/6.jpg';
import mau7 from './imgs/7.jpg';
import mau8 from './imgs/8.jpg';

var maucvs = [mau1, mau2, mau3, mau4, mau5, mau6, mau7, mau8];

function MakeCV(){
    return (
        <>
            <div onClick={closePreview} id='black-overlay--fulscreen'>
                <img id='black-overlay--preview'></img>
            </div>
            <div className="container cvList">
                <div className="row">
                    {maucvs.map((maucv,index) => (
                        <div key={index} className='cvContainer col-xl-3 col-md-6 col-12'> 
                            <div className='black-overlay'>
                                <Link to="/forms" className='sl--btn btn'>Chọn</Link>
                                <button onClick={preview} className='sl--btn btn'>Xem trước</button>
                            </div>
                            <img className='maucv' src={maucv}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default MakeCV;