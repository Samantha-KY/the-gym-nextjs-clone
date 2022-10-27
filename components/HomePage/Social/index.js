/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Social() {
    return (
        <section className='bg-repetitive-bg  px-36'>
            <div className='flex flex-col gap-3 max-w-7xl mx-auto'>
                <p className='text-content-small text-sm font-semibold text-center mt-20'>Socials</p>
                <h1 className='text-content-green-primary font-bold text-3xl text-center'>On Instagram</h1>
                <div className='grid grid-cols-3 gap-4 py-5'>
                    <img src='/socialImage1.png' alt='social image' />
                    <img src='/socialImage2.png' alt='social image' />
                    <img src='/socialImage3.png' alt='social image' />
                    <img src='/socialImage4.png' alt='social image' />
                    <img src='/socialImage5.png' alt='social image' />
                    <img src='/socialImage6.png' alt='social image' />
                </div>
            </div>
        </section>
    )
}

export default Social