import React, { useEffect, useState } from 'react';
import { userInfo } from 'os';
import DataTable from '../dataTable';
import { UserProps } from '../grid/grid';

function Tabular() {
  const [data, setData] = useState<UserProps[]>([]);
  const [query, setQuery] = useState('');
  const [searchColumns, setSearchColumns] = useState(['name']);

  useEffect(() => {
    const fetchUsers = () => {
      const options = {};
      fetch('https://jsonplaceholder.typicode.com/comments', options)
      .then(response => response.json())
      .then(json => setData(json));
    }
    fetchUsers();
  }, []);

  function search(rows: any) {
    return rows.filter((row: any) => 
      searchColumns.some((column) => 
        row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="wrapper">
      <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      {
        columns && columns.map(column => <label>
          <input type="checkbox" name="" id="" 
            checked={searchColumns.includes(column)} 
            onChange={(e) => {
              const checked = searchColumns.includes(column);
              setSearchColumns(previous => checked ? previous.filter(sc => sc !== column) : [...previous, column])
            }}
          />
          {column}
        </label>)
      }

      <div>
        <DataTable data={query ? search(data): data}  />
      </div>
    </div>
  )};
  
  export default Tabular;