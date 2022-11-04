import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const LinkButton = (props) => {
  return (
    <div className={props?.className}>

      <Link to={props?.to}>
        <button 
          className={`${props.givenClass} sm:text-2xl text-lg p-2 font-semibold 
         text-gray-600`}
          onClick={(e)=> {
              $(`.${props?.givenClass}`).css('color', 'rgb(75, 85, 99)');
              const target = e.target;
              target.style.color = 'black'; 
              if (props?.handleClick) {
                props?.handleClick();
              }
          }}>
          {props?.string}</button>
      </Link>

    </div>
  )
}

export default LinkButton