import { useEffect, useState } from "react"
import { ReactSortable } from "react-sortablejs";
import { DayItem, Days, DaysUl, ScheduleContainer } from "./style";

export const Grid = () =>{

    const [lunes, setLunes]=useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [martes, setMartes]=useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [miercoles, setMiercoles]=useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [jueves, setJueves]=useState([{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [viernes, setViernes]=useState([{},{},{},{},{},{},{},{},{},{},{},{}]);


    useEffect(()=>{
        if( lunes.length === 13 ){
            const lunesTemp = [...lunes];
            lunesTemp.pop();
            setLunes(lunesTemp)
        }
        
        
    }, [lunes])

    return(
        <ScheduleContainer>
            <Days>
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
            </Days>
        </ScheduleContainer>
    )
}