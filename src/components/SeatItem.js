import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function SeatItem({ ghe, handleChoose, allowClick, setAllowClick }) {
    const [click, setClick] = useState(false);
    const { name, seats } = useSelector(state => state.info);
    const [hasData, setHasData] = useState(false)
    const curSeats = useSelector(state => state.seat.selectedSeats);

    //cho user bấm chọn
    useEffect(() => {
        if (seats) {
            setHasData(true)
        }
    }, [seats])

    const hasInfo = () => {
        if (!seats) return message.warning('Chưa nhập thông tin');
        if (curSeats.length >= seats) {
            message.warning('Đã chọn tối đa số ghế');
            setAllowClick(false);
            return setHasData(false);
        }
        handleChoose(ghe);
        setClick(true);
    }
    return (
        <div className={`my-seat ${click ? 'active' : ''} ${!hasData || !allowClick ? 'disable' : ''}`} onClick={hasInfo}>
            {ghe.soGhe}
        </div>
    )
}
