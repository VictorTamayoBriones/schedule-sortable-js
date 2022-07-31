import styled from 'styled-components';

export const ListTeachersContainer = styled.section`
    width: 20%;
    height: 100vh;
    padding: 10px;
`;

export const TeacherList = styled.ul`
    width: 100%;
    height: 100%;
`;

export const TeacherCard = styled.li`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: ${(props)=> props.bg ? props.bg : 'teal'};
    cursor: grab;

    &:active{
        margin: 0;
    }
`;