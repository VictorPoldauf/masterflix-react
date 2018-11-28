import React from 'react';
import './Lista.css';

class Lista extends React.Component{
    render(){
        return <div>
            <ul className='Lista'>
                <li>Ação</li>
                <li>Comédia</li>
                <li>Terror</li>
                <li>Drama</li>
            </ul>
        </div>
    }
}
export default Lista;