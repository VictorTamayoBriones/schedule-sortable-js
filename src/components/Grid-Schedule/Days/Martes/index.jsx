import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DayItem, DaysUl } from "../../style";

export const Martes = () =>{

    const [martes, setMartes]=useState([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    useEffect(()=>{
        if( martes.length === 14 ){
            const martesTemp = [...martes];
            martesTemp.pop();
            setMartes(martesTemp)
        }
    },[martes])

    return(
        <DaysUl className="martes">
            <p>Martes</p>
            <ReactSortable list={martes} setList={setMartes} multiDrag group='schedule'  >
                {
                    martes.map((item, i)=>(
                        <DayItem key={ `${item}-${i}` } bg={item?.color} >
                            <p>{item?.subject}</p>
                            <p>{item?.name}</p>
                            <p>{item?.classroom}</p>
                        </DayItem>
                    ))
                }
            </ReactSortable>
        </DaysUl>
    )
}