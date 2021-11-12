import React from 'react';
import {Link} from 'react-router-dom';
import s from './CardCountry.module.css'


export default function CardCountry({id, flags, name, continents}){
    return(
        <>
         <div className={s.card} key={id}> 
            <span className={s.image_container}>
                <img className={s.image} src={flags} alt='flag' />
            </span>
            <div className={s.text_container}>
                <Link  className={s.link} to={`/countries/${id}`}>{id}</Link>
                    <h1 className={s.country}> {name} ~ </h1>
                    <h2 className={s.continents}> {continents}</h2>
            </div>
       </div> 
        </>
    )
}