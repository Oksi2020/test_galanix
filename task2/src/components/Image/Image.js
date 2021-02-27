import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DELETE_IMAGE, SET_ACTIVE} from '../../constants/index';
import './Image.scss';


const Image = (props) => {
    let dispatch = useDispatch();

    return (
        <div className='image__item'>
            <img src={props.src} alt="info" onClick={()=>dispatch({ type:SET_ACTIVE, payload:props.src })} />
            <button onClick={()=>dispatch({type:DELETE_IMAGE, payload:props.src})}>X</button>
        </div>
    )
}

export default Image;