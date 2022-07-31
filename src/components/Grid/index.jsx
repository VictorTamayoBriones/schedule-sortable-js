import { useState } from "react"
import { ReactSortable } from "react-sortablejs";

export const Grid = () =>{

    const [lunes, setLunes]=useState([{},{},{},{},{}]);
    const [martes, setMartes]=useState([{},{},{},{},{}]);
    const [miercoles, setMiercoles]=useState([{},{},{},{},{}]);
    const [jueves, setJueves]=useState([{},{},{},{},{}]);
    const [viernes, setViernes]=useState([{},{},{},{},{}]);

    return(
        <div className="grid">
            <h2>Grid...</h2>
            <div className="days">
                <ul className="lunes">
                    <p>Lunes</p>
                    <ReactSortable list={lunes} setList={setLunes} multiDrag group='schedule'  >
                        {
                            lunes.map((item, i)=>(
                                <li key={ `${item}-${i}` } >
                                    <p>{item?.subject}</p>
                                    <p>{item?.name}</p>
                                    <p>{item?.classroom}</p>
                                </li>
                            ))
                        }
                    </ReactSortable>
                </ul>

                <ul className="martes">
                <p>Martes</p>
                    <ReactSortable list={martes} setList={setMartes} multiDrag group='schedule'  >
                        {
                            martes.map((item, i)=>(
                                <li key={ `${item}-${i}` } >
                                    <p>{item?.subject}</p>
                                    <p>{item?.name}</p>
                                    <p>{item?.classroom}</p>
                                </li>
                            ))
                        }
                    </ReactSortable>
                </ul>

                <ul className="miercoles">
                    <p>Miercoles</p>
                    <ReactSortable list={miercoles} setList={setMiercoles} multiDrag group='schedule'  >
                        {
                            miercoles.map((item, i)=>(
                                <li key={ `${item}-${i}` } >
                                    <p>{item?.subject}</p>
                                    <p>{item?.name}</p>
                                    <p>{item?.classroom}</p>
                                </li>
                            ))
                        }
                    </ReactSortable>
                </ul>

                <ul className="jueves">
                    <p>Jueves</p>
                    <ReactSortable list={jueves} setList={setJueves} multiDrag group='schedule'  >
                        {
                            jueves.map((item, i)=>(
                                <li key={ `${item}-${i}` } >
                                    <p>{item?.subject}</p>
                                    <p>{item?.name}</p>
                                    <p>{item?.classroom}</p>
                                </li>
                            ))
                        }
                    </ReactSortable>
                </ul>

                <ul className="viernes">
                    <p>Viernes</p>
                    <ReactSortable list={viernes} setList={setViernes} multiDrag group='schedule'  >
                        {
                            viernes.map((item, i)=>(
                                <li key={ `${item}-${i}` } >
                                    <p>{item?.subject}</p>
                                    <p>{item?.name}</p>
                                    <p>{item?.classroom}</p>
                                </li>
                            ))
                        }
                    </ReactSortable>
                </ul>
            </div>
        </div>
    )
}