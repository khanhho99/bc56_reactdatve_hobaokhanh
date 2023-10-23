import { message } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addInfo } from '../redux/actions/info';

export default function Input() {
    const [info, setInfo] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!info || !info.name || !info.seats) return message.warning('Vui lòng nhập tên và số ghế ngồi')
        dispatch(addInfo(info))
    }

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className='justify-content-between mx-auto input-form text-center'>
            <div className="my-group my-4">
                <label htmlFor="">Name</label>
                <input onChange={handleChange} type="text" required name='name' />
            </div>
            <div className="my-group my-4">
                <label htmlFor="">Number of Seats</label>
                <input onChange={handleChange} type="number" required name='seats' />
            </div>
            <button onClick={handleClick}>Start selecting</button>
            <div className='instruction'>
                <div className='d-flex my-instruc'>
                    <div className='color mr-2'></div>
                    <span>Selected Seat</span>
                </div>
                <div className='d-flex my-instruc'>
                    <div className='color mr-2'></div>
                    <span>Reserved Seat</span>
                </div>
                <div className='d-flex my-instruc'>
                    <div className='color mr-2'></div>
                    <span>Empty Seat</span>
                </div>
                <span className="my-warning"></span>
            </div>
        </div>
    )
}
