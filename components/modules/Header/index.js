import React from 'react'
import Button from '../Button'
import Link from 'next/link'

function Header() {
    return (
        <section className='flex justify-between items-center pt-14 relative'>
            <div className='flex gap-2 items-center'>
                <div className='bg-primary-green h-13 w-13 rounded-full' />
                <h1 className='text-content-green-primary font-bold text-2xl'>
                    <Link href="/">Buildit</Link></h1>
            </div>
            <ul className='flex justify-around text-content-green-secondary text-xsm font-medium w-1/2'>
                <li>
                    <Link href="/about">About</Link> </li>
                <li>
                    <Link href="/service"> Services </Link> </li>
                <li>
                    <Link href="/projects">Projects</Link> </li>
                <li>
                    <Link href="/contacts">Contact</Link> </li>
            </ul>
            <Button title="Need a project ?" />
        </section>
    )
}

export default Header;