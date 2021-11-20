import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import {getCountryDetails} from '../../redux/actions/index';
import NavBar from '../navBar/NavBar';
import s from './CountryDetails.module.css'



export default function CountryDetails(){
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getCountryDetails(id));    
    },[dispatch,id]);
    
    const details = useSelector((state) => state.countryDetail);
    
    return (
        <>
        <NavBar />
        {
         details ?(
       
            <div className={s.container}>
                <div key={details.id}></div>
                <div className={s.card}>
                    <div className={s.imgContainer}>
                       <img src={details.flags} className={s.flags} alt="image_flag" />
                    </div>
                
                <div className={s.dataContainer}>
                    <h2 className={s.title}>
                       {details.name} ~ {details.id}
                    </h2>
                    <h4 >Continent: {details.continents} </h4>
                    <h4> Subregion: {details.subregion ? ' ~ ' + details.subregion : '---'}</h4>
                   
                    <h4>Capital:  {details.capital}</h4>
                    <h4>Population:  {details.population}</h4>
                    <h4>Area:  {details.area} km²</h4>
                    <h4 className={s.activities}>Activities:  </h4>
                
                        {details.activities && 
                        details.activities.map((a) => (
                            <p key={a.id}>
                            <li>Name: {a.name}</li>
                            <li>Season: {a.season} </li>
                            <li>Duration:  {' '} {a.duration} </li>
                            <li>Difficulty: {a.difficulty} </li>
                            </p>
                        ))}
                   
                </div>
                </div>
                </div>    ):(<span>Country Not Found</span>)
}
    
 </>
)}
