import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import View from './View';

function Search() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    async function handleViews() {
        let response = await axios.get(`http://localhost:3000/api/v1/search?search=${value}`)
        setData(response.data);
        console.log(response.data);
    }
    const handleClick = (e) => {
        e.preventDefault();
        handleViews();
    }

    return (
        <>
        <table className='table'>
            <tbody>
                <tr>
                    <td>
                        <input className='search-input' type='text' placeholder='Search' value={value} onChange={(e) => setValue(e.target.value)} />
                    </td>
                    <td>
                        <button className='search-button' onClick={(e) => handleClick(e)}>Search</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className='view'>
            {data.map((i) => (
                <View title={i.title} description={i.description} />
            ))}
        </div>
        </>
    )
}

export default Search