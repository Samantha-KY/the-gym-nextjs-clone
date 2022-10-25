import React from 'react'
import DUMMY_INNOVATIVE from '../../../mock'


function Innovative() {
  return (
    <section className='py-44 bg-primary-bg px-36'>
      <h1 className='font-bold text-content-green-primary text-4xl text-center'>Innovative Execution</h1>
      <div className='flex justify-between max-w-7xl mx-auto mt-24'>
        {
          DUMMY_INNOVATIVE.map((service, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 ">
                <div className='shadow-2xl shadow-content-green-primary w-fit rounded-md'>
                  <img src={service.iconSrc} alt="Icons" className='bg-content-green-secondary p-5 rounded-md w-fit h-fit' />
                </div>
                <h1 className='font-bold text-content-green-primary text-lg '>{service.title}</h1>
                <p className='text-content-green-secondary font-normal w-[268px]'>{service.description}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Innovative;