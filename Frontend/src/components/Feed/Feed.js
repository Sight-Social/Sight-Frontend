import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreCards } from '../../features/feed/feedSlice';
import Card from './FeedCard/index';
import Menu from './FeedCard/index';
import SearchBar from './FeedSearchBar';
import FeedFilterBar from './FeedFilterBar';
import RefreshButton from '../PageComponents/RefreshButton/RefreshButton';
import {
  MainContainer,
  RefreshSearchContainer,
  Container,
  Header,
  Text,
} from './FeedElements';

export function Feed() {
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const dispatch = useDispatch();
  const { queue, subscriptions, filters } = useSelector((state) => state.feed);
  const { isAuthenticated } = useSelector((state) => state.profile);
  console.log('Feed queue: ', queue);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('Not authenticated');
      return;
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isLoading && observerRef.current) {
      setIsLoading(false);
      observerRef.current = null;
      console.log('useEffect: loadMoreCards');
      console.log('queue: ', queue);
      console.log('queue.length: ', queue.length);
      dispatch(
        loadMoreCards({
          queue,
          filters,
          subscriptions,
          numCardsToAdd: 3,
        })
      );
    }
  }, [isLoading]);

  //Intersection observer
  //Creates an observer that loads more cards when the sentinel is in view
  //View is defined as the bottom of the sentinel being at the bottom of the screen
  //The sentinel is a div with a height of 1px
  //The sentinel is placed at the bottom of the cards
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
        <Text>Feed</Text>
        <RefreshSearchContainer>
          <RefreshButton />
          <SearchBar />
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
