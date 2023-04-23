import React from 'react';
import {
  IntroContainer,
  IntroH1,
  IntroSubHeading,
  IntroContent,
  ShowcaseGrids,
  Img,
} from './ShowcaseElements';
import grid from '../../../../assets/LandingPage/FPGRID.png';

const Showcase = () => {
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
        <ShowcaseGrids>
          <Img src={grid} />
        </ShowcaseGrids>
      </IntroContainer>
    </>
  );
};

export default Showcase;
