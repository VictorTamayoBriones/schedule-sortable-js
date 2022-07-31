import { useState } from "react"
import { ReactSortable } from "react-sortablejs";
import { ListTeachersContainer, TeacherCard, TeacherList } from "./style";

export const List = () =>{

    const[maestros, setMaestros]=useState([
        {
            subject: 'Redes II',
            name: 'Francisco Lopez Briones',
            classroom: 'Lab. Redes I',
            hoursPerWeek: 4,
            color: '#7fff81'
        },
        {
            subject: 'Desarrollo web',
            name: 'Francisco Lopez Briones',
            classroom: 'Lab. Redes I',
            hoursPerWeek: 7,
            color: '#fbff7f'
        },
        {
            subject: 'Principios IOT',
            name: 'Jose Marin Rugerio',
            classroom: 'Lab. IOT',
            hoursPerWeek: 3,
            color: '#7fccff'
        },
        {
            subject: 'Ingles VI',
            name: 'Blanca Aurelia Rammirez',
            classroom: 'P4',
            hoursPerWeek: 5,
            color: '#ca7fff'
        },
    ]);

    return(
        <ListTeachersContainer>
            <TeacherList>
                <ReactSortable list={maestros} setList={setMaestros} swap group='schedule' >
                    {
                        maestros.map((item, i)=>(
                            <TeacherCard key={`${item.name}-${i}`} bg={item.color} >
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