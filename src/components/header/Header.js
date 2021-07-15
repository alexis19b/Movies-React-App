import React from 'react';
import './header.css';

export const Header = () => {
  return (
   
       <span
       onClick={()=> window.scroll(0, 0)}
       className="header"
         >SEARCH MOVIE 🎬  
      </span>
    
  )
}
