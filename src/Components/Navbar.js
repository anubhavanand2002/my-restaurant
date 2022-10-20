import React from 'react'
import './style.css';

export default function Navbar(props) {
    
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
           { props.unique.map((currelement)=>{
                return(
                    <button className="btn-group__item" onClick={()=>props.filter(currelement)}>{currelement}</button>
                );
            })}
        </div>
    </nav>
    </>
  );
}
