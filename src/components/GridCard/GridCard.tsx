import React, { useEffect, useState } from 'react';
import './GridCard.css';
import { userInfo } from 'os';
import{ UserProps } from '../grid/grid'


function GridCard(props: UserProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="email"><strong>Email:</strong> {props.email.trim()}</div>
                <div><strong>Username:</strong> {props.username.trim()}</div>
                <br></br>
                <p className="card-text">{props.company.catchPhrase}</p>
                <a href={props.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Website</a>
            </div>
        </div>
  )};
  
  export default GridCard;