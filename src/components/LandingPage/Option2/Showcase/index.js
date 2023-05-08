import React from 'react';
import {
  IntroContainer,
  IntroH1,
  IntroSubHeading,
  IntroContent,
  ShowcaseGrids,
  Img,
  PictureAndButtonWrapper,
} from './ShowcaseElements';
import grid from '../../../../assets/LandingPage/FPGRID.png';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const Showcase = () => {
  const onSignUp = () => {
    /* console.log('Sign up clicked'); */
    window.location.href = `/signup`;
  };

  const { isAuthenticated } = useSelector((state) => state.profile);
  return (
    <>
      <IntroContainer>
        <IntroContent>
          {/* <IntroH1>Hand Crafted Collections</IntroH1>
          <IntroSubHeading>
            Find the best media for an interest of yours without the bias of a
            platform
          </IntroSubHeading> */}
          <IntroH1>TL;DR</IntroH1>
          <IntroSubHeading>
            1. Aggregate your social media feeds
          </IntroSubHeading>
          <IntroSubHeading>
            2. Take control of your feed's algorithm
          </IntroSubHeading>
          <IntroSubHeading>
            3. Save media by topic, not by platform
          </IntroSubHeading>
        </IntroContent>
        <PictureAndButtonWrapper>
          <ShowcaseGrids>
            <Img src={grid} />
          </ShowcaseGrids>
          {isAuthenticated ? (
            <></>
          ) : (
            <>
              <Button
                onClick={() => onSignUp()}
                style={{
                  width: '250px',
                  marginTop: '7vh',
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </PictureAndButtonWrapper>
      </IntroContainer>
    </>
  );
};

export default Showcase;
