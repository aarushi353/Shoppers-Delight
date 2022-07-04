import React from 'react';
import "../../assets/css/SidePanel.css";
import SliderProton from './SliderProton';

const SidePanel = ({selectedPrice, changePrice}) => {
  return (
    <div>
      <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    </div>
  )
}

export default SidePanel