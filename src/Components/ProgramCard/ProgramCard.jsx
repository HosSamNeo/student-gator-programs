import React from 'react';




// {
//     "progName": "Bachelor in Management",
//     "lang": "English",
//     "category": "Business & Management",
//     "city": "Toulouse",
//     "level": "Bachelor",
//     "lenght": "3",
//     "fee": 10900,
//     "start_date": "September",
//     "schoolName": "TOULOUSE BUSINESS SCHOOL",
//     "id": 4143,
//     "count": 0,
//     "desc": "Founded in 1903, Toulouse Business School trains future international decision-makers who are collaborative, agile and responsible. The school’s campuses are based in dynamic locations: Toulouse, Paris, Barcelona and Casablanca. TBS has triple accreditation: EQUIS, AMBA and AACSB, ensuring the best standards of education. Aerospace MBA is the best and one of a kind program offered by the Toulouse Business School. The program Bachelor in Management tops the charts in terms of program quality. The school enjoys a good reputation among employers in France. The school has 200 partner international universities and also provides 100 Double Degree possibilities with 30 French and international business schools. TBS has 46,000 alumni across the world. 35% of the school’s professors consist of distinguished international professors. At TBS, students can choose from 30 student associations and take part in or organize events with them. Overall, Toulouse Business School is a household name in terms of reputation among French employers and it stands out from other business schools in terms of its campus location."
// },


const ProgramCard = ({prog}) => {
  return (
    <div key={prog.id} className="card col-md-6 col-xl-4 col-12" style={{width: '18rem' , marginTop: '20px' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">name : {prog.progName}</h5>
            <p className="card-text">lang : {prog.desc}</p>
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
    </div>
  )
}

export default ProgramCard