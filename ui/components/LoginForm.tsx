"use client"
import { useId, useState } from "react"
import PasswordInput from "./PasswordInput"
import axios from "axios"
import { useRouter } from 'next/navigation'
import { apiGateWay } from "@/libs/apiHost"
import Link from "next/link"

export default function LoginForm() {
    const loginId = useId()
    const [err, setErr] = useState("");
    const passwordId = useId()
    const router = useRouter()

    function signIn(){
        axios.post(apiGateWay + "/auth/signin", {
            email: (document.getElementById(loginId) as HTMLInputElement).value,
            password: (document.getElementById(passwordId) as HTMLInputElement).value,
        }
        ).then(res => {
            console.log(res.data)
            if (res.data.err) {

                setErr(res.data.err.message)
            } else {
                router.push('/')
            }
        })
    }

    return (
        <form className="w-2/12 divide-solid divide-y-2 shadow-neo rounded-lg divide-gray-300"
         onSubmit={(e) => {
            e.preventDefault();
            signIn();
        }}>
            <div className="flex flex-col bg-gray-150 p-4 rounded-t-lg items-center w-full">
                <label htmlFor={loginId}>Email</label>
                <input type="text" className="w-full h-8 rounded-lg" placeholder="email" id={loginId} name={'login'}></input>
            </div>
            <div className="flex flex-col bg-gray-150 p-4 items-center w-full">
                <label htmlFor={passwordId}>Password</label>
                <div>
                    <PasswordInput id={passwordId} name="password"></PasswordInput>
                </div>
            </div>
            <div className={`flex flex-col bg-red-500 p-2 ${err !== "" ? "" : "hidden"} items-center w-full`}>
                <p>{err}</p>
            </div>
            <div className="flex flex-col bg-gray-200 p-4 rounded-b-lg items-center w-full">
                <button className="w-full h-8 rounded-lg bg-green-600" type="submit">Login</button>
            </div>
            <div className="flex flex-col p-4 rounded-b-lg items-center w-full">
                <p>Or <Link href='/user/signup'>Sign Up</Link></p>
            </div>
        </form>
    )
}