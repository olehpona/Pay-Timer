export default function MainButton(props) {
    return (
        <button onClick={props.onclick} className={"text-center shadow-lg flex justify-center items-center bg-gray-200 mx-6 px-5 rounded-lg hover:scale-125 duration-200 " + props.className}>{props.children}</button>
    )
}