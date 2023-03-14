import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const SubscriptionHeader = styled.h1`
    background-color: black;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    padding-left: 4%;
    padding-top: 3%;
    padding-bottom: 1%;
`;


export const MainContainer = styled(Carousel)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: black;
`;

export const Container = styled(Carousel.Item)`
    align-items: center;
    text-align: center;
    margin-right: 40px;
`;

export const ChannelAvatar = styled.img`
    border-radius: 30px;
    margin: '0 10px';
    border: '1px solid white';
`;

export const ChannelName = styled.h6`
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    padding-top: 10px;
`;