import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import {getCountryDetails} from '../../redux/actions/index';
import NavBar from '../navBar/NavBar';
import s from './CountryDetails.module.css'



export default function CountryDetails(){
    const {id} = useParams();
    const dispatch = useDispatch();

    const details = useSelector((state) => state.countryDetail);

    useEffect(() => {
        dispatch(getCountryDetails(id));    
    },[dispatch, id]);


    return (
        <>
        <NavBar />
       
            <div className={s.container}>
                <div className={s.card}>
                    <div className={s.imgContainer}>
                       <img src={details.flags}  alt="image_flag" />
                    </div>
                
                <div className={s.dataContainer}>
                    <h2 className={s.title}>
                       {details.name} ~ {details.id}

                    </h2>
                    <h2 className={s.subtitle}>
                        {details.continents} 
                        {details.subregion ? ' ~ ' + details.subregion : null}
                    </h2>
                    <h4>Capital: {details.capital}</h4>
                    <h4>Population: {details.population}</h4>
                    <h4>Area: {details.area} km²</h4>
                    <h4 className={s.activities}>Activities:</h4>
                    <ul>
                        {details.activities && 
                        details.activities.map((a) => (
                            <li key={a.id}>
                                <p>
                                    <strong>{a.name}</strong> ({a.season}) 
                                    ~ Duration: {' '} {a.duration} 
                                    ~ Difficulty: {a.difficulty}
                                </p>
                            </li>
                        ))}
                    </ul>     
                </div>
                </div>
                </div>
              
               
    
 </>
)}
