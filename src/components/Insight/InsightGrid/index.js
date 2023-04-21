import { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
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
  UploadImageButton,
} from './InsightGridElements';

/* import { DeleteInsight } from '../InsightDelete/DeleteInsight'; */

//*********************8 */
import { InsightCard } from './InsightCard/InsightCard';
/* import { Dropdown, InputGroup, InputIcon } from 'react-bootstrap'; */

//************************ */

/* INTERACTIVE COMPONENTS */
import { SelFocalPointFeed } from '../../SelFocalPoint/SelFocalPointFeed';
/* import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import { SpotifyEmbed } from '../../SpotifyEmbed/SpotifyEmbed'; */
import { ButtonGrouping } from '../../RequestButtonElements';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
/* import { Feed } from '../../Feed/Feed.js'; */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  editFPDetails,
  addInsight,
  deleteFocalPoint,
} from '../../../features/focalpoints/focalpointSlice';
import { UploadImage } from '../../AwsImageUpload';

export function InsightGrid() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sightToken = useSelector((state) => state.profile.tokens.sightToken);
  const focalpoints = useSelector((state) => state.focalpoint.fp_array);
  const username = useSelector((state) => state.profile.username);
  const [formUrl, setUrl] = useState('');
  const [tags, setTags] = useState('');

  /* USE THE URL TO KNOW WHICH FOCAL POINT IS SELECTED  */
  let url = window.location.href;
  let spliturl = url.split('/');
  let focalpointId = spliturl[spliturl.length - 1];
  const focalpoint = focalpoints.find(
    (focalpoint) => focalpoint._id === focalpointId
  );

  let imageUrl = focalpoint.imageUrl;
  /* let imageUrl = useSelector((state) => state.focalpoint.fp_array.imageUrl); */
  const [isEditing, setIsEditing] = useState(false);

  const [insightArray, setInsightArray] = useState(
    focalpoint.insights ? focalpoint.insights : []
  );

  useEffect(() => {
    setInsightArray(focalpoint.insights ? focalpoint.insights : []);
  }, [focalpoints, imageUrl]);

  const [view, setView] = useState('insights');

  const changeView = (value) => {
    setView(value);
  };

  /* const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  }; */

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
    await dispatch(
      editFPDetails({ sightToken, editedName, editedDescription, focalpointId })
    );
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

    await dispatch(
      addInsight({
        username,
        insight,
        focalpointId,
        focalpointIndex,
        sightToken,
      })
    );
  }

  const handleDeleteFP = async () => {
    try {
      await dispatch(deleteFocalPoint({ focalpoint, sightToken }));
      navigate(`/user/${username}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const editFPState = () => {
    setIsEditing(!isEditing);
  };

  return (
    // s3://sight-image-bucket-323/Sight-Insta.png
    <NavAndContentContainer>
      <MainContainer>
        <EditCardBody>
          {isEditing ? (
            <Card
              bg='transparent'
              text='light'
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <UploadImageButton>
                <Card.Img
                  variant='top'
                  src={
                    imageUrl
                      ? imageUrl
                      : 'https://sight-image-bucket-323.s3.amazonaws.com/Sight-Insta.png'
                  }
                  style={{
                    height: '200px',
                    width: '200px',
                    opacity: '0.5',
                    margin: '1rem 1rem 1rem 1rem',
                  }}
                ></Card.Img>
                {/* <UploadImageIcon /> */}
              </UploadImageButton>

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
                <Button variant='success' size='md' onClick={handleEditFPCard}>
                  Save
                </Button>
                <Button
                  variant='danger'
                  size='md'
                  style={{ marginLeft: '20px' }}
                  onClick={handleDeleteFP}
                >
                  Delete
                </Button>
              </Card.Body>
              <UploadImage />
            </Card>
          ) : (
            <Card
              bg='transparent'
              text='light'
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Card.Img
                variant='top'
                src={
                  imageUrl
                    ? imageUrl
                    : 'https://sight-image-bucket-323.s3.amazonaws.com/Sight-Insta.png'
                }
                style={{
                  height: '200px',
                  width: '200px',
                  margin: '1rem 1rem 1rem 1rem',
                }}
              ></Card.Img>
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
                    marginBottom: '1rem',
                  }}
                >
                  {focalpoint.description}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </EditCardBody>

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
                <DropdownButton
                  id='dropdown-basic-button'
                  title='Add'
                  style={{ marginRight: '25px' }}
                >
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
              {/* <Form
                style={{
                  marginRight: '25px',
                }}
              >
                <Form.Group
                  className='mb-3'
                  controlId='formBasicEmail'
                  style={{
                    width: '300px',
                    margin: '1rem',
                  }}
                >
                  <Form.Control type='email' placeholder='Search' />
                </Form.Group>
              </Form> */}
            </HeaderContainer>
            <GridWrapper>
              <InsightsGrid>
                {insightArray ? (
                  insightArray.map((insight, index) => (
                    <InsightCard insight={insight} />
                  ))
                ) : (
                  <div>loading</div>
                )}
              </InsightsGrid>
            </GridWrapper>
          </InsightBackgrund>
        ) : (
          <SelFocalPointFeed />
        )}
      </MainContainer>
    </NavAndContentContainer>
  );
}
