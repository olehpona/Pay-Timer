"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import MainButton from './MainButton';
import { useEffect, useRef, useState } from 'react';
import Popover from './Popover';
import axios from 'axios';

export function NavBar() {
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const ref = useRef(null)
    const [isLogged, setLogged] = useState(false)
    useEffect(()=>{
        axios.post("/api/user/refresh").then(res => {
        
            setLogged(res.data.data)
            console.log(isLogged)
        })
    },[])
    return (
        <div className="navbar bg-gray-100 w-[5%] h-full shadow-neo flex flex-col items-center text-black rounded-lg py-2">
            <header className="h-12 w-full flex justify-center items-center">
                <Icon icon="tabler:calendar-clock" className="h-[90%] w-[90%]" />
            </header>
            <div className={"flex flex-col justify-between h-full w-full my-5 items-center"}>
                <div className={"flex flex-col justify-between h-[15%] w-full my-5 items-center"}>
                    <Link href="/" className={'text-center shadow-xl flex justify-center items-center bg-gray-200 w-[70%] h-12 mb-2 px-5 rounded-lg hover:scale-125 duration-200'}><Icon icon="tabler:home" className="h-[100%] w-[100%]" /></Link>
                    <Link href="/app" className={'text-center shadow-xl flex justify-center items-center bg-gray-200 w-[70%] h-12  px-5 rounded-lg hover:scale-125 duration-200'}><Icon icon="tabler:activity" className="h-[100%] w-[100%]" /></Link>
                </div>
                <div className={"flex flex-col justify-between h-[15%] w-full my-5 items-center"}>
                    <div ref={ref} className="flex flex-row relative justify-center items-center w-full h-full">
                        <MainButton onclick={isLogged? () => {console.log(isLogged)} :() => {setPopoverOpen(!isPopoverOpen)}} className='h-12 w-[70%]'><Icon className='h-full w-full' icon="tabler:user-circle"></Icon></MainButton>
                        <Popover reference={ref} isOpen={isPopoverOpen} setOpen={setPopoverOpen} position={'left-24'}>
                            <div className='bg-gray-100 flex shadow-lg rounded-lg p-5'>
                                <Link href='/user/signin' className="text-center shadow-xl flex justify-center items-center bg-gray-200 w-[70%] h-12 px-5 rounded-lg hover:scale-125 duration-200 mx-2">Sign In</Link>
                                <Link href='/user/signup' className="text-center shadow-xl flex justify-center items-center bg-gray-200 w-[70%] h-12 px-5 rounded-lg hover:scale-125 duration-200 mx-2">Sign Up</Link>
                            </div>
                        </Popover>
                    </div>

                </div>
            </div>

        </div>
    );
}
