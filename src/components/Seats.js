import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SeatItem from './SeatItem';
import { selectSeat } from '../redux/actions/seat';

export default function Seats() {
    const seatList = useSelector(state => state.seat.seats);
    const { name, seats } = useSelector(state => state.info);
    const dispatch = useDispatch();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [allowClick, setAllowClick] = useState(true);
    //chọn ghế
    const handleChoose = (soGhe) => {
        setSelectedSeats([...selectedSeats, soGhe]);
    }

    //cập nhật redux mỗi khi số lượng ghế thay đổi
    useEffect(() => {
        dispatch(selectSeat(selectedSeats))
    }, [selectedSeats])


    return (
        <div>
            <table className='table table-borderless'>
                <thead>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th></th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                </thead>
                <tbody>
                    {seatList.map((seat, index) => {
                        if (index == 0) {
                            return;
                        }
                        if (index == 5) {
                            return <>
                                <tr>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>{seat.hang}</td>
                                    {seat.danhSachGhe.map((ghe, index) => {
                                        if (index == 5) {
                                            return <>
                                                <td></td>
                                                <td key={5}>
                                                    <SeatItem ghe={ghe} handleChoose={handleChoose} allowClick={allowClick} setAllowClick={setAllowClick} />
                                                </td>
                                            </>
                                        }
                                        return (
                                            <td key={index}>
                                                <SeatItem ghe={ghe} handleChoose={handleChoose} allowClick={allowClick} setAllowClick={setAllowClick} />
                                            </td>
                                        )
                                    })}
                                </tr>
                            </>
                        }
                        return (
                            <tr>
                                <td>{seat.hang}</td>
                                {seat.danhSachGhe.map((ghe, index) => {
                                    if (index == 5) {
                                        return <>
                                            <td></td>
                                            <td key={5}>
                                                <SeatItem ghe={ghe} handleChoose={handleChoose} allowClick={allowClick} setAllowClick={setAllowClick} />
                                            </td>
                                        </>
                                    }
                                    return (
                                        <td key={index}>
                                            <SeatItem ghe={ghe} handleChoose={handleChoose} allowClick={allowClick} setAllowClick={setAllowClick} />
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
