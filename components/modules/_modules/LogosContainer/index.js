/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'

function LogosContainer() {
    return (
        <div className='px-36 border-t border-content-green-secondary border-b '>
            <div className='flex justify-between max-w-7xl mx-auto py-10 '>
            <img src='/partner1.svg' alt='logo'/>
            <img src='/partner2.svg' alt='logo'/>
            <img src='/partner3.svg' alt='logo'/>
            <img src='/partner4.svg' alt='logo'/>
            <img src='/partner5.svg' alt='logo'/>
            </div>
        </div>

    )
}

export default LogosContainer