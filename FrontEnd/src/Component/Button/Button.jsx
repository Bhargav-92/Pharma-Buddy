import React from 'react'
import '../CSS/CustomCss.css'


function Button({style , children , onClick }){
  return (
    <>
      <button style={style} onClick={onClick} className="HoverButton"  >
            {children}
      </button>
    </>
  )
}

export default Button
