import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../features/feed/feedSlice';
import { useState } from 'react';
import { Spacer, Container, Header, List, ListItem, Image, Label, StyledButton,
        SubscriptionsContainer } from './FeedFilterBarElements';
import { ToggleSwitch } from '../PageComponents/ToggleSwitch/ToggleSwitch';
import { FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa';

export function FeedFilterBar() {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.feed);
  const { filters } = useSelector((state) => state.feed);

  const handleToggle = (type, id) => {
        const newFilters = filters;
        console.log('newFilters: ', newFilters)
        //Add or remove filter from filters object in store
        switch (type) {
            case "subscription":
                if (newFilters === undefined) {
                    newFilters.subscriptions.push(id);
                }
                else if (newFilters.subscriptions.includes(id)) {
                    newFilters.subscriptions = newFilters.subscriptions.filter(
                        (subscription) => subscription !== id
                    );
                }
                else {
                    newFilters.subscriptions.push(id);
                }
                break;
            case "source":
                if (newFilters === undefined) {
                    newFilters.source.push(id);
                }
                else if (newFilters.source.includes(id)) {
                    newFilters.source = newFilters.source.filter(
                        (source) => source !== id
                    );
                }
                else {
                    newFilters.source.push(id);
                }
                break;
            case "mediaType":
                if (newFilters === undefined) {
                    newFilters.mediaType.push(id);
                }
                else if (newFilters.mediaType.includes(id)) {
                    newFilters.mediaType = newFilters.mediaType.filter(
                        (mediaType) => mediaType !== id
                    );
                }
                else {
                    newFilters.mediaType.push(id);
                }
                break;
            default:
                console.log('Error: Invalid filter type');
                break;
        }
        console.log('newFilters end: ', newFilters);
        dispatch(setFilters(newFilters));
    }
    
  return (
    <Container>
        <Spacer />
        <SubscriptionsContainer>
        <List>
        <Header>Subscriptions</Header>
            {subscriptions.map((subscription) => {
                return (
                    <ListItem
                        key={subscription.id}
                        onClick={() => handleToggle("subscription", subscription.id)}
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
            <ListItem active={true} onChange={() => handleToggle("source", "YouTube")}>
                <ToggleSwitch active={true} />
                <FaYoutube style={{color:"#FF0000", margin: "5px"}}/>
                <Label>YouTube</Label>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} onChange={() => handleToggle("source", "Spotify")}/>
                <FaSpotify style={{color:"#1DB954", margin: "5px"}}/>
                <Label>Spotify</Label>
            </ListItem>
            <ListItem active={true}>
                <ToggleSwitch active={true} onChange={() => handleToggle("source", "Twitter")}/>
                <FaTwitter style={{color:"#00acee", margin: "5px"}}/>
                <Label>Twitter</Label>
            </ListItem>
            <ListItem>
            </ListItem>
        </List>
        <List>
            <Header>Media Type</Header>
            <ListItem active={true}>
                <ToggleSwitch active={true} onChange={() => handleToggle("video", "video")}/>
                <Label>Video</Label>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={true} onChange={() => handleToggle("podcast", "podcast")}/>
                <Label>Podcasts</Label>
            </ListItem>
            <ListItem active={false}>
                <ToggleSwitch active={false} onChange={() => handleToggle("tweet", "tweet")}/>
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
