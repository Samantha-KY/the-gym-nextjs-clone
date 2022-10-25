import React from 'react'

function Social() {
    return (
        <section className='bg-repetitive-bg  px-36'>
            <div className='flex flex-col gap-3 max-w-7xl mx-auto'>
            <p className='text-content-small text-sm font-semibold text-center mt-20'>Socials</p>
            <h1 className='text-content-green-primary font-bold text-3xl text-center'>On Instagram</h1>
            <div className='grid grid-cols-3 gap-4 py-5'>
            <img src='/socialImage1.png' alt='' />
            <img src='/socialImage2.png' alt='' />
            <img src='/socialImage3.png' alt='' />
            <img src='/socialImage4.png' alt='' />
            <img src='/socialImage5.png' alt='' />
            <img src='/socialImage6.png' alt='' />
            </div>
            </div>
        </section>
    )
}

export default Social