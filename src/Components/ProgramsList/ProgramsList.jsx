import { useState ,  useEffect  } from "react";
import axios from 'axios';
import Loading from '../Loading';
import ProgramCard from "../ProgramCard/ProgramCard";
import Pagination from "../Pagination";




const ProgramsList = () => {
    const [isLoading , setIsLoading] = useState(false);
    const [availablePrograms , setAvailablePrograms] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [pageSize , setPageSize] = useState(6);
    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = availablePrograms.slice(indexOfFirstPost , indexOfLastPost);
    const howManyPages = Math.ceil(availablePrograms.length/pageSize)

    

    const getPrograms = async () => {
        setIsLoading(true);
        console.log(isLoading);

        const response = await axios.post(`https://admin-mfyg726r7q-uc.a.run.app/filter2/1?name=None&city=None&Language=None&type=None&level=None&sort=None&school=None&category=None`)
        await setAvailablePrograms(response.data)
        console.log(availablePrograms);
        setIsLoading(false);
        console.log(isLoading);

    }
    
    useEffect(() => {
        getPrograms();

    } ,[])


    return(
        <>
            {
                isLoading ? 
                (<Loading />) 
                : (
                        <>
                        {currentPosts.map((prog) => (
                            <ProgramCard prog={prog}  key={prog.id}/>
                        ))}
                          <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
                        </>
                )
            }
        </>
    )
    
}

export default ProgramsList;




