import { useEffect, useState } from "react"
import { createFullHours } from "../../../helpers/createFullHours";
import { HoursContainer } from "./style";

export const Hours = () =>{

    const [bothHours, setBothHours]=useState({initial:7,finally: 19});

    const [fullHours, setFullHours]=useState([]);


    useEffect(()=>{
        setFullHours(createFullHours(bothHours.initial, bothHours.finally))
    }, [])

    return(
        <HoursContainer>
            {fullHours.map(hour => (
                <p key={`id-${hour}`} >{hour}:00 {hour >= 12 ? 'pm' : 'am'}</p>
            ))}
        </HoursContainer>
    )
}