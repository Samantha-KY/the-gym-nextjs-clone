import React from 'react'
import AboutCard from '../../modules/cards/AboutCard'
import Button from '../../modules/Button'

const DUMMY_TEAM = [
    {
        pictSrc: "/aboutTeam1.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam2.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam3.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam4.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam5.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam6.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam7.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam8.png",
        name: "Name Surname",
        description: "Worker"
    },
    {
        pictSrc: "/aboutTeam9.png",
        title: "Name Surname",
        description: "Worker"
    }
]

function Team() {
    return (
        <section className='py-20 bg-repetitive-bg px-36'>
            <p className='text-content-small text-sm text-center'>Our Team</p>
            <h1 className='font-bold text-content-green-primary text-4xl text-center'>Let&apos;s meet</h1>
            <div className='grid grid-cols-3 mt-10 gap-5  max-w-7xl mx-auto'>
                {
                    DUMMY_TEAM.map((member, index) =>{
                        return <AboutCard content={member} key={index}/>
                    })
                }
            </div>
            <div className='border-t border-b border-content-green-primary mt-20 max-w-7xl mx-auto'>
                <div className='flex justify-between py-10 '>
                <h1 className='font-bold text-content-green-primary text-4xl text-center'>Call Us</h1>
                <div className='gap-4 flex'>
                    <Button title="call" className='bg-primary-green rounded-xsm text-white p-6 text-xsm font-bold w-60 py-4'/>
                    <Button title="Email" className='bg-sky-violet py-2 rounded-xsm text-content-green-primary font-bold w-52' />
                </div>
                </div>
            </div>

        </section>
    )
}

export default Team