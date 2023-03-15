import styled from 'styled-components';
import Button from 'react-bootstrap/Button';


export const Spacer = styled.div`
    height: 105px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    position: sticky;
    top: 0;
    height: 110vh;
    width: 470px;
    overflow-y: scroll;

    //scrollbar
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        //background-color: rgba(0, 0, 0, 0.2);
        background-color: #212529;
        border-radius: 3px;
        height: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: white;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
`;

export const SubscriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;

        //scrollbar
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        //background-color: rgba(0, 0, 0, 0.2);
        background-color: #212529;
        border-radius: 3px;
        height: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #2b9ef0;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
`;

export const Header = styled.h1`
    font-size: 1.4rem;
    width: 100%;
    color: white;
    padding-top: 40px;
`;


export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 30px;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 24px;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    margin-top: 10px;
    padding: 0px;
    background-color: #1E1E1E;
    border: none;
    border-radius: 20px;
    box-shadow: -5px 5px 10px rgba(25, 25, 25, 0.8);
    color: white;
    text-decoration: none;
    width: 60px;
    height: 28px;
    font-size: .845rem;
    line-height: 1.0rem;
    :hover {
        background-color: var(--clr-accent);
    }
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
`;

export const Label = styled.h2`
    font-size: 1.0rem;
    color: white;
`;
