import { useState } from "react"
import { ReactSortable } from "react-sortablejs";
import { ListTeachersContainer, TeacherCard, TeacherList } from "./style";

export const List = () =>{

    const[maestros, setMaestros]=useState([
        {
            subject: 'Redes II',
            name: 'Francisco Lopez Briones',
            classroom: 'Lab. Redes I',
            hoursPerWeek: 4
        },
        {
            subject: 'Desarrollo web',
            name: 'Francisco Lopez Briones',
            classroom: 'Lab. Redes I',
            hoursPerWeek: 7
        },
        {
            subject: 'Principios IOT',
            name: 'Jose Marin Rugerio',
            classroom: 'Lab. IOT',
            hoursPerWeek: 3
        },
        {
            subject: 'Ingles VI',
            name: 'Blanca Aurelia Rammirez',
            classroom: 'P4',
            hoursPerWeek: 5
        },
    ]);

    return(
        <ListTeachersContainer>
            <TeacherList>
                <ReactSortable list={maestros} setList={setMaestros} multiDrag group='schedule' >
                    {
                        maestros.map((item, i)=>(
                            <TeacherCard key={`${item.name}-${i}`} >
                                <h2>{item.subject}</h2>
                                <h3>{item.name}</h3>
                                <h3>{item.classroom}</h3>
                            </TeacherCard>
                        ))
                    }
                </ReactSortable>
            </TeacherList>
        </ListTeachersContainer>
    )
}