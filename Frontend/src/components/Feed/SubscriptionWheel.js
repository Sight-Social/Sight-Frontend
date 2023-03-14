import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer, Container, ChannelAvatar, ChannelName } from './SubscriptionWheelElements';
import { SubscriptionHeader } from './SubscriptionWheelElements';
import { Carousel } from 'react-bootstrap';

function SubscriptionWheel() {
    const user = useSelector((state) => state.user);
    return (
        <>
        <SubscriptionHeader>Subscriptions</SubscriptionHeader>
        <MainContainer>
        { user.subscriptions.map((subscription) => (
            <Container>
                <ChannelAvatar 
                key={subscription.id}
                src={subscription.insights[0].thumbnail}
                alt={subscription.channelName}
                />
                <ChannelName>{subscription.channelName}</ChannelName>
            </Container>
        ))}
        </MainContainer>
        </>
    ) 
}

export default SubscriptionWheel;
