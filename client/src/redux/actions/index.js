import{ GET_ALL_COUNTRIES, 
        GET_COUNTRY_BY_NAME, 
        GET_COUNTRY_DETAILS, 
        ADD_ACTIVITY, 
        GET_ACTIVITY,
        FILTER_BY_CONTINENT, 
        FILTER_BY_ACTIVITY, 
        FILTER_ACT_BY_SEASON, 
        SORT_COUNTRIES
       } from './actionTypes';
import axios from 'axios';

export function getAllCountries() {
    return async function(dispatch){
        try{
            const countries = await axios.get('http://localhost:3001/countries');
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries.data
            });
        }catch(err){
            console.log(err)
        }
    }
};

export function getCountryByName(name) {
    return async function(dispatch){
        try{
            const country = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: country.data
            })
        }catch(err){
            console.log(err)
        }
    }
};

export function getCountryDetails(id) {
    return async(dispatch) =>{
        try{
            const details= await axios.get(`http://localhost:3001/countries/${id}}`)
            return dispatch({
                type: GET_COUNTRY_DETAILS,
                payload: details.data,
            })
        }catch(err){
            console.log(err)
        }   
    }
};

export function addActivity() {
    return async function (dispatch){
        try{
            const activity = await axios.post('http://localhost:3001/activities')
            return dispatch({
                type: ADD_ACTIVITY,
                payload: activity
            })
        }catch(err){
            console.log(err)
        }
    }
};

export function getActivity(){
    return async function(dispatch){
        try{
            const activity= await axios.get('http://localhost:3001/activities')
            return dispatch({
                type: GET_ACTIVITY,
                payload: activity.data
            })
        }catch(err){
            console.log(err)
        }
    }
};


export function filterByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
};

export function filterByActivity(payload){
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
};

export function filterActBySeason(payload){
    return {
        type: FILTER_ACT_BY_SEASON,
        payload
    }
};

export function sortCountries(payload){
    return {
        type: SORT_COUNTRIES,
        payload
    }
};

