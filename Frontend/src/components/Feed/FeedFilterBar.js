import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Spacer, Container, Header, List, ListItem, Image, ChannelName, StyledButton } from './FeedFilterBarElements';
import { ToggleSwitch } from '../PageComponents/ToggleSwitch/ToggleSwitch';

export function FeedFilterBar() {
  const { subscriptions } = useSelector((state) => state.feed);
  const [activeSubscriptions, setActiveSubscriptions] = useState({});

  const toggleSubscription = (subscriptionId) => {
    setActiveSubscriptions((prevState) => ({
      ...prevState,
      [subscriptionId]: !prevState[subscriptionId],
    }));
  };

  return (
    <Container>
        <Spacer />
        <List>
        <Header>Subscriptions</Header>
            {subscriptions &&
                subscriptions.map((subscription) => {
                    const isActive = activeSubscriptions[subscription.id];
                    return (
                        <ListItem
                            key={subscription.id}
                            active={isActive}
                            onClick={() => toggleSubscription(subscription.id)}
                        >
                            <ToggleSwitch active={isActive} />
                            <Image src={subscription.insights[0].thumbnail} />
                            <ChannelName>{subscription.channelName}</ChannelName>
                        </ListItem>
                    );
                })}
            <ListItem>
                <StyledButton>Save</StyledButton>
            </ListItem>
        </List>
        <List>
            <Header>Source</Header>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <ChannelName>YouTube</ChannelName>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <ChannelName>Spotify</ChannelName>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <ChannelName>Twitter</ChannelName>
            </ListItem>
            <ListItem>
                <StyledButton>Save</StyledButton>
            </ListItem>
        </List>
        <List>
            <Header>Media Type</Header>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <ChannelName>Video</ChannelName>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={true} />
                <ChannelName>Podcasts</ChannelName>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={false} />
                <ChannelName>Tweets</ChannelName>
            </ListItem>
            <ListItem>
                <StyledButton>Save</StyledButton>
            </ListItem>
        </List>
    </Container>
    );
}
