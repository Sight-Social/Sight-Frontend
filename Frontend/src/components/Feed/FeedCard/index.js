import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import Menu from './Menu';
import { Container, Body, Footer } from './FeedCardElements';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function FeedCard() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (showMenu) => {
    setShowMenu(!showMenu);
  };
  const user = useSelector((state) => state.user);

  const insight = user.subscriptions[0].insights[0];

  return (
    <Container>
      <Body>
        <YouTubeVideo videoId={insight.videoId} />
      </Body>
      <Footer>
        <Menu />
      </Footer>
    </Container>
  );
}

export default FeedCard;
