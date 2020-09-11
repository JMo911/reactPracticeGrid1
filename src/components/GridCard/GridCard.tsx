import React, { useEffect, useState } from 'react';
import styles from './grid.module.css';
import { userInfo } from 'os';
import{ UserProps } from '../grid/grid'


function GridCard(props: UserProps) {
    return (
        <div className="card">
            <img className="card-img-top" src=".../100px180/" alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  )};
  
  export default GridCard;