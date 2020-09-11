import React, { useEffect, useState } from 'react';
import styles from './grid.module.css';
import GridCard from '../GridCard/GridCard';

export interface UserProps {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

const Grid: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const options = {};
      const fetchedUsers = await fetch('https://jsonplaceholder.typicode.com/users', options)
                                .then(response => response.json())
      setUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  return (
  <div className={styles.grid} data-testid="grid">
    {users.map( (user: UserProps) => 
      <GridCard 
        key={user.id}
        {...user}
      />
    )}
    
  </div>
)};

export default Grid;
