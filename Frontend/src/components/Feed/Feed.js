import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './FeedCard/index';
import Menu from './FeedCard/index';
import SearchBar from './FeedSearchBar';
import FilterBar from './FeedFilterBar';
import { MainContainer, Container, Header, ToolBar } from './FeedElements';

export function Feed() {
  const [cards, setCards] = useState([]);
  const [numCards, setNumCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const { subscriptions  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    //Loads cards in a round robin fashion
    const loadCards = () => {
      const newCards = [];
      let indices = subscriptions.map(() => 0);
      let i = 0;
      let loadedAllVideos = false;

      while (!loadedAllVideos) {
        const subscription = subscriptions[i];
        const insights = subscription.insights;
        const index = indices[i];

        if (index < insights.length) {
          newCards.push(
            <Card />
          );
          indices[i]++;
        }

        i++;
        if (i === subscriptions.length) {
          i = 0;
          loadedAllVideos = indices.every(
            (index, j) => index >= subscriptions[j].insights.length
          );
        }
      }
      setCards(newCards);
    };

    loadCards();
  }, [subscriptions]);

  //Intersection observer
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

  useEffect(() => {
    if (isLoading && numCards < cards.length) {
      setNumCards(numCards + 3);
      setIsLoading(false);
    }
  }, [isLoading, numCards, cards]);

  const onToggle = (toggledOffIds) => {
    const newCards = [];
    let indices = subscriptions.map(() => 0);
    let i = 0;
    let loadedAllVideos = false;

    while (!loadedAllVideos) {
      const subscription = subscriptions[i];
      const insights = subscription.insights;
      const index = indices[i];

      if (index < insights.length) {
        if (!toggledOffIds.includes(subscription.channelId)) {
          newCards.push(
            <Card />
          );
        }
        indices[i]++;
      }

      i++;
      if (i === subscriptions.length) {
        i = 0;
        loadedAllVideos = indices.every(
          (index, j) => index >= subscriptions[j].insights.length
        );
      }
    }
    setCards(newCards);
  };

  return (
    <MainContainer>
      <ToolBar>
        <Header>Feed</Header>
        <SearchBar />
      </ToolBar>
      <FilterBar onToggle={onToggle} />
      <Container>
        {cards.slice(0, numCards)}
        <div id="sentinel" style={{ height: '1px' }}></div>
      </Container>
    </MainContainer>
  );
};

export default Feed;
