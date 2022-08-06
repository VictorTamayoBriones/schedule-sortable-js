import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DayItem, DaysUl } from "../../style";

export const Jueves = () =>{

    const [jueves, setJueves]=useState([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    useEffect(()=>{
        if( jueves.length === 14 ){
            const juevesTemp = [...jueves];
            juevesTemp.pop();
            setJueves(juevesTemp)
        }
    },[jueves])

    return(
        <DaysUl className="jueves">
            <p>Jueves</p>
            <ReactSortable list={jueves} setList={setJueves} multiDrag group='schedule' >
                {
                    jueves.map((item, i)=>(
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