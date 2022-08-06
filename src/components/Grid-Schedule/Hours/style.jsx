import styled from 'styled-components';

export const HoursContainer = styled.div`
    width: 10%;
    margin-top: 29px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);

    p{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;