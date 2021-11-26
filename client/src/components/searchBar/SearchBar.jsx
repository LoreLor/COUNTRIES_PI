import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getCountryByName} from '../../redux/actions/index';
import s from './SearchBar.module.css';


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(name){
            dispatch(getCountryByName(name))
        }else{
            alert('Name not Found')
        }
        setName('')
       
    }

    return(
        <>
        <div className={s.container}>
            <input
                className={s.input}
                type='text'
                value={name}
                onChange={(e) => handleChange(e)}
                placeholder='Country´s Name...'
            />
            <button
                className={s.btn}
                type='submit'
                onClick={(e) => handleSubmit(e)}>
                Search
            </button>      
        </div>
        </>
    )
}