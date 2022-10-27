/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Footer() {
    return (
        <section className='bg-content-green-primary px-36'>
            <div className='max-w-7xl mx-auto text-white'>
                <div className='flex flex-row justify-between py-20'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl'>Buildit</h1>
                        <p className='font-normal text-xsm'>Development company, 2022</p>
                        <div className='mt-20'>
                            <p className='font-normal text-xsm'>Site design – ⏰ Alarm</p>
                        </div>
                    </div>

                    <div className='flex justify-between pl-20 w-full '>
                        <ul className='flex flex-col gap-4'>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                            <div className='flex py-6 gap-2'>
                                <img src='/footerIcon1.svg' alt='footer icon' className='bg-content-green-secondary rounded-md w-fit h-fit py-2 px-3' />
                                <img src='/footerIcon2.svg' alt='footer icon' className='bg-content-green-secondary rounded-md w-fit h-fit py-2 px-4' />
                            </div>
                        </ul>
                        <ul className='flex flex-col gap-4'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                        <div className='flex flex-col gap-4'>
                            <p>Get in touch</p>
                            <p>60 Manor Station St. Fairport,<br /> NY 14450</p>
                            <div className='py-[3rem]'>
                                <p>708-790-0000<br /> sales@buildit.site</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer