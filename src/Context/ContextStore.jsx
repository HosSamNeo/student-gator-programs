import { createContext, useState , useEffect  } from 'react';
let ProgramsContext = createContext();







const ProgramsContextProvider = ({children}) => {
    const [language , setLanguage] = useState('None');
    const [name , setName] = useState('None');
    const [city , setCity] = useState('None');
    const [type , setType] = useState('None');
    const [level , setLevel] = useState('None');
    const [school , setSchool] = useState('None');
    const [category , setCategory] = useState('None');
    const [sort , setSort] = useState('None');
    const [availablePrograms , setAvailablePrograms] = useState([]);

    return  <ProgramsContext.Provider value={{
        language,
        setLanguage,
        name,
        setName,
        city,
        setCity,
        type,
        setType,
        level,
        setLevel,
        school,
        setSchool,
        category,
        setCategory,
        sort,
        setSort,
        availablePrograms,
        setAvailablePrograms,
      
        }}>
            {children}
        </ProgramsContext.Provider>
}


export { ProgramsContextProvider, ProgramsContext };