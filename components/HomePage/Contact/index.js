/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../modules/_modules/Button'

function Contact() {
    return (
        <section className='bg-primary-bg px-36'>
            <div className='flex justify-between max-w-7xl mx-auto py-40'>
                <div>
                    <p className='text-content-small text-sm font-semibold '>Contact</p>
                    <h1 className='text-content-green-primary font-bold text-3xl'>Get In Touch</h1>
                    
                    <div className='flex flex-col gap-5 mt-20'>

                        <div className='flex gap-5'>
                            <img src='/contact1.svg' alt='contact icon' className='bg-repetitive-bg p-4 rounded-md w-fit h-fit' />
                            <div className='flex flex-col'>
                                <p className='text-content-green-secondary text-lg font-semibold mt-2'>Tel</p>
                                <p className='text-content-green-primary font-bold text-xsm'>708-790-0000</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <img src='/contact3.svg' alt='contact icon' className='bg-repetitive-bg p-4 rounded-md w-fit h-fit' />
                            <div className='flex flex-col'>
                                <p className='text-content-green-secondary text-lg font-semibold mt-2'>Email</p>
                                <p className='text-content-green-primary font-bold text-xsm'>sales@buildit.site</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <img src='/contact3.svg' alt='contact icon' className='bg-repetitive-bg p-4 rounded-md w-fit h-fit' />
                            <div className='flex flex-col'>
                                <p className='text-content-green-secondary text-lg font-semibold mt-2'>Office</p>
                                <p className='text-content-green-primary font-bold text-xsm'>60 Manor Station St.<br />
                                    Fairport, NY 14450</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-repetitive-bg rounded-xsm shadow-2xl shadow-content-green-secondary w-fit h-fit -mt-5'>
                    <div className='flex flex-col gap-5 p-6'>
                        <div className='flex gap-5 mt-10'>
                            <div className='flex flex-col'>
                            <p className='text-content-green-secondary text-base'>Name</p>
                            <input className='border-content-green-primary bg-repetitive-bg border rounded-sm'/>
                            </div>
                            <div className='flex flex-col'>
                            <p className='text-content-green-secondary text-base'>Email</p>
                            <input className='border-content-green-primary bg-repetitive-bg border rounded-sm'/>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-content-green-secondary text-base'>Subject</p>
                            <input className='border-content-green-primary bg-repetitive-bg border rounded-sm'/>
                            </div>
                            <div className='flex flex-col'>
                            <p className='text-content-green-secondary text-base'>Message</p>
                            <input className='border-content-green-primary bg-repetitive-bg border rounded-sm h-[8rem]'/>
                            </div>
                            <Button title="Send message" className='bg-primary-green rounded-xsm text-white py-2 h-11 w-[25rem] font-bold shadow-2xl shadow-content-green-secondary' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact