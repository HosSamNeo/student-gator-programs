import axios from "axios";



export const fetchFromApi = async (name,city,language,type,level,sort,school,category) => {

    axios.post(`https://admin-mfyg726r7q-uc.a.run.app/filter2/1?name=${name}&city=${city}&Language=${language}&type=${type}&level=${level}&sort=${sort}&school=${school}&category=${category}`)
    .then(data => {
        console.log(data);
    })
   

    
}