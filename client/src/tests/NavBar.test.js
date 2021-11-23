import {React} from 'react';
import{shallow} from 'enzyme';
import '@testing-library/jest-dom'
import NavBar from '../components/navBar/NavBar';




//decribe("<NavBar />", () => {
    // let wrapper;
    // beforeEach(() => {
    //     wrapper = shallow(<NavBar />);
    // });
    // it("Should be rendered tree <Link />", () => {
    //     expect(wrapper.find(Link).at(0).prop("to")).toEqual("/");
    //     expect(wrapper.find(Link).at(0).text()).toEqual("LANDING");

    // })
    describe('Pruebas en <NavBar />', () => {
        test('<NavBar /> se renderiza bien', () => {
            const landing = "LANDING";
            const jsxNavBar = shallow(<NavBar landing={"LANDING"} />)
        });
        test('<NavBar /> se renderiza bien', () => {
            const home = "HOME";
            const jsxNavBar = shallow(<NavBar home={"HOME"} />)
        });
        test('<NavBar /> se renderiza bien', () => {
            const addActivities = "ADD ACTIVITIES";
            const jsxNavBar = shallow(<NavBar addActivities={"ADD ACTIVITIES"} />)
        })
        
    })
    

