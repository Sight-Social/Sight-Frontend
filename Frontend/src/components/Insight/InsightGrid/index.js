import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {
  Container,
  FormContent,
  FormLabel,
  FormWrap,
  FormH1,
  FormInput,
  FormContianer,
  FormButton,
} from '../InsightAdd/InsightAddElements';

/* ASSETS */
import hikingLogo from '../../../assets/backgrounds/hikingBackground.png';
import financeLogo from '../../../assets/backgrounds/financeBackground.png';
import fitnessLogo from '../../../assets/backgrounds/fitnessBackground.png';
import biohackingLogo from '../../../assets/biohacking-logo.avif';
import musicLogo from '../../../assets/backgrounds/musicBackground.png';

/* MAIN STYLING */
import { MainContainer } from './InsightGridElements';
import {
  InsightBackgrund,
  InsightsGrid,
  HeaderContainer,
  GridWrapper,
  NavContainer,
  NavAndContentContainer,
  EditCardBody,
  EditableFpName,
  EditableDescription,
  InsightWrapper,
} from './InsightGridElements';

/* INTERACTIVE COMPONENTS */
import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import { SpotifyEmbed } from '../../SpotifyEmbed/SpotifyEmbed';
import { ButtonGrouping } from '../../RequestButtonElements';
import InsightAdd from '../InsightAdd/index.js';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Feed } from '../../Feed/Feed.js';
/* import AddFocalPoint from '../../FocalPoint/AddFocalPoint'; */
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  editFPDetails,
  addInsight,
} from '../../../features/focalpoints/focalpointSlice';

export function InsightGrid() {
  const dispatch = useDispatch();
  const sightToken = useSelector((state) => state.profile.tokens.sightToken);
  const focalpoints = useSelector((state) => state.focalpoint.fp_array);
  const username = useSelector((state) => state.profile.username);
  const email = useSelector((state) => state.profile.email);
  const [formUrl, setUrl] = useState('');
  const [tags, setTags] = useState('');

  /* USE THE URL TO KNOW WHICH FOCAL POINT IS SELECTED  */
  let url = window.location.href;
  let spliturl = url.split('/');
  let focalpointId = spliturl[spliturl.length - 1];
  const focalpoint = focalpoints.find(
    (focalpoint) => focalpoint._id === focalpointId
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const [insightArray, setInsightArray] = useState(
    focalpoint.insights ? focalpoint.insights : []
  );

  let imageSet = [
    financeLogo,
    fitnessLogo,
    musicLogo,
    biohackingLogo,
    hikingLogo,
  ];

  const [view, setView] = useState('insights');

  const changeView = (value) => {
    setView(value);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  const [editedName, setEditedName] = useState(focalpoint.title);
  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const [editedDescription, setEditedDescription] = useState(
    focalpoint.description
  );
  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  async function handleEditFPCard() {
    const action = await dispatch(
      editFPDetails({ sightToken, editedName, editedDescription, focalpointId })
    );
    /* if (action.payload) {
      updateFocalPointCard(action.payload);
    } */
  }

  async function handleAddInsight(url, tags, focalpointId) {
    // https://www.youtube.com/watch?v=_shA5Xwe8_4 -> Normal
    // https://www.youtube.com/shorts/ynQCpKevJ9A -> Shorts
    var tagArr = tags.split(',');
    let videoId;
    let videoFormat;
    let source = 'YouTube';
    if (url.includes('shorts')) {
      videoId = url.split('shorts/')[1];
      videoFormat = 'portrait';
    } else {
      videoId = url.split('?v=')[1];
      videoFormat = 'landscape';
    }

    const focalpointIndex = focalpoints.findIndex(
      (focalpoint) => focalpoint._id.toString() === focalpointId.toString()
    );

    const insight = {
      videoId: videoId,
      videoFormat: videoFormat,
      tags: tagArr,
      source: source,
      mediaType: 'video',
    };

    const action = await dispatch(
      addInsight({
        username,
        insight,
        focalpointId,
        focalpointIndex,
        sightToken,
      })
    );
    /* if (action.payload) {
      updateInsightList(action.payload);
    } */
  }

  const editFPState = () => {
    setIsEditing(!isEditing);
  };

  return (
    <NavAndContentContainer>
      <MainContainer>
        <Card
          bg='dark'
          text='light'
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            margin: '20px 0px 50px 0px',
            alignItems: 'center',
          }}
        >
          <Card.Img
            variant='top'
            src={imageSet[0]}
            style={{
              height: '200px',
              width: '200px',
            }}
          ></Card.Img>

          <EditCardBody>
            {isEditing ? (
              <Card.Body style={{ width: 'auto' }}>
                <Card.Title
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  <EditableFpName
                    value={editedName}
                    onChange={handleNameChange}
                  />
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  <EditableDescription
                    value={editedDescription}
                    onChange={handleDescriptionChange}
                  />
                </Card.Text>
                <Button
                  variant='secondary'
                  size='md'
                  style={{ marginRight: '20px' }}
                  onClick={editFPState}
                >
                  Cancel
                </Button>
                <Button
                  variant='secondary'
                  size='md'
                  onClick={handleEditFPCard}
                >
                  Save
                </Button>
              </Card.Body>
            ) : (
              <Card.Body onClick={editFPState}>
                <Card.Title
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  {focalpoint.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '1rem',
                  }}
                >
                  {focalpoint.description}
                </Card.Text>
              </Card.Body>
            )}
          </EditCardBody>
        </Card>

        <NavContainer>
          <Nav justify variant='tabs' defaultActiveKey='link-1'>
            <Nav.Item>
              <Nav.Link
                eventKey='link-1'
                onClick={() => changeView('insights')}
              >
                Insights
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2' onClick={() => changeView('feed')}>
                {focalpoint.title} Feed
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavContainer>
        {view === 'insights' || view === undefined ? (
          <InsightBackgrund>
            <HeaderContainer>
              <ButtonGrouping>
                <DropdownButton id='dropdown-basic-button' title='Add'>
                  <Container>
                    <FormWrap>
                      <FormContent>
                        <FormContianer
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleAddInsight(formUrl, tags, focalpointId);
                          }}
                        >
                          <FormH1>New Insight</FormH1>
                          <FormLabel htmlFor='for'>URL</FormLabel>
                          <FormInput
                            type='url'
                            required
                            onChange={(e) => setUrl(e.target.value)}
                          />
                          <FormLabel htmlFor='for'>Tags</FormLabel>
                          <FormInput
                            type='tags'
                            required
                            onChange={(e) => setTags(e.target.value)}
                          />
                          <FormButton type='submit'>Add</FormButton>
                        </FormContianer>
                      </FormContent>
                    </FormWrap>
                  </Container>
                </DropdownButton>
              </ButtonGrouping>
              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicEmail'
                  style={{
                    width: '300px',
                  }}
                >
                  <Form.Control type='email' placeholder='Search' />
                </Form.Group>
              </Form>
            </HeaderContainer>
            <GridWrapper>
              <InsightsGrid>
                {insightArray
                  ? insightArray.map((insight, index) =>
                      insight.source === 'YouTube' ? (
                        <InsightWrapper>
                          <YouTubeVideo
                            key={index}
                            className='pinned-insight'
                            videoId={insight.videoId}
                            tags={insight.tags}
                            source={insight.source}
                            height={600}
                            width={300}
                            style={{
                              margin: '10px',
                            }}
                          />
                        </InsightWrapper>
                      ) : insight.source === 'Spotify' ? (
                        <SpotifyEmbed
                          key={insight.videoId}
                          link={`https://open.spotify.com/episode/${insight.videoId}`}
                        />
                      ) : null
                    )
                  : null}
              </InsightsGrid>
            </GridWrapper>
          </InsightBackgrund>
        ) : (
          <Feed />
        )}
      </MainContainer>
    </NavAndContentContainer>
  );
}
