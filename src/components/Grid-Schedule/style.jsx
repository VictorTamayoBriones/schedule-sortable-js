import styled from 'styled-components';

export const ScheduleContainer = styled.section`
    width: 80%;
    overflow: scroll;
    display: flex;
    justify-content: space-between;
`;

export const Days = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    ul{
        &:nth-child(even){
            border-left: solid 1px #000;
        }
        &:nth-child(odd){
            border-left: solid 1px #000;
        }
    }
`;

export const DaysUl = styled.ul`
    width: 100%;
    margin: 10px 0;
    list-style: none;
    border-top: solid 1px #000;
    border-bottom: solid 1px #000;
    li{
        &:nth-child(odd){
            border-top: solid 1px #000;
        }
        &:nth-child(odd){
            border-bottom: solid 1px #000;
        }
    }
`;

export const DayItem = styled.li`
    width: 100%;
    height: 100px;
    max-height: 100px;
    min-height: 100px;
    background: ${(props) => props.bg ? props.bg : 'transparent'};
`;