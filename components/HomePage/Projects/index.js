/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../modules/_modules/Button';

function Project() {
    return (
        <section className='bg-primary-bg px-36'>
            <div className='flex justify-between max-w-7xl mx-auto'>
                <div className='flex flex-col gap-10 mt-20'>
                    <p className='text-content-small text-sm font-semibold'>Available Properties</p>
                    <h1 className='text-content-green-primary font-bold text-3xl'>Featured Listing</h1>
                    <p className='text-content-green-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br />
                        elit sem, vestibulum sed leo eu, malesuada pharetra mauris.<br />
                        Integer rhoncus, eros vel euismod tempor, ipsum magna<br />
                        tristique nisi, quis ullamcorper enim magna eu orci. Sed<br />
                        semper ex quis semper aliquet. Cras hendrerit molestie sapien<br />
                        sed fermentum. Mauris dui tortor, viverra vel ultrices in,<br /> congue sed ex.</p>
                    <Button title="Explore" className='bg-primary-green rounded-xsm text-white py-2 h-11 w-40 font-bold shadow-2xl shadow-content-green-secondary' />
                </div>
                <div className='flex flex-col mt-20'>
                    <div className='flex items-baseline gap-x-6'>
                        <img src='/projectImage1.jpeg' alt='project image' />
                        <img src='/projectImage2.jpeg' alt='project image' />
                    </div>
                    <div className='flex items-baseline gap-x-6 py-10'>
                        <img src='/projectImage3.png' alt='project image' />
                        <img src='/projectImage4.png' alt='project image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;