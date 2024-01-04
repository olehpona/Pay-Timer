"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import { useId, useRef } from "react"

export function ScheduleModal(props) {
    const nameInputId = useId()
    const dateInputId = useId()
    const priceInputId = useId()
    const daysAfterId = useId()

    const nameInputRef = useRef(null)
    const dateInputRef = useRef(null)
    const priceInputRef = useRef(null)
    const daysAfterRef = useRef(null)

    const modalRef = useRef(null);

    const handleClickOutside = (event: Event) => {

        if (modalRef.current && !modalRef.current.contains(event.target)) {
            props.setVisible(false);
        }
    };
    document.addEventListener("click", handleClickOutside, true);

    return (
        <div className={`absolute top-0 left-0 w-screen h-screen ${props.isVisible ? "grid" : "hidden"} bg-modal-bg place-items-center`}>
            <form ref={modalRef} className="bg-gray-150 rounded-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.submit(nameInputRef.current.value, dateInputRef.current.value, priceInputRef.current.value, daysAfterRef.current.value)
                    props.setVisible(false);
                    (e.target as HTMLFormElement).reset();
                }}
            >
                <div  className="flex flex-row bg-gray-150 rounded-t-lg items-center px-4 justify-between h-16 w-full">
                    <p className="text-xl">{props.title}</p>
                    <button type="reset" className="h-[60%] text-2xl" onClick={() => {
                        props.setVisible(false);
                    }}>X</button>
                </div>
                <div className="flex flex-col bg-gray-150 pb-4 px-4 rounded-t-lg items-center w-full">
                    <label htmlFor={nameInputId}>Name</label>
                    <input ref={nameInputRef} type="text" className="w-full h-8 rounded-lg" placeholder="New Schedule" id={nameInputId} name={'name'}></input>
                </div>
                <div className="flex flex-col bg-gray-150 pb-4 px-4 rounded-t-lg items-center w-full">
                    <label htmlFor={dateInputId}>Date</label>
                    <input ref={dateInputRef} type="date" className="w-full h-8 rounded-lg" placeholder="now" id={dateInputId} name={'lastPayDate'}></input>
                </div>
                <div className="flex flex-col bg-gray-150 pb-4 px-4 rounded-t-lg items-center w-full">
                    <label htmlFor={priceInputId}>Price</label>
                    <input ref={priceInputRef} type="text" className="w-full h-8 rounded-lg" placeholder="15 USD" id={priceInputId} name={'price'}></input>
                </div>
                <div className="flex flex-col bg-gray-150 pb-4 px-4 rounded-t-lg items-center w-full">
                    <label htmlFor={daysAfterId}>Next pay after N days</label>
                    <input ref={daysAfterRef} type="number" className="w-full h-8 rounded-lg" placeholder="10" id={daysAfterId} name={'daysAfter'} required></input>
                </div>
                <div className="flex flex-col bg-gray-200 p-4 rounded-b-lg space-y-2 items-center w-full">
                    <button className="w-full h-8 rounded-lg bg-green-600" type="submit">{props.btn_text}</button>
                    <button className="w-full h-8 rounded-lg bg-green-600" onClick={() => {
                        props.setVisible(false);
                    }} type="reset">Cancel</button>
                </div>
            </form>
        </div>
    )
}