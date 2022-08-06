import { Jueves } from "./Days/Jueves";
import { Lunes } from "./Days/Lunes";
import { Martes } from "./Days/Martes";
import { Miercoles } from "./Days/Miercoles";
import { Viernes } from "./Days/Viernes";
import { Hours } from "./Hours";
import { Days, ScheduleContainer } from "./style";

export const GridSchedule = () =>{


    return(
        <ScheduleContainer>
            <Hours/>
            <Days>
                <Lunes/>
                <Martes/>    
                <Miercoles/>
                <Jueves/>
                <Viernes/>
            </Days>
        </ScheduleContainer>
    )
}