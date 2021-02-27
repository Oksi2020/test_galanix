import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Image from './components/Image/Image';
import Info from './components/Info/Info';
import ActiveImg from './components/ActiveImg/ActiveImg';
import { WRITE_IMAGES_CONFIG } from './constants/index';

import './App.scss';

const importAll = (r) => {
  return r.keys().map(r);
}

const App = () => {

  let dispatch = useDispatch();

  let listOfImages = importAll(require.context('./assets/img/', true, /.(png|jpe?g|svg)$/));
  let imagesConfig = useSelector(state => state.imagesConfig);
  let savedConfig = JSON.parse(localStorage.getItem('listOfImages'));

  if (savedConfig && imagesConfig.length === 0) {
    dispatch({ type: WRITE_IMAGES_CONFIG, payload: savedConfig })
  } else {
    if (imagesConfig.length === 0) {
      dispatch({ type: WRITE_IMAGES_CONFIG, payload: listOfImages })
    } else {
      localStorage.setItem('listOfImages', JSON.stringify(imagesConfig));
    }
  }

  return (
    <div className="App">
      <ActiveImg />
      <Info count={imagesConfig.length}/>
      <div className='container'>
        {
          imagesConfig.map(
            (image, index) => <Image key={index} src={image.default} alt="info" />
          )
        }
      </div>
      <button onClick={()=>{dispatch({type: WRITE_IMAGES_CONFIG, payload: listOfImages })}}>Восстановить</button>
    </div>
  );
}

export default App;