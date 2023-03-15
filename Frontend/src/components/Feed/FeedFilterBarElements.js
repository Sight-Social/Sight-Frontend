import styled from 'styled-components';
import Button from 'react-bootstrap/Button';


export const Spacer = styled.div`
    height: 80px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
`;

export const Header = styled.h1`
    margin-top: 30px;
    font-size: 1.4rem;
    width: 100%;
    color: white;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 24px;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    background-color: #1E1E1E;
    border: none;
    border-radius: 20px;
    box-shadow: -5px 5px 10px rgba(25, 25, 25, 0.8);
    color: white;
    text-decoration: none;
    margin: 10px;
    width: 70px;
    height: 35px;
    font-size: 1.0rem;
    :hover {
        background-color: var(--clr-accent);
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
`;

export const ChannelName = styled.h2`
    font-size: 1.0rem;
    color: white;
`;
