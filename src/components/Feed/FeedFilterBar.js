import { useSelector, useDispatch } from 'react-redux';
import {
  setFilters,
  modifyQueue,
  setQueue,
} from '../../features/feed/feedSlice';
import {
  Spacer,
  Container,
  Header,
  List,
  ListItem,
  Image,
  Label,
  StyledButton,
  SubscriptionsContainer,
} from './FeedFilterBarElements';
import { ToggleSwitch } from '../PageComponents/ToggleSwitch/ToggleSwitch';
import { FaYoutube, FaSpotify, FaTwitter } from 'react-icons/fa';

export function FeedFilterBar() {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.feed);
  const { filters } = useSelector((state) => state.feed);
  const { queue } = useSelector((state) => state.feed);

  async function handleToggle(type, value) {
    //Add or remove filter from filters object in store
    // Create a new object with the updated properties
    /* console.log('type:', type, 'value:', value); */
    const updatedFilters = {
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter((filterValue) => filterValue !== value)
        : [...filters[type], value],
    };
    dispatch(setFilters(updatedFilters));
    const newQueue = await dispatch(
      modifyQueue({ queue: queue, filters: updatedFilters })
    );
    await dispatch(setQueue(newQueue.payload));
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
                key={subscription._id}
                onClick={() =>
                  handleToggle('subscriptions', subscription.channelId)
                }
              >
                <ToggleSwitch />
                <Image src={subscription.channelAvatar} />
                <Label>{subscription.channelName}</Label>
              </ListItem>
            );
          })}
        </List>
      </SubscriptionsContainer>
      <List>
        <Header>Source</Header>
        <ListItem onClick={() => handleToggle('source', 'YouTube')}>
          <ToggleSwitch />
          <FaYoutube style={{ color: '#FF0000', margin: '5px' }} />
          <Label>YouTube</Label>
        </ListItem>
        <ListItem onClick={() => handleToggle('source', 'Spotify')}>
          <ToggleSwitch />
          <FaSpotify style={{ color: '#1DB954', margin: '5px' }} />
          <Label>Spotify</Label>
        </ListItem>
        <ListItem onClick={() => handleToggle('source', 'Twitter')}>
          <ToggleSwitch />
          <FaTwitter style={{ color: '#00acee', margin: '5px' }} />
          <Label>Twitter</Label>
        </ListItem>
        <ListItem></ListItem>
      </List>
      <List>
        <Header>Media Type</Header>
        <ListItem onClick={() => handleToggle('mediaType', 'video')}>
          <ToggleSwitch />
          <Label>Video</Label>
        </ListItem>
        <ListItem onClick={() => handleToggle('mediaType', 'podcast')}>
          <ToggleSwitch />
          <Label>Podcasts</Label>
        </ListItem>
        <ListItem onClick={() => handleToggle('mediaType', 'tweet')}>
          <ToggleSwitch />
          <Label>Tweets</Label>
        </ListItem>
        <ListItem></ListItem>
      </List>
      <List>
        <ListItem>
          <StyledButton>Save</StyledButton>
        </ListItem>
      </List>
    </Container>
  );
}
