import styled from 'styled-components';
import { HiOutlinePencil } from 'react-icons/hi'
import { Dropdown } from 'react-bootstrap';

export const DropdownContainer = styled(Dropdown)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin: 0px;
    padding: 0px;
    margin-top: 5px;
`;

export const DropdownItem = styled(Dropdown.Item)`
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    border: none;
    padding: 5px;
    text-decoration: none;
    width: 100%;
    resize: none;
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

