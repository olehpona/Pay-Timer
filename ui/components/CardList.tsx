import Card from "./Card";
import { useContext } from "react";
import { editContext } from "@/app/hooks/CardEditContext";

export default async function CardList(props){
    const elList: React.JSX.Element[] =  [];
    const editable = useContext(editContext)
    for (let i = 0; i < props.data.length; i++) {
        elList.push(<Card key={i} data={props.data[i]} editable={editable}></Card>)
    }
    return (<p>LOX</p>);

}