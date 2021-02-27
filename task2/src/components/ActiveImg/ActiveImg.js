import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DELETE_ACTIVE } from '../../constants/index'
import './ActiveImg.scss';

const ActiveImg = () => {
    let activeIMG = useSelector(state => state.active);
    let dispatch = useDispatch();

    return (
        <div className={`screen__image ${activeIMG?'active':''}`}>
            <button className='closeImg' onClick={()=>{dispatch({type:DELETE_ACTIVE})}}>X</button>
            <img src={activeIMG}/>
        </div>
    )
}

export default ActiveImg;