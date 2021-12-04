
import{ GET_ALL_COUNTRIES, 
        GET_COUNTRY_BY_NAME, 
        GET_COUNTRY_DETAILS, 
        FILTER_BY_CONTINENT, 
        FILTER_BY_ACTIVITY, 
        FILTER_ACT_BY_SEASON, 
        SORT_COUNTRIES,
        GET_ACTIVITY,
        ADD_ACTIVITY,
     
    } from '../actions/actionTypes';

const initialState = {
    allCountries: [], //estado permanente
    filters: [],       //se va a modificar con cada filtro q aplique
    allActivities: [],
    countryDetail: []
}

 function rootReducer(state = initialState, action){   //action contiene {type, payload}
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                filters: action.payload
            };
        
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                filters: action.payload
            };

        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                allCountries: action.payload,
                countryDetail: action.payload
            };

        case ADD_ACTIVITY:
            return {
                ...state,

            };   
  
        case GET_ACTIVITY:
            return {
                ...state,
                allActivities: action.payload
            };   

        case FILTER_BY_CONTINENT:
            const filteredContinent= action.payload === 'All'
            ? state.allCountries
            : state.allCountries.filter((c) => c.continents === action.payload)
            return {
                ...state,
                filters: filteredContinent
            };

        case FILTER_BY_ACTIVITY:
            const filteredActivity = action.payload === 'All'
            ? state.allCountries
            : state.allCountries.filter((c) => c.activities && c.activities.filter((a)=>
            a.name === action.payload).length)
            return {
                ...state,
                filters: filteredActivity
            };

        case FILTER_ACT_BY_SEASON:
            const filteredActBySeason = action.payload === 'All'
            ? state.allCountries
            : state.allCountries.filter((c) => c.activities && c.activities.filter((a)=>
            a.season === action.payload).length)
            return {
                ...state,
                filters: filteredActBySeason
            }
            
        case SORT_COUNTRIES:
           let sorts;
            if(action.payload === 'All') sorts=  state.allCountries;
            if(action.payload === 'AZ'){  //alpha
                 sorts = state.filters.sort((a,b) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                })
            }
            if(action.payload === 'ZA'){
               sorts = state.filters.sort((a,b) => {
                    if(a.name < b.name) return 1;
                    if(a.name > b.name) return -1;
                    return 0;
                })
            }
            if(action.payload === 'ASC'){  //num
                 sorts = state.filters.sort((a,b) => {
                    return   a.population - b.population;
                })      
            }
            if(action.payload === 'DESC'){
                sorts = state.filters.sort((a,b) => {
                  return  b.population - a.population;
                })      
            }
            if(action.payload ==='Small'){
                sorts= state.filters.sort((a,b)=>{
                    return a.area -b.area;
                })
            }
            if(action.payload ==='Big'){
                sorts= state.filters.sort((a,b)=>{
                    return b.area - a.area;
                })
            }
            
            return {
                ...state,
                filters: sorts
            };

        default:
            return state;
    }
};

export default rootReducer


