import React from 'react'

function AboutCard({content}) {
    return (
        <section className="rounded-xl relative shadow-2xl shadow-hero-bg">
            <img src='/background.png' className='absolute -z-20 w-full h-full top-0 bottom-0 right-0 left-0 '/>
            <img src={content.pictSrc} alt={content.name} className="w-full z-30"/>
            <div className='p-8 '>
                <p className='font-bold text-content-green-primary '>{content.name}</p>
                <p className='font-base text-content-green-primary'>{content.description}</p>
            </div>
        </section>
    )
};

export default AboutCard;