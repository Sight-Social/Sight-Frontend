import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

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
} from './InsightGridElements';

/* INTERACTIVE COMPONENTS */
import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import {
  CrudButton,
  IconWrapper,
  ButtonGrouping,
} from '../../RequestButtonElements';
import InsightAdd from '../InsightAdd/index.js';
import Card from 'react-bootstrap/Card';

import hikingLogo from '../../../assets/backgrounds/hikingBackground.png';
import financeLogo from '../../../assets/backgrounds/financeBackground.png';
import fitnessLogo from '../../../assets/backgrounds/fitnessBackground.png';
import biohackingLogo from '../../../assets/biohacking-logo.avif';
import musicLogo from '../../../assets/backgrounds/musicBackground.png';
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
  updateFocalPointCard,
} from '../../../features/focalpoints/focalpointSlice';

export function InsightGrid() {
  const dispatch = useDispatch();

  const focalpoints = useSelector((state) => state.user.focalpoints);
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);

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

  const handleAddInsight = async (url, tags, fpId) => {
    console.log('URL: ' + url);
    console.log('TAGS: ' + tags);
    var tagArr = tags.split(',');

    // https://www.youtube.com/watch?v=_shA5Xwe8_4 -> Normal
    // https://www.youtube.com/shorts/ynQCpKevJ9A -> Shorts

    let videoId;
    let videoFormat;
    if (url.includes('shorts')) {
      videoId = url.split('shorts/')[1];
      videoFormat = 'portrait';
    } else {
      videoId = url.split('?v=')[1];
      videoFormat = 'landscape';
    }

    console.log('VideoSpecs: Id=' + videoId + ', Type=' + videoFormat);
    let source = 'YouTube';
    setInsightArray([...insightArray, { videoId, videoFormat, tags, source }]);

    try {
      await axios.post(
        `http://localhost:3000/user/${username}/focalpoints/${focalpoint._id}`,
        {
          videoId: videoId,
          videoFormat: videoFormat,
          tags: tagArr,
          email: email,
          fpId: focalpoint._id,
        }
      );

      /* handleUserUpdate(user); */
    } catch (error) {
      console.log(error);
    }
  };

  const [view, setView] = useState('insights');

  const changeView = (value) => {
    setView(value);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('[NavBar/index.js] Logout btn clicked');
    sessionStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  // const handleEditFPCard = async (index, editedName, editedDescription) => {
  //   const oldId = cardList[index]._id;
  //   const oldInsights = cardList[index].insights;

  //   const updatedCardList = [
  //     ...cardList.slice(0, index), // Copy elements before the updated index
  //     {
  //       _id: oldId,
  //       title: editedName,
  //       insights: oldInsights,
  //       description: editedDescription,
  //     },
  //     ...cardList.slice(index + 1), // Copy elements after the updated index
  //   ];

  //   const updatedId = updatedCardList[index]._id;
  //   setCardList(updatedCardList);

  //   try {
  //     /* DELETE the ids of the FP's you want to delete   */
  //     await axios.patch(
  //       `http://localhost:3000/user/${user.username}/focalpoints`,
  //       {
  //         email: user.email,
  //         focalpointToEdit: updatedId,
  //         editedName: editedName,
  //         editedDescription: editedDescription,
  //       }
  //     );
  //     handleUserUpdate(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    console.log('Editing FP Card');
    const action = await dispatch(
      editFPDetails({ editedName, editedDescription, email, focalpointId })
    );
    if (action.payload) {
      console.log('FP PAYLOAD: ' + action.payload);
      updateFocalPointCard(action.payload);
    }
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

          <EditCardBody /* onClick={editFPState} */>
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
                  <InsightAdd /* addInsight={handleAddInsight} */ />
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
                  ? insightArray.map((insight, index) => (
                      <YouTubeVideo
                        key={insight.video_id}
                        className='pinned-insight'
                        videoId={insight.video_id}
                        tags={insight.tags}
                        source={insight.source}
                        height={600} /* insight.height */
                        width={300} /* insight.width */
                      />
                    ))
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
