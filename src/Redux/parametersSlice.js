import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        name :'None',
        city : 'None', 
        lang : 'None', 
        type : 'None', 
        level : 'None', 
        sort : 'None', 
        school : 'None', 
        category : 'None'
    }
    



const parametersSlice = createSlice({
    name:'parameters',
    initialState,
    reducers:{
        reset : (state) => {
            state.name = 'None';
            state.city = 'None';
            state.lang = 'None';
            state.type = 'None';
            state.level = 'None';
            state.sort = 'None';
            state.school = 'None';
            state.category = 'None';
        },
        setName : (state,action) => {
            state.name = action.payload; 
        },
        setCity : (state,action) => {
            state.city = action.payload; 
        },
        setLang : (state,action) => {
            state.lang = action.payload; 
        },
        setType: (state,action) => {
            state.type = action.payload; 
        },
        setLevel : (state,action) => {
            state.level = action.payload; 
        },
        setSort : (state,action) => {
            state.sort = action.payload; 
        },
        setSchool : (state,action) => {
            state.school = action.payload; 
        },
        setCategory : (state,action) => {
            state.category = action.payload; 
        },
    }
});

export const {
    reset , 
    setName , 
    setCity , 
    setLang,
    setType,
    setLevel,
    setSort,
    setSchool,
    setCategory,
} = parametersSlice.actions;

export default parametersSlice.reducer;