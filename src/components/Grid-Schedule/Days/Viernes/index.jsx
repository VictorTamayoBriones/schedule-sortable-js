import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DayItem, DaysUl } from "../../style";

export const Viernes = () =>{

    const [viernes, setViernes]=useState([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    useEffect(()=>{

        if( viernes.length === 14 ){
            const viernesTemp = [...viernes];
            viernesTemp.pop();
            setViernes(viernesTemp)
        }
        
    }, [ viernes])

    return(
        <DaysUl className="viernes">
            <p>Viernes</p>
            <ReactSortable list={viernes} setList={setViernes} multiDrag group='schedule'  >
                {
                    viernes.map((item, i)=>(
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