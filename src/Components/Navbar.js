import React from 'react'
import './style.css';

export default function Navbar(props) {
    
  return (
    <>
    <nav className="navbar">
        <div clssName="btn-group">
           { props.unique.map((currelement)=>{
                return(
                    <button className="btn-group__item" onClick={props.filterSelection(currelement)}>{currelement}</button>
                );
            })}
        </div>
    </nav>
    </>
  );
}
