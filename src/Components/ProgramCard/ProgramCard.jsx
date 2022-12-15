import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = ({prog}) => {
  return (
    <Link to={`/programs/${prog.id}`} key={prog.id} className="card col-md-6 col-xl-4 col-12" style={{width: '18rem' , marginTop: '20px' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">name : {prog.progName}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{prog.category}</li>
                                <li className="list-group-item">{prog.city}</li>
                                <li className="list-group-item">{prog.lenght}</li>
                            </ul>
                            <div className="card-body">
                                <a href="#program" className="card-link">{prog.fee}</a>
                                <a href="#program" className="card-link">{prog.lang}</a>
                            </div>
        </Link>
  )
}

export default ProgramCard;