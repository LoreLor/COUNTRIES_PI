import React from 'react';
import {Link} from 'react-router-dom';
import s from './CardCountry.module.css'


export default function CardCountry({id, flags, name, continents,population}){
    return(
        <>
         <div className={s.card} key={id}> 
            <div className={s.image_container}>
                <img className={s.image} src={flags} alt='flag' />
            </div>
            <div className={s.text_container}>
                <Link  className={s.link} to={`/countries/${id}`}>{id}</Link>
                    <h1 className={s.country}> ~ {name} ~ </h1>
                    <h2 className={s.continents}>Continent: {continents}</h2>
                    <h2 className={s.population}>Population: {population}</h2>
            </div>
       </div> 
        </>
    )
}