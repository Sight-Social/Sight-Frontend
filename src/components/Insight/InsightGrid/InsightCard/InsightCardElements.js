import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { HiOutlinePencil } from 'react-icons/hi'


export const CardContainer = styled(Card)`
    background-color: var(--clr-gray);
    border-radius: 10px;
    border: none;
    padding: 5px;
    text-decoration: none;
    resize: none;
`;

export const Footer = styled(Card.Footer)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin: 0px;
    padding: 0px;
    margin-top: 5px;
`;

export const NotesIcon = styled(HiOutlinePencil)`
    padding: 0px;
    margin-right: 8px;
    color: white;
    font-size: 21.5px;
    
    :hover {
        color: var(--clr-accent);
    }
`;




