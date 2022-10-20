import React from 'react'
import './style.css';
export default function Menu(props) {
  return (
    <>
    <section className='main-card--cointainer'>
    {props.menu.map((currelement)=>{
      const {id,image,name,category,description}=currelement;
      return(
        <div>
      <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">
                   {description}
                </span>
                <div className="card-read">Read</div>
                <div>
                    <img src={image} alt="Oops!Image is not loaded Currently"/>
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>

        </div>

      </div>
    </div>
      );
    })}
    </section>
    </>
  )
}
