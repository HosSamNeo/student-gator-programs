import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../../Redux/parametersSlice';

const Searchbar = () => {
    const [search,setSearch] = useState();
    const dispatch = useDispatch('');
    const handleSubmit= (e) =>{
        e.preventDefault();
        dispatch(setName(search));
        setSearch('');
    }

    return (
    <form onSubmit={handleSubmit} className="search-field w-100">
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by program name ..." />
        <button className="btn">
            <svg className="arrow-forward" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
        </button>
    </form>
  )
}

export default Searchbar