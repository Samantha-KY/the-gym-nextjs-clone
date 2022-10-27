/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../modules/Button'
import LogosContainer from '../../modules/LogosContainer'

function Partners() {
    return (
        <section className='bg-repetitive-bg px-36'>
            <div className='py-10 max-w-7xl mx-auto'>
                <LogosContainer />
                <div className='flex justify-between max-w-7xl mx-auto py-20 space-x-10'>
                    <img src='/partnerImage.jpeg' alt='image' className='w-[33.75rem] h-[25rem]' />
                    <div className='flex flex-col gap-10'>
                        <p className='text-content-small text-sm font-bold'>About us</p>
                        <h1 className='text-content-green-primary font-bold text-3xl'>Owner and investor with a reputation</h1>
                        <p className='text-content-green-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
                        <Button title="Explore" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Partners