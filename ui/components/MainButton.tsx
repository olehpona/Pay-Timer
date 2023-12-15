import { useId } from "react";

export default function MainButton(props) {
    return (
        <button id={props.id? props.id: useId()} onClick={props.onclick} className={"text-center shadow-lg flex justify-center items-center bg-gray-200 px-5 rounded-lg hover:scale-125 duration-200 " + props.className}>{props.children}</button>
    )
}