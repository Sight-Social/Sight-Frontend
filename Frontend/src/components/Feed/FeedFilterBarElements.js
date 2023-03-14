import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const Container = styled.div`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
`;

export const Select = styled.select`
    color: white;
    width: 200px;

    border-radius: 5px;
`;

export const Option = styled.option`
    color: white;
`;

export const Input = styled.input`
    color: white;
`;

export const FilterButton = styled(Button)`
    variant: secondary;
    min-width: 100px;
`;