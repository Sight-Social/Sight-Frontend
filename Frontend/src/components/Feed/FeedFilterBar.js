import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Spacer, Container, Header, List, ListItem, Image, Label, StyledButton,
        SubscriptionsContainer } from './FeedFilterBarElements';
import { ToggleSwitch } from '../PageComponents/ToggleSwitch/ToggleSwitch';
import { FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa';

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
        <SubscriptionsContainer>
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
                            <Label>{subscription.channelName}</Label>
                        </ListItem>
                    );
                })}
            <ListItem>
            </ListItem>
        </List>
        </SubscriptionsContainer>
        <List>
            <Header>Source</Header>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <FaYoutube style={{color:"#FF0000", margin: "5px"}}/>
                <Label>YouTube</Label>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <FaSpotify style={{color:"#1DB954", margin: "5px"}}/>
                <Label>Spotify</Label>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <FaTwitter style={{color:"#00acee", margin: "5px"}}/>
                <Label>Twitter</Label>
            </ListItem>
            <ListItem>
            </ListItem>
        </List>
        <List>
            <Header>Media Type</Header>
            <ListItem active={true}>
                <ToggleSwitch active={true} />
                <Label>Video</Label>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={true} />
                <Label>Podcasts</Label>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={false} />
                <Label>Tweets</Label>
            </ListItem>
            <ListItem>
            </ListItem>
        </List>
        <List>
        <ListItem>
            <StyledButton>Save</StyledButton>
        </ListItem>
        </List>
    </Container>
    );
}
