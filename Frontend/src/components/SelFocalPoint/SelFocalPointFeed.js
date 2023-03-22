import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadMoreCards,
  setQueue,
} from '../../features/focalpoints/focalpointSlice';
import Card from '../Feed/FeedCard/index';
import Menu from '../Feed/FeedCard/index';
import SearchBar from '../Feed/FeedSearchBar';
import RefreshButton from '../PageComponents/RefreshButton/RefreshButton';
import {
  MainContainer,
  RefreshSearchContainer,
  Container,
  Header,
  Text,
} from './SelFocalPointFeedElements';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
//The feed is currently getting fed from the state.feed.queue
//This is a temporary solution until we can get the feed from the backend
//The feed should be fed from the backend and the state.feed.queue should be removed
//The feed for selFocalPoint should be fed directly from the backend

export function SelFocalPointFeed() {
  const url = window.location.href;
  let focalpointId = url.split('/')[url.split('/').length - 1];
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.profile);
  let focalpointIndex = useSelector((state) =>
    state.focalpoint.fp_array.findIndex(
      (focalpoint) => focalpoint._id === focalpointId
    )
  );
  const insights = useSelector(
    (state) =>
      state.focalpoint.fp_array.find(
        (focalpoint) => focalpoint._id === focalpointId
      ).insights
  );
  const catalog = useSelector(
    (state) => state.focalpoint.fp_array[focalpointIndex].catalog
  );
  const queue = useSelector(
    (state) => state.focalpoint.fp_array[focalpointIndex].queue
  );
  const filters = useSelector(
    (state) => state.focalpoint.fp_array[focalpointIndex].filters
  );

  async function handleRefresh() {
    console.log('handleRefresh');
    const action = await dispatch(
      loadMoreCards({
        queue,
        filters,
        catalog,
        numCardsToAdd: 3,
      })
    );
    const newQueue = {
      focalpointIndex: focalpointIndex,
      queue: action.payload,
    };
    dispatch(setQueue(newQueue));
  }
  //Intersection observer
  //Creates an observer that loads more cards when the sentinel is in view
  //View is defined as the bottom of the sentinel being at the bottom of the screen
  //The sentinel is a div with a height of 1px
  //The sentinel is placed at the bottom of the cards
  useEffect(() => {
    if (isLoading && observerRef.current) {
      setIsLoading(false);
      observerRef.current = null;
      handleRefresh();
    }
  }, [isLoading]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          observerRef.current = entry.target;
        }
      });
    }, options);
    observer.observe(document.querySelector('#sentinel'));
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <MainContainer>
      <Header>
        {/* <Text>Feed</Text> */}
        <RefreshSearchContainer>
          <RefreshButton />
          <Form
                style={{
                  marginRight: '10px',
                  marginLeft: '20px',
                  marginTop: '1rem',
                }}
              >
                <Form.Group
                  className='mb-3'
                  controlId='formBasicEmail'
                  style={{
                    width: '300px',
                  }}
                >
                  <Form.Control type='email' placeholder='Search' />
                </Form.Group>
              </Form>
          {/* <SearchBar /> */}
        </RefreshSearchContainer>
      </Header>
      <Container>
        {queue.map((card, index) => (
          <Card
            key={card.videoId}
            insight={{
              insightId: card.insightId,
              channelId: card.channelId,
              videoId: card.videoId,
              title: card.title,
              description: card.description,
              thumbnail: card.thumbnail,
              source: card.source,
              mediaType: card.mediaType,
              tags: card.tags,
            }}
          />
        ))}
        <div id='sentinel' style={{ height: '1px' }}></div>
      </Container>
    </MainContainer>
  );
}

//add whole insight
//or just add videoId and insightId

//??
