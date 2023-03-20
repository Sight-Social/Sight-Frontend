import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import { Spotify } from 'react-spotify-embed';
import AddMenu from './AddMenu';
import { RelatedVideos } from './RelatedVideos';
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
          <RelatedVideos insight={insight} />
          <AddMenu insight={insight} />
        </Footer>
      </Container>
    );
  }
  if (insight.source === 'Spotify') {
    const link = `https://open.spotify.com/episode/${insight.videoId}`;
    return (
      <Container>
        <Body>  
          <Spotify link={link} />
        </Body>
        <Footer>
          <RelatedVideos insight={insight} />
          <AddMenu insight={insight} />
        </Footer>
      </Container>
    );
  }
}

export default FeedCard;
