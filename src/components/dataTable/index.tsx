import React, { useEffect, useState } from 'react';
import { userInfo } from 'os';
import { UserProps } from '../grid/grid';

interface CommentProps {
    'body': string,
    'email': string,
    'id': number,
    'name': string,
    'postId': number
}

function DataTable({ data }: any) {
//   const [data, setData] = useState([]);
//   const [query, setQuery] = useState('');
    const columns = data[0] && Object.keys(data[0]);

//   useEffect(() => {

//   }, []);

    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {data.map((row: any) => <tr>
                    {
                        columns.map((column) => 
                        {
                            if (column !== "links") {
                            return <td>{row[column]}</td>
                            } else {
                                // return <td>Links</td>
                                // const subData = row[column] || {};
                                const subData = Object.keys(row[column]);
                                    return <td>
                                        <ul>
                                            {subData.map((subRow: any) => {
                                                return <li>{subRow}: {row[column][subRow] ? row[column][subRow]: 'Not provided.'}</li>
                                            })}
                                        </ul>
                                    </td>
                            }
                        })
                    }
                </tr>)}
            </tbody>
        </table>
)};

export default DataTable;