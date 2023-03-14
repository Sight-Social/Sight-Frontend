/* NOTE: You can duplicate the above block of code to create another data section below it!
   - Make sure you import this into src/pages/index.js at the top, alog with add it into that files fragment
   - A fragment is like a div class but simply wrapped by <> Components in here </> 
   - The true or fales values correlate to the InfoElements.js line that are if else statements, for example:
   background: ${({lightBg}) => (lightBg ? 'var(--clr-light)' : 'var(--clr-dark)')}; -> is saying that the section
   will have a white background if true and a dark background if false. Below will be an example of the opposite values.
*/
import fp from '../../../assets/LandingPage/FocalPoints.png';
import feedImg from '../../../assets/LandingPage/FeedSettings.png';
import discoverImg from '../../../assets/LandingPage/DiscoverSection.png';

export const FocalPoints = {
  id: 'focalpoints',
  /* Main Color Choices */
  lightBg: true,
  lightText: false,
  lightTextDesc: false,

  /* Text */
  topLine: 'Curated Collections',
  headLine: 'Focal Points',
  description:
    'Set your sights on a goal and leverage your media consumption to curate the end result you have in mind.',
  // Focal Points are pages that enable you to save, sort, and share media from popular media platforms (Supported: YouTube, Instagram, Spotifym and Twitter).

  /* Image Styling */
  imgStart: false /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: fp,
  alt: 'Car',

  /* Button Styling */
  buttonLabel: 'Learn More',
  dark: true,
  primary: true,
  darkText: true,
};

export const Feed = {
  id: 'feed',
  /* Main Color Choices */
  lightBg: false,
  lightText: false,
  lightTextDesc: false,

  /* Text */
  topLine: 'Take Control of Your Algorithm',
  headLine: 'Feed',
  description:
    'Learn, be inspired, and realize the end you have in mind from media recommended under your terms.',

  /* Image Styling */
  imgStart: true /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: feedImg,
  alt: 'Car',

  /* Button Styling */
  buttonLabel: 'Learn More',
  dark: false,
  primary: true,
  darkText: false,
};

export const Discover = {
  id: 'discover',
  /* Main Color Choices */
  lightBg: true,
  lightText: false,
  lightTextDesc: false,

  /* Text */
  topLine: 'Find new media catered to you',
  headLine: 'Discover',
  description:
    'Whether its a friend, an idol, or a goal you have always wanted to pursue, we believe that learning from others is of upmost importance.',

  /* Image Styling */
  imgStart: false /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: discoverImg,
  alt: 'Car',

  /* Button Styling */
  buttonLabel: 'Learn More',
  dark: true,
  primary: true,
  darkText: true,
};
