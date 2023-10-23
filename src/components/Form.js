import React from 'react'
import Input from './Input'
import Seats from './Seats'
import ShowingData from './ShowingData'

export default function Form() {
    return (
        <div className='my-form text-center'>
            <h3 className='warning'>Fill The Required Details Below And Select Your Seats</h3>
            <Input />
            <Seats />
            <div className="screen mx-auto text-center mb-4">
                <span>SCREEN THIS WAY</span>
            </div>
            <ShowingData />
        </div>
    )
}
