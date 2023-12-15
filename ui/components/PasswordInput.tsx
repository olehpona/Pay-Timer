"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function PasswordInput(props : {name: string, id: string}){
    const [showText, setShowText] = useState(false)
    return (
        <div className="w-full flex flex-nowrap">
            <input id={props.id} className="w-full rounded-l-lg" type={showText? "text" : "password"} name={props.name} placeholder="Password"></input>
            <button className="w-24 h-8 rounded-r-lg bg-white" onClick={()=>{
                setShowText(!showText)
            }}>{showText ? <Icon className="w-full h-full" icon="tabler:eye"></Icon> : <Icon className="w-full h-full" icon="tabler:eye-off"></Icon>}</button>
        </div>
    )
}