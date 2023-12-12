export default function ColorizeButton(props) {
    return (
        <button className={"text-center shadow-lg flex justify-center items-center mx-6 px-5 rounded-lg hover:scale-125 duration-200 " + props.className}>{props.children}</button>
    )
}