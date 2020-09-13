import React, { useEffect, useState } from 'react';
import styles from './grid.module.css';
import GridCard from '../GridCard/GridCard';
import GridToolbar from '../GridToolbar/GridToolbar';

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
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const options = {};
      const fetchedUsers = await fetch('https://jsonplaceholder.typicode.com/users', options)
                                .then(response => response.json())
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  const filterUsers = (searchName: string) => {
    if (!searchName || searchName === "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((user: UserProps) => user.name.toLowerCase().includes(searchName.toLowerCase())));
    }
  }

  return (
  <div className="wrapper">
    {/* TOOLBAR */}
    <div className="toolbar">
      <GridToolbar filterUsers={filterUsers} />
    </div>

    {/* GRID */}
    <div className={styles.grid} data-testid="grid">
      {filteredUsers.map( (user: UserProps) => 
        <GridCard 
          key={user.id}
          {...user}
        />
      )}
      
    </div>

    {/* END OF WRAPPER */}
  </div>
)};

export default Grid;
