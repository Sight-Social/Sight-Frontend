import React from 'react';
import {
  IntroContainer,
  IntroH1,
  IntroSubHeading,
  IntroP,
  IntroContent,
  IntroImage,
  IntroRoundedDiv,
  Blurs,
} from './HeroSectionElements';
import LandingImage from '../../../../assets/LandingPage/DiscoverSection.png';
import Blur from '../../../../assets/LandingPage/Blurs.png';
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
  return (
    <>
      <IntroContainer>
        {/* <IntroRoundedDiv>
          <Blurs src={Blur} />
          <IntroImage src={LandingImage} />
        </IntroRoundedDiv> */}
        <IntroContent>
          <IntroH1>All your media</IntroH1>
          <IntroSubHeading>In one feed</IntroSubHeading>
          <Button
            variant='primary'
            style={{
              fontSize: '20px',
              padding: '7px 20px',
              marginTop: '50px',
            }}
          >
            Sign in with Google
          </Button>
          {/* <IntroP>Bringing intention to your content consumption</IntroP> */}
        </IntroContent>
      </IntroContainer>
    </>
  );
};

export default HeroSection;
