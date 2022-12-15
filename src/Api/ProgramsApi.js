import axios from 'axios';
import { useSelector } from 'react-redux';



export const ProgramsApi = async (name = 'None' , city = 'None'  , lang = 'None'  , type = 'None'  , level = 'None'  , sort = 'None'  , school = 'None'  , category = 'None' ) => {
    const {state} = useSelector(state => state);
    console.log(state.name);
    await axios.post(`https://admin-mfyg726r7q-uc.a.run.app/filter2/1?name=${name}&city=${city}&Language=${lang}&type=${type}&level=${level}&sort=${sort}&school=${school}&category=${category}`)
    .then(res => console.log(res.data));
} 