"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import MainButton from "./MainButton";
import ColorizeButton from "./ColorizeButton";
export default function Card(props) {

    return (
        <>
            <div className="w-[80%] h-24 bg-gray-150 rounded-lg duration-200 flex justify-between items-center shadow-neo">
                <div className="flex w-1/2 divide-solid divide-x-2 divide-gray-300 items-center h-full">
                    <div className="px-1">{props.data.name}</div>
                    <div className="px-1">Next Pay {props.data.nextDate}</div>
                    <div className="px-1">Next price: {props.data.price}</div>
                </div>
                <div className="grid grid-flow-col w-1/2 justify-items-stretch  items-center h-full">
                    <MainButton className=" h-[65%] mx-5"><Icon icon="tabler:map-pin" className="h-full"></Icon></MainButton>
                    <MainButton className=" h-[65%] mx-5"><Icon icon="tabler:clock-dollar" className="h-full"></Icon></MainButton>
                    {
                        props.editable && (<>
                            <ColorizeButton className=" h-[65%] bg-red-500"><Icon icon="tabler:trash-filled" className="h-full"></Icon></ColorizeButton>
                            <ColorizeButton className=" h-[65%] bg-yellow-500"><Icon icon="tabler:edit" className="h-full"></Icon></ColorizeButton>
                        </>
                        )
                    }

                </div>
            </div>
        </>
    )
}