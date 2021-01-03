import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer';
import Context from '../Context/Context'
import EditList from '../../src/Components/EditList/EditList';
import Login from '../../src/Components/Login/Login';
import Footer from '../../src/Components/Footer/Footer';
import Register from '../../src/Components/Register/Register';
import Header from '../../src/Components/Header/Header';

it('App renders without crashing', () => {
    const div = document.createElement('div');
    // window.HTMLCanvasElement.prototype.getContext = () => {}
    ReactDOM.render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});
  
// it('renders the UI as expected', () => {
//     const tree = renderer
//         .create(<EditList />)
//         .toJSON();
//     expect(tree).toMatchSnapshot();  
// });

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Footer />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Register />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>    
    , div);
    ReactDOM.unmountComponentAtNode(div);
});