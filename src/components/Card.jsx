import React from 'react'

const Card = (props) => {
    
    return (
      <div 
        className={`${props?.className}
        bg-gradient-to-tl from-slate-700 to-slate-400 p-4`}
        onClick={props?.onClick} >
          {props?.children}
      </div>
    )
}

export default Card