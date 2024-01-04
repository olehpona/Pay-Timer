"use client"
import MainButton from "@/ui/components/MainButton";
import { useEffect, useState } from "react";
import Card from "@/ui/components/Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ScheduleModal } from "@/ui/components/ScheduleModal";
import axios from "axios";
import { apiGateWay } from "@/libs/apiHost";

export default function Home() {
  const [cardEdit, setCardEdit] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    axios
  }, [])
  return (
    <>
      <div className="h-full w-full ">
      <header className="bg-gray-100 shadow-neo w-full justify-between rounded-lg h-14 items-center flex">
        <div className={"px-5 " }>Welcome Back!</div>
        <div className="flex h-full items-center justify-center">
          <MainButton className="h-[65%] mx-5" onclick={()=>{
            setVisible(true)
            console.log(isVisible)
          }}><Icon icon={"tabler:calendar-plus"}></Icon></MainButton>
          <MainButton className="h-[65%] mx-5" onclick={() => { cardEdit ? setCardEdit(false) : setCardEdit(true) }}><Icon icon={"tabler:edit"}></Icon></MainButton>
        </div>
      </header>
      <div className="bg-gray-100 my-2 rounded-lg flex flex-col items-center space-y-8 p-5 shadow-neo h-[calc(100%-4rem)] w-full">
        {cardData.map((el) => {
          return <Card key={el.name} data={el} editable={cardEdit}></Card>
        })}
      </div>
    </div>
    <ScheduleModal isVisible={isVisible} setVisible={setVisible} btn_text="Create" title={"Create"} submit={(name: string | undefined,date: string| undefined,price: string | undefined,days: number) => {
        if (name === ''){
          name = undefined
        }
        if (date === '') {
          date = undefined
        }
        if (price === '') {
          price = undefined
        }
        axios.post(apiGateWay + '/schedule/create', {
          name: name,
          lastPayDate: date,
          price: price,
          daysAfter: Number(days)
        })
    }}></ScheduleModal>
    </>
  )
}
