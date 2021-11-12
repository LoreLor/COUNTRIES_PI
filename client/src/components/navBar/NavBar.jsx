import React from 'react';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css';


export default function NavBar(){
    return(
        <>
        <nav className={s.navBar}>
            <div className={s.container}>
                    <Link to='/'>LANDING</Link>
                    <Link to='/home'>HOME</Link>
                    <Link to='/addActivity'>ADD ACTIVITIES</Link>
                    </div>
        </nav>
        </>
    )
};