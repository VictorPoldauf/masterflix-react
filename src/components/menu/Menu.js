import React from  'react';
import Titulo from '../titulo/Titulo.js';
import Lista from '../lista/Lista.js';
import './Menu.css';

class Menu extends React.Component{
    render(){
        return <div className='menuzinho'>
        <Titulo/>
        <Lista/>
        </div>
    }
}
export default Menu;