import React from 'react';
import "../../assets/css/SidePanel.css";
import CheckboxProton from './CheckedProton';
import SliderProton from './SliderProton';

const SidePanel = ({selectedPrice, changePrice, category, changeChecked}) => {
  return (
    <div>
      <div className='input-group'>
      <p className='label' style={{marginBottom:20}}>Cuisine</p>
      <br />
      <br />
      <br />
      {category.map((category) => (
        <CheckboxProton
          key={category.id}
          category={category}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    </div>
  )
}

export default SidePanel