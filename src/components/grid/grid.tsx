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
  const [value, setValue] = useState('');

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

  useEffect(() => {
    const filterUsers = (searchName: string) => {
      if (!searchName || searchName === "") {
        setFilteredUsers(users);
      } else {
        setFilteredUsers(users.filter((user: UserProps) => user.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1));
      }
    }

    filterUsers(value);
  }, [users, value])

  return (
  <div className="wrapper">
    {/* TOOLBAR */}
    <div className="toolbar">
      <GridToolbar value={value} setValue={setValue} />
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
