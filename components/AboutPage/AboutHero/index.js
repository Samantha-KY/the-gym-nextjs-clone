/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Header from '../../modules/Header';
// import Button from '../../modules/Button';

function AboutHero() {
    return (
        <section className='overflow-y-hidden relative w-full h-fit px-36'>

            <div className='absolute top-0 left-0 right-0 -z-20'>
                <img src='/Bg1.png' alt="bg1" className='w-full h-full object-cover' />
            </div>
            <div className='max-w-7xl mx-auto'>
                <Header />
                <div className='py-10'>

                    <div className='flex justify-between max-w-7xl mx-auto py-20 space-x-40'>
                        <div className='flex max-w-7xl mx-auto'>
                            <img src='/aboutHero1.png' alt='image' className='w-[90rem] h-[25rem] relative shadow-2xl shadow-hero-bg rounded-xsm' />
                            <img src='/aboutHero2.png' alt='image' className='absolute mt-[14rem] ml-[13.5rem] h-[15rem] w-[10rem]' />
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p className='text-content-small text-sm font-bold'>About us</p>
                            <h1 className='text-content-green-primary font-bold text-3xl'>Owner and investor with a reputation</h1>
                            <p className='text-content-green-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum
                                magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie
                                sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero;