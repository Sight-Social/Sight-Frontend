import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
`;

export const Header = styled.h1`
    margin-top: 80px;
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
    width: 100%;
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
