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
} from './InfoSectionElements';
import LandingImage from '../../../assets/LandingPage/DiscoverSection.png';
import Blur from '../../../assets/LandingPage/Blurs.png';
import Button from 'react-bootstrap/Button';

const IntroSection = () => {
  return (
    <>
      <IntroContainer>
        <IntroRoundedDiv>
          <Blurs src={Blur} />
          <IntroImage src={LandingImage} />
        </IntroRoundedDiv>
        <IntroContent>
          <IntroH1>Set One's Sights On</IntroH1>
          <IntroSubHeading>Phrase of Sight</IntroSubHeading>
          <IntroP>Bringing intention to your content consumption</IntroP>
          <Button
            variant='primary'
            style={{
              fontSize: '20px',
              padding: '7px 20px',
              marginTop: '20px',
            }}
          >
            Sign in with Google
          </Button>
        </IntroContent>
      </IntroContainer>
    </>
  );
};

export default IntroSection;
