import React from 'react';
import App from '../App';
import{shallow} from 'enzyme';
import '@testing-library/jest-dom'



describe('Pruebas en <App />', () => {
  test('<App /> se renderiza bien', () => {
      const searchBar = "Search";
      const jsxApp = shallow(<App searchBar={"Search"} />)
  });
})
