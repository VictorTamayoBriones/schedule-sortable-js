import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DayItem, DaysUl } from "../../style";

export const Lunes = () =>{
    const [lunes, setLunes]=useState([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    useEffect(()=>{
        if( lunes.length === 14 ){
            const lunesTemp = [...lunes];
            lunesTemp.pop();
            setLunes(lunesTemp)
        }
    }, [lunes])

    return(
        <DaysUl className="lunes">
            <p>Lunes</p>
            <ReactSortable list={lunes} setList={setLunes} swap group='schedule'>
                {
                    lunes.map((item, i)=>(
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