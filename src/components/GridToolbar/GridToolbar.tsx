import React, { useEffect, useState } from 'react';
import './GridToolbar.css';
// import { userInfo } from 'os';
// import{ UserProps } from '../grid/grid'


function GridToolbar({value, setValue}: any) {
    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <div className='formContainer'>
            <form>
                <div className="form-group">
                    <label>
                    Search by Name:
                    <input type="text" value={value} onChange={handleChange} />
                    </label>
                    </div>
                {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
  )};
  
  export default GridToolbar;