import React from 'react';
import {
  IntroContainer,
  IntroH1,
  IntroSubHeading,
  IntroContent,
  IntroP,
  ShowcaseGrids,
  Img,
} from './ShowcaseElements';
import Button from 'react-bootstrap/Button';
import grid from '../../../../assets/LandingPage/FPGRID.png';

const Showcase = () => {
  return (
    <>
      <IntroContainer>
        <IntroContent>
          <IntroH1>Hand Crafted Collections</IntroH1>
          <IntroSubHeading>
            Find the best media for an interest of yours without the bias of a
            platform
          </IntroSubHeading>

          {/* <IntroP>Bringing intention to your content consumption</IntroP> */}
        </IntroContent>
        <ShowcaseGrids>
          <Img src={grid} />
        </ShowcaseGrids>
      </IntroContainer>
    </>
  );
};

export default Showcase;
