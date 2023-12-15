"use client"
import { useId, useState } from "react"
import PasswordInput from "./PasswordInput"
import axios from "axios"
import Link from "next/link";

export default function SignupForm() {
    const loginId = useId();
    const passwordId = useId();
    const nameId = useId();
    const password2Id= useId();
    const [err, setErr] = useState("");
    const [complete, setComplete] = useState(false)
    return (
        <form className="w-2/12 divide-solid divide-y-2 shadow-neo rounded-lg divide-gray-300"
            onSubmit={(e) => {
                e.preventDefault();
                if ((document.getElementById(passwordId) as HTMLInputElement).value.length >= 6){
                    if ((document.getElementById(passwordId) as HTMLInputElement).value === (document.getElementById(password2Id) as HTMLInputElement).value){
                        if (/\w/g.test((document.getElementById(passwordId) as HTMLInputElement).value) && /\w/g.test((document.getElementById(nameId) as HTMLInputElement).value)){
                            axios.post("/api/user/signup", {
                                email: (document.getElementById(loginId) as HTMLInputElement).value,
                                password: (document.getElementById(passwordId) as HTMLInputElement).value,
                                name : (document.getElementById(nameId) as HTMLInputElement).value
                            }
                            ).then(res => {
                                if (res.data.err){
                                    setErr(res.data.err.message);
                                } else {
                                    setComplete(true);
                                }
                            })
                        }
                    }
                    else {
                        setErr("Passwords don't match");
                    }
                } else {
                    setErr("Password minimum length is 5 symbols")
                }
                
            }}>
            {complete? 
            (<div>
                <p>Registration email sended successful</p>
                <p>After email confirm you will automatically login</p>
            </div>): 
            (<>
                    <div className="flex flex-col bg-gray-150 p-4 rounded-t-lg items-center w-full">
                        <label htmlFor={nameId}>Name</label>
                        <input type="text" className="w-full h-8 rounded-lg" placeholder="Name" id={nameId} name={'name'}></input>
                    </div>
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
                    <div className="flex flex-col bg-gray-150 p-4 items-center w-full">
                        <label htmlFor={password2Id}>Retype password</label>
                        <input className={'"w-full rounded-lg h-8 w-full'} type="text" placeholder="Password" id={password2Id}></input>
                    </div>
                    <div className={`flex flex-col bg-red-500 p-2 ${err !== "" ? "" : "hidden"} items-center w-full`}>
                        <p>{err}</p>
                    </div>
                    <div className="flex flex-col bg-gray-200 p-4 rounded-b-lg items-center w-full">
                        <button className="w-full h-8 rounded-lg bg-green-600" type="submit">SignUp</button>
                    </div>
            </>
            )}
        </form>
    )
}