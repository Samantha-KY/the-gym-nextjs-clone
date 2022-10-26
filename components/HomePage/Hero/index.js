/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Header from '../../modules/Header';
import Button from '../../modules/Button';

function Hero() {
    return (
        <section className='overflow-y-hidden relative w-full h-fit px-36'>
            <div className='absolute right-0 top-0 h-full -z-10'>
                <img src="/Figure1.png" alt='figure' />
            </div>
            <div className='absolute top-0 left-0 right-0 -z-20'>
                <img src='/Bg1.png' alt='bg1' className='w-full h-full object-cover' />
            </div>
            <div className='max-w-7xl mx-auto'>
            <Header />
            <div className='grid grid-cols-2 gap-20 mt-40'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-content-green-primary text-5xl font-bold leading-tight'>Development<br /> company</h1>
                    <p className='text-content-green-secondary text-s2xl'>Forward-thinking real estate developer, owner<br /> and investor with a reputation</p>
                    <div className='gap-4 flex mt-20'>
                        <Button title="Services" className='bg-primary-green rounded-xsm text-white p-6 text-xsm font-bold' />
                        <Button title="About the company" className='bg-sky-violet py-2 rounded-xsm text-content-green-primary font-bold w-64' />
                    </div>
                </div>
                <div className='flex flex-col -mt-20'>
                    <div className='flex items-baseline gap-x-6'>
                        <img src='/house1.jpeg' alt='Home 1' className='w-36 h-36 ml-auto object-cover' />
                        <img src='/house2.jpeg' alt='Home 2' className='w-52 h-52 object-cover' />
                        <img src='/house3.jpeg' alt='Home 3' className='w-36 h-36 object-cover' />
                    </div>
                    <div className='grid grid-cols-2 gap-x-6 py-10'>
                        <img src='/house4.jpeg' alt='Home 4' className='h-60 w-80 object-cover' />
                        <img src='/house5.jpeg' alt='Home 5' className='h-40 w-40 object-cover' />
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero;