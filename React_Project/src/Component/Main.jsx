import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './Header';
export function Main(props) {
    const [add, setAdd] = useState(0);
    var up =()=>{
    setAdd(add+1);
   }
  return (
    <>
       <Header add={add}/> 
       <main className='container overflow-x-hidden ' >
        <div className="row colz">
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src={props.img} style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>{props.h4}</h4>
        <p >{props.p}</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        </div>
      </main>
    </>
  )
}

export default Main
