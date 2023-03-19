import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import { Spotify } from 'react-spotify-embed';
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
  console.log('FeedCard source: ' + insight.source)
  if (insight.source === 'YouTube') {
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
  if (insight.source === 'Spotify') {
    const link = `https://open.spotify.com/episode/${insight.videoId}`;
    return (
      <Spotify link={link} />
    );
  }
}

export default FeedCard;
