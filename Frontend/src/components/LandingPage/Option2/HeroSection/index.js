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
  ImageContainer,
  ImageLeft,
  ImageRight,
  ImageMiddle,
} from './HeroSectionElements';
import LandingImage from '../../../../assets/LandingPage/DiscoverSection.png';
import Blur from '../../../../assets/LandingPage/Blurs.png';
import Button from 'react-bootstrap/Button';
import Insta from '../../../../assets/IconTransistion/Insta.png';
import TikTok from '../../../../assets/IconTransistion/TikTok.png';
import Sight from '../../../../assets/IconTransistion/Sight.png';
import Twitter from '../../../../assets/IconTransistion/Twitter.png';
import YouTube from '../../../../assets/IconTransistion/YouTube.png';
import Reddit from '../../../../assets/IconTransistion/Reddit.png';
import LinkedIn from '../../../../assets/IconTransistion/LinkedIn.png';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';

const HeroSection = () => {
  /* IL1 IL2 IL3 Middle IR3 IR2 IR1 */
  const ImageLeft1 = styled.img`
    position: absolute;
    left: 0;
    margin-left: 50px;
    transition: all 0.1s ease;
    height: 75px;
  `;
  const ImageLeft2 = styled.img`
    position: absolute;
    left: 0;
    margin-left: 160px;
    transition: all 0.1s ease;
    height: 70px;
  `;
  const ImageLeft3 = styled.img`
    position: absolute;
    left: 0;
    margin-left: 300px;
    transition: all 0.5s ease;
    height: 75px;
  `;
  const ImageRight3 = styled.img`
    position: absolute;
    right: 0;
    margin-right: 300px;
    transition: all 0.5s ease;
    height: 75px;
  `;
  const ImageRight2 = styled.img`
    position: absolute;
    right: 0;
    margin-right: 175px;
    transition: all 0.25s ease;
    height: 75px;
  `;
  const ImageRight1 = styled.img`
    position: absolute;
    right: 0;
    margin-right: 50px;
    transition: all 0.1s ease;
    height: 100px;
  `;
  const leftRef1 = useRef();
  const leftRef2 = useRef();
  const leftRef3 = useRef();
  const rightRef1 = useRef();
  const rightRef2 = useRef();
  const rightRef3 = useRef();
  /* 
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const screenWidth = window.innerWidth;

    const maxTranslation = screenWidth / 2 - leftRef1.current.clientWidth / 2;
    const translation = Math.min(scrollTop, maxTranslation);

    leftRef1.current.style.transform = `translateX(${translation}px)`;
    leftRef2.current.style.transform = `translateX(${translation}px)`;
    leftRef3.current.style.transform = `translateX(${translation}px)`;
    rightRef1.current.style.transform = `translateX(-${translation}px)`;
    rightRef2.current.style.transform = `translateX(-${translation}px)`;
    rightRef3.current.style.transform = `translateX(-${translation}px)`;
  }; */

  /* const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const screenWidth = window.innerWidth;

    const maxTranslation = screenWidth / 2 - leftRef1.current.clientWidth / 2;
    const translation = Math.min(scrollTop, maxTranslation);

    if (scrollTop < maxTranslation) {
      leftRef1.current.style.transform = `translateX(${translation}px)`;
      leftRef2.current.style.transform = `translateX(${translation}px)`;
      leftRef3.current.style.transform = `translateX(${translation}px)`;
      rightRef1.current.style.transform = `translateX(-${translation}px)`;
      rightRef2.current.style.transform = `translateX(-${translation}px)`;
      rightRef3.current.style.transform = `translateX(-${translation}px)`;
    }
  }; */
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const screenWidth = window.innerWidth;
    const imageWidth = leftRef1.current.clientWidth;
    const maxTranslation = screenWidth / 2 - imageWidth / 2;
    const minTranslation = -maxTranslation;
    let translation = scrollTop;

    if (translation > maxTranslation) {
      translation = maxTranslation;
    } else if (translation < minTranslation) {
      translation = minTranslation;
    }

    leftRef1.current.style.transform = `translateX(${translation}px)`;
    leftRef2.current.style.transform = `translateX(${translation}px)`;
    leftRef3.current.style.transform = `translateX(${translation}px)`;
    rightRef1.current.style.transform = `translateX(-${translation}px)`;
    rightRef2.current.style.transform = `translateX(-${translation}px)`;
    rightRef3.current.style.transform = `translateX(-${translation}px)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  window.addEventListener('scroll', handleScroll);
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
          <ImageContainer>
            <ImageLeft1 src={Insta} ref={leftRef1} />
            <ImageLeft2 src={YouTube} ref={leftRef2} />
            <ImageLeft3 src={Reddit} ref={leftRef3} />
            <ImageMiddle src={Sight} />
            <ImageRight3 src={Twitter} ref={rightRef3} />
            <ImageRight2 src={LinkedIn} ref={rightRef2} />
            <ImageRight1 src={TikTok} ref={rightRef1} />
          </ImageContainer>
          {/* <Button
            variant='primary'
            style={{
              fontSize: '20px',
              padding: '7px 20px',
              marginTop: '50px',
            }}
          >
            Sign in with Google
          </Button> */}
          {/* <IntroP>Bringing intention to your content consumption</IntroP> */}
        </IntroContent>
      </IntroContainer>
    </>
  );
};

export default HeroSection;
