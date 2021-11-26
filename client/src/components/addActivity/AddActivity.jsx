//import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllCountries, addActivity} from '../../redux/actions';
import s from './AddActivity.module.css';


    export function validate(activity){
        let errors= {};

        if(!activity.name ){
            errors.name = 'You need input a Name';
        }else if( activity.name.length < 3 || /[0-9 -.+]/.test(activity.name)){
            errors.name='Name is invalid';
        }
        if(!activity.difficulty){
            errors.difficulty = 'You need select a Difficulty';
        }
        if(!activity.duration){
            errors.duration = 'You need input a Duration';
        }else if(!/[0-9]/.test(activity.duration)){
            errors.duration='You need a valide input'
        }
        if(!activity.season){
            errors.season = 'You need select a Season';
        }
        if(activity.countries.length === 0){
            errors.countries = 'You need select Countries';
        }
        return errors;
    }


    export default function AddActivity(){
        const dispatch = useDispatch(); 
        const countries = useSelector(state => state.allCountries)
        const[activity, setActivity] = useState({
            name:'',
            difficulty: '',
            duration:'',
            season:'',
            countries:[]
        })
        
        const [errors, setErrors] = useState({})

        useEffect(() => {
            dispatch(getAllCountries()) 
        }, [dispatch])

    
        function handleSubmit(e){
            e.preventDefault();
        if(!errors.activity){
            dispatch(addActivity(activity))
            // axios.post('http://localhost:3001/activities', activity)
            setActivity({
                name:'',
                difficulty:'',
                duration:'',
                season:'',
                countries:[]
            })
            alert('~ Activity has been Created ~')
        }
            alert('Check your Inputs')
        }
    

        function handleChange(e){
            setActivity({
                ...activity,
                [e.target.name] : e.target.value,
            })
            setErrors(validate({
                ...activity,
                [e.target.name] : e.target.value,
            }))
        }

        function handleSelect(e){
            setActivity({
                ...activity,
                countries: [...activity.countries, e.target.value],
            })
            setErrors(validate({
                ...activity,
                countries: [...activity.countries, e.target.value],
            }))
        }

        function clearCountry(e){
            e.preventDefault()
            setActivity({
                ...activity,
                countries:[]
            })
        }

        return (
            <>
            <div className={s.container}>
                <div className={s.card}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={s.title}>Add Your Activity</h2><hr></hr>

                        <div className={s.formSection}>
                            <label className={s.label} htmlFor='name'>Activity Name:</label>
                            <input id='name'
                                    name='name'
                                    type='text'
                                    value={activity.name}
                                    placeholder='New Activity Name...'
                                    onChange={handleChange}
                                    required ='required'
                                    className={errors.name && "danger"}      
                            ></input>
                            {errors.name && (<p className={s.danger}>{errors.name}</p>)}
                            <br></br>
                        </div>

                        <div className={s.formSection}>
                            <label className={s.label} htmlFor='difficulty'>Activity Difficulty:</label>
                            <select key={activity.difficulty}
                                    id='difficulty'
                                    name='difficulty'
                                    type='text'
                                    value={activity.difficulty}
                                    required='required' 
                                    className={errors.difficulty && "danger"}
                                    onChange={handleChange}>
                                <option value=''>Choose your Difficulty</option> 
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                            {errors.difficulty && (<p className={s.danger}>{errors.difficulty}</p>)}
                            <br></br>
                        </div>

                        <div className={s.formSection}>
                            <label className={s.label} htmlFor='name'>Activity Duration:</label>
                            <input name='duration'
                                    type='text'
                                    value={activity.duration} 
                                    placeholder='hours'
                                    required='required' 
                                    className={errors.duration && "danger"}
                                    onChange={handleChange}
                            ></input>
                            {errors.duration && (<p className={s.danger}>{errors.duration}</p>)}
                            <br></br>
                        </div>

                        <div className={s.formSection}>
                            <label className={s.label} htmlFor='season'>Activity Season:</label>
                            <select key={activity.season}
                                    name='season'
                                    type='text'
                                    value={activity.season}
                                    required='required' 
                                    className={errors.season && "danger"}
                                    onChange={handleChange}>
                                <option value=''>Choose your Season</option> 
                                <option value='Autumn'>Autumn</option>
                                <option value='Spring'>Spring</option>
                                <option value='Summer'>Summer</option>
                                <option value='Winter'>Winter</option>
                            </select> 
                            {errors.season && (<p className={s.danger}>{errors.season}</p>)}
                            <br></br>
                        </div>

                        <div className={s.formSection}>
                            <label className={s.label} htmlFor='countries'>Countries: </label>
                            <select key={activity.countries}
                                    name='countries'
                                    type='text'
                                    value={activity.countries}
                                    className={errors.countries && "danger"}
                                    onChange={handleSelect}>
                                <option value=''>Choose your Countries</option> 
                                {countries.map((c) => (
                                    <option 
                                    key={c.id}
                                    value={c.id}>{c.name}
                                    </option>
                                    ))}
                            </ select> 
                            <br></br>
                            {errors.countries && (<p className={s.danger}>{errors.countries}</p>)}
                            <button onClick={clearCountry}>Delete Countries</button>
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
