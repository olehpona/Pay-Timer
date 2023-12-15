"use client"
import MainButton from "@/ui/components/MainButton";
import { useEffect, useState } from "react";
import Card from "@/ui/components/Card";
import AllCardData from "@/libs/AllCardData";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  const [cardEdit, setCardEdit] = useState(false);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    AllCardData().then(data => setCardData(data))
  }, [])
  return (
    <div className="h-full w-full">
      <header className="bg-gray-100 shadow-neo w-full justify-between rounded-lg h-14 items-center flex">
        <div className={"px-5 " }>Welcome Back!</div>
        <div className="flex h-full items-center justify-center">
          <MainButton className="h-[65%] mx-5"><Icon icon={"tabler:calendar-plus"}></Icon></MainButton>
          <MainButton className="h-[65%] mx-5" onclick={() => { cardEdit ? setCardEdit(false) : setCardEdit(true) }}><Icon icon={"tabler:edit"}></Icon></MainButton>
        </div>
      </header>
      <div className="bg-gray-100 my-2 rounded-lg flex flex-col items-center space-y-8 p-5 shadow-neo h-[calc(100%-4rem)] w-full">
        {cardData.map((el) => {
          return <Card key={el.name} data={el} editable={cardEdit}></Card>
        })}
      </div>
    </div>
  )
}
