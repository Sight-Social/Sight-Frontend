import { useSelector, useDispatch } from 'react-redux';
import { setFilters, setQueue, modifyQueue } from '../../features/feed/feedSlice';
import { useState } from 'react';
import { Spacer, Container, Header, List, ListItem, Image, Label, StyledButton,
        SubscriptionsContainer } from './FeedFilterBarElements';
import { ToggleSwitch } from '../PageComponents/ToggleSwitch/ToggleSwitch';
import { FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa';

export function FeedFilterBar() {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.feed);
  const { filters } = useSelector((state) => state.feed);
  const { queue } = useSelector((state) => state.feed);

  const handleToggle = (type, value) => {
//Add or remove filter from filters object in store
    // Create a new object with the updated properties
    const updatedFilters = {
        ...filters,
        [type]: filters[type].includes(value)
        ? filters[type].filter((filterValue) => filterValue !== value)
        : [...filters[type], value],
    };
    dispatch(setFilters(updatedFilters));
    dispatch(modifyQueue({queue: queue, filters: updatedFilters}));
};
    
  return (
    <Container>
        <Spacer />
        <SubscriptionsContainer>
        <List>
        <Header>Subscriptions</Header>
            {subscriptions.map((subscription) => {
                return (
                    <ListItem
                        key={subscription._id}
                        onClick={() => handleToggle("subscriptions", subscription.channelName)}
                    >
                        <ToggleSwitch />
                        <Image src={subscription.insights[0].thumbnail} />
                        <Label>{subscription.channelName}</Label>
                    </ListItem>
                );
            })}
        </List>
        </SubscriptionsContainer>
        <List>
            <Header>Source</Header>
            <ListItem active={true} onClick={() => handleToggle("source", "YouTube")}>
                <ToggleSwitch active={true} />
                <FaYoutube style={{color:"#FF0000", margin: "5px"}}/>
                <Label>YouTube</Label>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} onClick={() => handleToggle("source", "Spotify")}/>
                <FaSpotify style={{color:"#1DB954", margin: "5px"}}/>
                <Label>Spotify</Label>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} onClick={() => handleToggle("source", "Twitter")}/>
                <FaTwitter style={{color:"#00acee", margin: "5px"}}/>
                <Label>Twitter</Label>
            </ListItem>
            <ListItem>
            </ListItem>
        </List>
        <List>
            <Header>Media Type</Header>
            <ListItem active={true}>
                <ToggleSwitch active={true} onClick={() => handleToggle("mediaType", "video")}/>
                <Label>Video</Label>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={true} onClick={() => handleToggle("mediaType", "podcast")}/>
                <Label>Podcasts</Label>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={false} onClick={() => handleToggle("mediaType", "tweet")}/>
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
