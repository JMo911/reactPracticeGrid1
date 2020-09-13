import React, { useEffect, useState } from 'react';
import './GridToolbar.css';
// import { userInfo } from 'os';
// import{ UserProps } from '../grid/grid'


function GridToolbar({filterUsers}: any) {
    const [value, setValue] = useState('');

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     filterUsers(value);
    // }

    const handleChange = (e: any) => {
        filterUsers(value);
    }

    return (
        <div className='formContainer'>
            <form>
                <div className="form-group">
                    <label>
                    Search by Name:
                    <input type="text" value={value} onChange={(e)=> {
                        setValue(e.target.value);
                        handleChange(value);
                    }
                    } />
                    </label>
                    </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
  )};
  
  export default GridToolbar;