import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import Menu from './Menu';
import { Container, Body, Footer } from './FeedCardElements';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function FeedCard({ videoId }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (showMenu) => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <Body>
        <YouTubeVideo videoId={videoId} />
      </Body>
      <Footer>
        <Menu />
      </Footer>
    </Container>
  );
}

export default FeedCard;
