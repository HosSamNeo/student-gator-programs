import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
import "./Programs.css";
import Loading from '../Loading/Loading';
import Pagination from "../Pagination/Pagination";
import ProgramCard from "../ProgramCard/ProgramCard";
import Searchbar from "../Searchbar/Searchbar";
import options from "./sa.JPG";
import RadioForm from "../RadioForm/RadioForm";
import { useDispatch, useSelector } from "react-redux";
import { reset , setCity , setSchool , setCategory } from "../../Redux/parametersSlice";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
const Programs = () => {
  const [availablePrograms , setAvailablePrograms] = useState([]);
  const [isLoading , setIsLoading] = useState(false);

  const dispatch = useDispatch();
  console.log(availablePrograms);
  const state = useSelector(state => state.parameters);

  const ProgramsApi = async (state) => {
    setIsLoading(true);
    await axios.post(`https://admin-mfyg726r7q-uc.a.run.app/filter2/1?name=${state.name}&city=${state.city}&Language=${state.lang}&type=${state.type}&level=${state.level}&sort=${state.sort}&school=${state.school}&category=${state.category}`)
    .then(res => setAvailablePrograms(res.data));
    setIsLoading(false);
  } 

  useEffect(() => {
    ProgramsApi(state);
  },[]);

  useEffect(() => {
    ProgramsApi(state);
  },[state]);


  const uniqueCities = [
    "Toulouse",
    "Barcelona",
    "Paris",
    "Montpellier",
    "Clermont",
    "Lille",
    "Le Havre",
    "Caen",
    "Dublin",
    "Rouen",
    "Dijon",
    "Oxford",
    "Marseille",
    "Bordeaux",
    "Lausane",
    "Nice",
    "Nantes",
    "Raleigh",
    "Sophia-Antipolis",
    "Suzhou",
    "All campus",
    "Belo Horizonte",
    "Cape Town",
    "Rennes",
    "Nancy",
    "Berlin",
    "Reims",
    "Strasbourg",
    "La Rochelle",
    "Tours",
    "Orléans",
    "Niort",
    "Angers",
    "Aix-en-Provence",
    "Lyon",
    "Brest",
    "Châteauroux",
    "Lisbon",
    "Hamburg",
    "UE Innovation Hub",
    "Potsdam",
    "Iserlohn",
    "Bad Honnef",
    "Beijing",
    "London",
];
  const uniqueCategories = [
    "Business & Management",
    "Engineering & Technology",
    "Computer Science & IT",
    "Marketing & communication",
    "Arts, Design & Architecture",
];
  const uniqueSchool = [
    "TOULOUSE BUSINESS SCHOOL",
    "Montpellier BS",
    "ESC CLERMONT",
    "IESEG",
    "EM NORMANDIE",
    "KEDGE BS",
    "IPAG",
    "AUDENCIA",
    "SKEMA",
    "RENNES BUSINESS SCHOOL",
    "ICN",
    "NEOMA",
    "EM STRASBOURG",
    "EXCELIA",
    "PARIS SCHOOL OF BUSINESS",
    "ISEP",
    "ESAIP",
    "EPITA",
    "CYTech",
    "IMT Atlantique",
    "ECAM Lyon",
    "JUNIA (HEI, ISA, ISEN)",
    "Nova SBE",
    "UE Germany",
    "IUBH",
    "ISC",
    "Sup De Pub",
    "ESP Ecole supérieur de Publicité",
    "ICD",
    "ESCE",
    "Sup de Creation",
]


  const [currentPage , setCurrentPage] = useState(1);
  const [pageSize , setPageSize] = useState(6);
  const indexOfLastPost = currentPage * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentPrograms = availablePrograms.slice(indexOfFirstPost , indexOfLastPost);
  const howManyPages = Math.ceil(availablePrograms.length/pageSize);





















  return (
    <div>
      <Main />
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
                  <div onClick={() => dispatch(reset())} className="d-flex justify-content-center align-items-center">
                    <p className="m-0">Reset</p>
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
              <Searchbar />
            </div>
          </div>
          <div className="row pt-2 pb-5">
            <div className="col-xl-2 col-md-3 p-0 d-none d-md-block">
              <select onChange={(e) => dispatch(setCity(e.target.value.trim()))} className="form-select selection-gray selection-item" aria-label="Default select example w-100">
                <option selected value='All Cities'>All Cities</option>
                {uniqueCities.map(option => <option key={nanoid()} value={option}>{option}</option>)}
              </select>

            </div>
            <div className="col-xl-10 col-md-9 col-12">
              <div className="row">
                <div className="col-xl-8 col-md-6 col-12 ps-md-0 px-0">
                  <select onChange={(e) => dispatch(setCategory(e.target.value.trim()))}  className="form-select selection-gray selection-item" aria-label="Default select example w-100">
                    <option selected value='All Categories'>All Categories</option>
                    {uniqueCategories.map(option => <option key={nanoid()} value={option}>{option}</option>)}
                  </select>
                </div>
                <div className="col-xl-4 col-6 pe-0 d-none d-md-block">
                  <select onChange={(e) => dispatch(setSchool(e.target.value.trim()))} className="form-select selection-gray selection-item" aria-label="Default select example w-100">
                    <option id="school" selected value='All Categories'>All Schools</option>
                      {uniqueSchool.map(option => <option key={nanoid()} value={option}>{option}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            <div className="col-xl-2 col-md-3 d-none d-md-block">
              <div className="radio-group w-100 pt-2">
                <RadioForm />
              </div>
              <div className="radio-group w-100 pt-2">
                <RadioForm />
              </div>
              <div className="radio-group w-100 pt-2">
                <RadioForm />
              </div>
            </div>
            <div className="col-xl-10 col-md-9 col-12">
              <div className="row p-5 g-5 d-flex justify-content-around">

              {
                isLoading ? 
                (<Loading />) 
                : (
                        <>
                        {currentPrograms.map((prog) => (
                            <ProgramCard prog={prog} />
                        ))}
                            <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
                        </>
                )
            }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
