import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DayItem, DaysUl } from "../../style";

export const Miercoles = () =>{

    const [miercoles, setMiercoles]=useState([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    useEffect(()=>{
        if( miercoles.length === 14 ){
            const miercolesTemp = [...miercoles];
            miercolesTemp.pop();
            setMiercoles(miercolesTemp)
        }
    }, [miercoles])

    return(
        <DaysUl className="miercoles">
            <p>Miercoles</p>
            <ReactSortable list={miercoles} setList={setMiercoles} multiDrag group='schedule'  >
                {
                    miercoles.map((item, i)=>(
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