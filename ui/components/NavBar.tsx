"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import MainButton from './MainButton';

export function NavBar() {
    return (
        <div className="navbar bg-gray-100 w-[5%] h-full shadow-neo flex flex-col items-center text-black rounded-lg py-2">
            <header className="h-12 w-full flex justify-center items-center">
                <Icon icon="tabler:calendar-clock" className="h-[90%] w-[90%]" />
            </header>
            <div className={"flex flex-col justify-between h-full w-full my-5 items-center"}>
                <div className={"flex flex-col justify-between h-[15%] w-full my-5 items-center"}>
                    <Link href="/" className={'text-center shadow-xl flex justify-center items-center bg-gray-200 w-[70%] h-12 mb-2 px-5 rounded-lg hover:scale-125 duration-200'}><Icon icon="tabler:map-pin" className="h-[100%] w-[100%]" /></Link>
                    <Link href="/app" className={'text-center shadow-xl flex justify-center items-center bg-gray-200 w-[70%] h-12  px-5 rounded-lg hover:scale-125 duration-200'}><Icon icon="tabler:activity" className="h-[100%] w-[100%]" /></Link>
                </div>
                <div className={"flex flex-col justify-between h-[15%] w-full my-5 items-center"}>
                    <MainButton onclick={(id)=>{
                        
                    }} className='h-12 w-[70%]'><Icon className='h-full w-full' icon="tabler:user-circle"></Icon></MainButton>
                </div>
            </div>

        </div>
    );
}
