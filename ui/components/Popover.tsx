export default function Popover(props) {
    const ref = props.reference;
    
    const handleClickOutside = (event: Event) => {
        
        if (ref.current && !ref.current.contains(event.target)) {
            props.setOpen(false);
            console.log(ref.current.contains(event.target))
        }
    };
    document.addEventListener("click", handleClickOutside, true);
    return (
    <div
        className={props.isOpen ? `absolute ${props.position} z-10` : `absolute ${props.position} hidden z-10 `}>
        {props.children}</div>
    )
}