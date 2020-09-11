import React, { useEffect, useState } from 'react';
import './GridCard.css';
import { userInfo } from 'os';
import{ UserProps } from '../grid/grid'


function GridCard(props: UserProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <ul>
                    <li>Email: {props.email.trim()}</li>
                    <li>Username: {props.username.trim()}</li>
                </ul>
                <p className="card-text">{props.company.catchPhrase}</p>
                <a href={props.website} className="btn btn-primary">Visit Website</a>
            </div>
        </div>
  )};
  
  export default GridCard;