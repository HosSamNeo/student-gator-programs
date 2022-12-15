import React from 'react';
import './Main.css';
import svgAlter from './svg-alter.JPG';
const Main = () => {
  return (
    <section className='main bg-light'>
        <div className="container">
        <div className="row">
        <div className="svg col-md-6 col-12 d-flex flex-end align-items-center">
                <img className='svg-alter' src={svgAlter} alt="Svg" />
            </div>

            <div className="text col-md-6 col-12 flex-start">
                <h2 className='intro-title'>More than 1000 programs in 80 Schools around the world</h2>
                <p className='intro-desc'>Filtering programs and finding the ones best suited for you has never been easier</p>
                <a href="#programs">
                    <button className='prg-btn'> View Programs  &nbsp; 
                    <svg className='angle-down' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>                
                    </button>
                </a>            
            </div>
        </div>
        </div>
    </section>
    )
}

export default Main;