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
                        columns.map((column) => <td>
                            {row[column]}
                        </td>)
                    }
                </tr>)}
            </tbody>
        </table>
)};

export default DataTable;