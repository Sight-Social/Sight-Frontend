import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreCards } from '../../features/feed/feedSlice';
import Card from './FeedCard/index';
import Menu from './FeedCard/index';
import SearchBar from './FeedSearchBar';
import FeedFilterBar from './FeedFilterBar';
import { MainContainer, Container, Header, ToolBar } from './FeedElements';

export function Feed() {
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const dispatch = useDispatch();
  const { queue, subscriptions, numCards } = useSelector((state) => state.feed);
  const { isAuthenticated } = useSelector((state) => state.user);

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
      console.log('useEffect: loadMoreCards')
      console.log('queue: ', queue)
      console.log('queue.length: ', queue.length)
      dispatch(
        loadMoreCards({
          queue,
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
        <FeedFilterBar />
        <SearchBar />
      </Header>
      <ToolBar>
        <Menu />
      </ToolBar>
      <Container>
        {queue.map((card, index) => (
          <Card key={card.videoId} insight={{videoId: card.videoId, insightId: card.insightId}} />
        ))}
        <div id="sentinel" style={{ height: '1px' }}></div>
      </Container>
    </MainContainer>
  );
}
