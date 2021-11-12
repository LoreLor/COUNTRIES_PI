import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllCountries, addActivity} from '../../redux/actions';

import s from './AddActivity.module.css';


export default function AddActivity(){
    const dispatch = useDispatch(); 
   
    const countries = useSelector(state => state.allCountries)

    const[activity, setActivity] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:[]  
    })

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])


    function handleChange(e){
        setActivity({
            ...activity,
            [e.target.name] : e.target.value,
        })
    }

    function handleSelect(e){
        setActivity({
            ...activity,
            countries: [...activity.countries, e.target.value],
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/activities', activity)
        setActivity({
            name:'',
            difficulty:'',
            duration:'',
            season:'',
            countries:[]
        })
       dispatch(addActivity())
        alert('~ Activity has been Created ~')
    }

    return (
        <>
        <div className={s.container}>
            <div className={s.card}>
              

                <form onSubmit={handleSubmit}>

                    <h2 className={s.title}>Add Your Activity</h2><hr></hr>

                    <div className={s.formSection}>
                        <label className={s.label} htmlFor='name'>Activity Name:   </label>
                        <input
                            name='name'
                            type='text'
                            value={activity.name}
                            placeholder='New Activity Name...'
                            className={s.input}
                            onChange={handleChange}>
                        </input><br></br>
                    </div>

                    <div className={s.formSection}>
                        <label className={s.label} htmlFor='difficulty'>Activity Difficulty: </label>
                        <select id='difficulty'
                                name='difficulty'
                                type='text'
                                value={activity.difficulty}
                                required='required' 
                                className={s.input}
                                onChange={handleChange}>
                             <option value=''>Choose your Difficulty</option> 
                             <option value='1'>1</option>
                             <option value='2'>2</option>
                             <option value='3'>3</option>
                             <option value='4'>4</option>
                             <option value='5'>5</option>
                        </select> <br></br>
                    </div>

                    <div className={s.formSection}>
                        <label className={s.label} htmlFor='name'>Activity Duration: </label>
                        <input
                            id='duration'
                            name='duration'
                            type='text'
                            value={activity.duration} 
                            placeholder='hs-days...'
                            required='required' 
                            className={s.input}
                            onChange={handleChange}>
                        </input><br></br>
                    </div>

                    <div className={s.formSection}>
                        <label className={s.label} htmlFor='season'>Activity Season: </label>
                        <select id='season'
                                name='season'
                                type='text'
                                value={activity.season}
                                required='required' 
                                className={s.input}
                                onChange={handleChange}>
                             <option value=''>Choose your Season</option> 
                             <option value='Autumn'>Autumn</option>
                             <option value='Spring'>Spring</option>
                             <option value='Summer'>Summer</option>
                             <option value='Winter'>Winter</option>
                        </select> <br></br>
                    </div>

                    <div className={s.formSection}>
                        <label className={s.label} htmlFor='countries'>Countries: </label>
                        <select 
                                name='countries'
                                type='text'
                                value={activity.countries}
                                
                                className={s.input}
                                onChange={handleSelect}>
                             <option value=''>Choose your Countries</option> 
                             {countries.map((c) => (
                                 <option value={c.id}>{c.name}</option>
                                 ))}
                        </ select> <br></br>
                    </div>
                    <ul>
                        <li>{activity.countries.map((c) => `${c} ~ `)}</li>
                    </ul>

                    <Link to='/home'>
                        <button className={s.btnBack}>Back</button>
                    </Link>
                    <button type='submit' className={s.add}>Add Activity</button>
                </form>
            </div>
        </div>
        </>
    )
}