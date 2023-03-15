import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Container, Header, List, ListItem, Image, ChannelName } from './FeedFilterBarElements';
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
        </List>
    </Container>
    );
}
