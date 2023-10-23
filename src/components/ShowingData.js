import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ShowingData() {

    const [isShow, setIsShow] = useState(false);
    const { name, seats } = useSelector(state => state.info)
    const selectedSeats = useSelector(state => state.seat.selectedSeats);
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsShow(true);
    }

    const handleDelete = (soGhe) => {
        dispatch({
            type: 'CANCEL_SEAT',
            payload: soGhe
        })
    }
    return (
        <div>
            <button onClick={handleClick}>Confirm</button>
            <table className='table my-3'>
                <thead>
                    <th>Name</th>
                    <th>Number of seats</th>
                    <th>Seats</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{isShow && name}</td>
                        <td>{isShow && seats}</td>
                        <td>{isShow && selectedSeats.map((seat => seat.soGhe)).join(' , ')}</td>
                    </tr>
                </tbody>
            </table>
            {isShow && <table className='table mt-3 table-bordered'>
                <thead>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th>Huỷ</th>
                </thead>
                <tbody>
                    {selectedSeats.map((seat, index) => {
                        return (
                            <tr key={index}>
                                <td>{seat.soGhe}</td>
                                <td>{seat.gia}</td>
                                <td>
                                    <button onClick={() => handleDelete(seat.soGhe)}>Hủy Vé</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Tổng tiền</td>
                        <td>{selectedSeats.reduce((accumulate, curSeat) => {
                            return accumulate + curSeat.gia;
                        }, 0)}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}
