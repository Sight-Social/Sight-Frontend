import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import Menu from './Menu';
import { Container, Body, Footer } from './FeedCardElements';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function FeedCard({ insight }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (showMenu) => {
    setShowMenu(!showMenu);
  };
  if (!insight) {
    return null;
  }
  return (
    <Container>
      <Body>
        <YouTubeVideo videoId={insight.videoId} />
      </Body>
      <Footer>
        <Menu insight={insight} />
      </Footer>
    </Container>
  );
}

export default FeedCard;
