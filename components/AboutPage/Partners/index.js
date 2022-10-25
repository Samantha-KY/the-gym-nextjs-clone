import React from 'react'
import LogosContainer from '../../modules/_modules/logosContainer'

function Partners() {
    return (
        <section className='py-40 bg-primary-bg px-36'>
            <div className='flex flex-col max-w-7xl mx-auto'>
                <div className='flex flex-col gap-2'>
                    <p className='text-content-small text-sm font-semibold text-center mt-10'>Statistics</p>
                    <h1 className='font-bold text-content-green-primary text-4xl text-center'>Development in numbers</h1>
                </div>
                <div className='bg-repetitive-bg rounded-sm shadow-2xl shadow-hero-bg mt-40'>
                    <div className='flex justify-between px-10 py-10'>
                        <div className='flex justify-between border-r border-content-green-primary gap-6'>
                            <img src='/aboutPartner1.svg' alt='' className='bg-content-green-secondary p-5 rounded-md w-fit h-fit'/>
                            <div className='flex flex-col mr-20'>
                            <p className='font-bold text-content-green-primary text-4xl text-center'> 200 </p>
                            <p className='font-normal text-content-green-secondary'>Number</p>
                            </div>
                        </div>

                        <div className='flex justify-between border-r border-content-green-primary gap-6'>
                            <img src='/aboutPartner2.svg' alt='' className='bg-content-green-secondary p-5 rounded-md w-fit h-fit'/>
                            <div className='flex flex-col mr-20'>
                            <p className='font-bold text-content-green-primary text-4xl text-center'> 70 </p>
                            <p className='font-normal text-content-green-secondary'>Number</p>
                            </div>
                        </div>

                        <div className='flex justify-between gap-6'>
                            <img src='/aboutPartner3.svg' alt='' className='bg-content-green-secondary p-5 rounded-md w-fit h-fit'/>
                            <div className='flex flex-col mr-20'>
                            <p className='font-bold text-content-green-primary text-4xl text-center'> 20 </p>
                            <p className='font-normal text-content-green-secondary'>Number</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='py-10 mt-5'>
                    <LogosContainer />
                </div>
            </div>
        </section>
    )
}

export default Partners