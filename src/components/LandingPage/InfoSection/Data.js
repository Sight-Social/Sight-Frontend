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
import FeedSettings from '../../../assets/LandingPage/FeedSettings.png';
import FeedPic from '../../../assets/LandingPage/FeedRound.png';
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
  lightBg: true,
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

/* 
1. Overall concept - Leverage your media consumption to learn about a topic or interest of yours.
2. Aggregate your social media feeds
3. Control your algorithm - curate your media consumption
4. Save, sort, and share media from popular media platforms (Supported: YouTube, Instagram, Spotify and Twitter). 
*/
export const ContentCurationTool = {
  id: 'cctool',
  /* Main Color Choices */
  lightBg: false,
  lightText: true,
  lightTextDesc: true,

  /* Text */
  topLine: 'Bring it All Together',
  headLine: 'One Feed',
  description:
    'Sign in to all of your social media accounts and we will aggregate your feeds. By streamlining your social media experience, you can focus on what really matters - enjoying and sharing your favorite content.',

  /* Image Styling */
  imgStart: false /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: FeedPic,
  alt: 'Car',

  /* Button Styling */
  buttonLabel: 'Learn More',
  dark: true,
  primary: true,
  darkText: true,
};

export const Algorithm = {
  id: 'algorithm',
  /* Main Color Choices */
  lightBg: false,
  lightText: true,
  lightTextDesc: true,

  /* Text */
  topLine: 'control your algorithm',
  headLine: 'Feed Settings',
  description:
    "Our aggregation technology ensures that you receive unbiased recommendations, free from the influence of any platform. And with our feed settings, you're in charge of your algorithm - so you'll only see the media that truly matters to you.",

  /* Image Styling */
  imgStart: true /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: FeedSettings,
  alt: 'Car',

  /* Button Styling */
  buttonLabel: 'Learn More',
  dark: true,
  primary: true,
  darkText: true,
};

export const SaveSortShare = {
  id: 'savesortshare',
  /* Main Color Choices */
  lightBg: false,
  lightText: true,
  lightTextDesc: true,

  /* Text */
  topLine: 'Save by topic, Not by platform',
  headLine: 'Focal Points',
  description:
    'No more digging through different apps to find the content you want. Our focal points allow you to easily save, sort, and share media from popular platforms like YouTube, Instagram, Spotify, and Twitter. Plus, each Focal Point has a custom consisting of content similar to what you have saved.',

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
