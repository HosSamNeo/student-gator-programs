import React from "react";
import ProgramsList from "../ProgramsList/ProgramsList";
import "./programs.css";
import options from './sa.JPG';

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <p className="popular-title">Most Popular Programs</p>
        <p className="programs-number">
            We found 1958 Programs available for you
        </p>
        <div className="row">
            <div className="col-xl-2 col-md-3 col-2 p-0 d-flex justify-content-between p-md-2">
                <div className="justify-content-between align-items-start d-none d-md-flex w-100">
                <p className="sort-by">Sort By</p>
                <button className="reset-btn btn d-md-block align-items-start">
                    <div className="d-flex justify-content-center align-items-center">
                    <p className="m-0 ">Reset</p>
                    <svg
                        className="reset-icon"
                        fill="#6f77f4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
                    </svg>
                    </div>
                </button>
                </div>
                <div className="d-flex d-md-none justify-content-start align-items-start">
                    <div className="options">
                        <img src={options} alt="Options" />
                    </div>
                </div>
            </div>

            <div className="col-xl-10 col-md-9 col-10 px-0  w-md-100 d-flex justify-content-center align-items-center ">
                <form className="search-field w-100">
                    <input type="text" placeholder="Search by program name ..." />
                    <button className="btn">
                        <svg className="arrow-forward" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </form>
            </div>

        </div>
        <div className="row pt-2 pb-5">
            <div className="col-xl-2 col-md-3 p-0 d-none d-md-block">
            <select class="form-select w-100 selection-item" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="col-xl-10 col-md-9 col-12">
                <div className="row">
                    <div className="col-xl-8 col-md-6 col-12 ps-md-0 px-0">
                    <select class="form-select w-100 selection-gray selection-item" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                    </div>
                    <div className="col-xl-4 col-6 pe-0 d-none d-md-block">
                        <select class="form-select selection-gray selection-item" aria-label="Default select example w-100">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

            <div className="row d-flex justify-content-between">
                <div className="col-xl-2 col-md-3 d-none d-md-block">
                        <div className="radio-group w-100 pt-2">
                                    <form className="d-flex flex-column align-items-start ">
                                                <p className="radio-head">Language:</p>
                                                <p className="radio-line"></p>

                                            <div className="radio">
                                                <input type="radio" id="English" name="Language" value="English" />
                                                <label className="p-2 radio-label" htmlFor="English">English</label>
                                            </div>

                                            <div className="radio">
                                                <input type="radio" id="French" name="Language" value="French" />
                                                <label className="p-2 radio-label" htmlFor="js">CSS</label>
                                            </div>

                                    </form>    
                        </div>
                        <div className="radio-group w-100 pt-2">
                                    <form className="d-flex flex-column align-items-start ">
                                                <p className="radio-head">Price Budget:</p>
                                                <p className="radio-line"></p>
                                            <div className="radio">
                                                <input type="radio" id="css" name="sorting" value="CSS" />
                                                <label className="p-2 radio-label" htmlFor="css">CSS</label>
                                            </div>
                                            <div className="radio">
                                                <input type="radio" id="js" name="sorting" value="js" />
                                                <label className="p-2 radio-label" htmlFor="js">CSS</label>
                                            </div>
                                    </form>    
                        </div>
                        <div className="radio-group w-100 pt-2">
                                    <form className="d-flex flex-column align-items-start ">
                                                <p className="radio-head">Skill Level:</p>
                                                <p className="radio-line"></p>
                                            
                                            <div className="radio">
                                                <input type="radio" id="html" name="fav_language" value="CSS" />
                                                <label className="p-2 radio-label" htmlFor="html">html</label>
                                            </div>
                                            <div className="radio">
                                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                                <label className="p-2 radio-label" htmlFor="css">CSS</label>
                                            </div>
                                            <div className="radio">
                                                <input type="radio" id="js" name="fav_language" value="js" />
                                                <label className="p-2 radio-label" htmlFor="js">CSS</label>
                                            </div>
                                            <div className="radio">
                                                <input type="radio" id="js" name="fav_language" value="js" />
                                                <label className="p-2 radio-label" htmlFor="js">CSS</label>
                                            </div>
                                            <div className="radio">
                                                <input type="radio" id="js" name="fav_language" value="js" />
                                                <label className="p-2 radio-label" htmlFor="js">CSS</label>
                                            </div>
                                    </form>    
                        </div>
                </div>
                <div className="col-xl-10 col-md-9 col-12">
                    <div className="row p-5 g-5 d-flex justify-content-around">
                                           
                                               
                                                   <ProgramsList />
                                                    


                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Programs;



