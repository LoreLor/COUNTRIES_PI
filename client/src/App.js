import './App.css';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPAge/LandingPage';
import Home from './components/home/Home';
import AddActivity from './components/addActivity/AddActivity';
import CountryDetails from './components/countryDetails/CountryDetails'
import { getActivity, getAllCountries} from './redux/actions/index';


//al montarse la app ya estan listos los paises

function App() {
  const dispatch = useDispatch();
   useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getActivity()) 
    }, [dispatch])

  
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route  exact path='/' element={<LandingPage />} />
          <Route  exact path='/home' element={<Home />} />
          <Route  exact path='/countries/:id' element={<CountryDetails />} />
          <Route  path='/addActivity' element={<AddActivity />} />
        </Routes>     
    </BrowserRouter>
      
    </>
  );
}

export default App;
