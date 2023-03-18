import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll/modules';
import { useSelector } from 'react-redux';
import axios from 'axios';

import {
  MainContainer,
  Container,
  CardList,
  HeaderAndButtons,
  Title,
  NavContainer,
} from './FocalPointsElements';
import SearchBar from '../FocalPointsSearchBar';
import AddButton from '../AddFpButton';

import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import hikingLogo from '../../../assets/backgrounds/hikingBackground.png';
import financeLogo from '../../../assets/backgrounds/financeBackground.png';
import fitnessLogo from '../../../assets/backgrounds/fitnessBackground.png';
import biohackingLogo from '../../../assets/biohacking-logo.avif';
import musicLogo from '../../../assets/backgrounds/musicBackground.png';
import YouTubeVideo from '../../YouTubeVideo/YouTubeVideo';
import { Spacer } from '../../Profile/ProfileElements';

export function FocalPoints() {
  const { username, email } = useSelector((state) => state.profile);
  const focalpoints = useSelector((state) => state.focalpoint.fp_array);
  const pinned_insights = useSelector(
    (state) => state.focalpoint.pinned_insights
  );

  const [cardList, setCardList] = useState(focalpoints);
  const [view, setView] = useState('focalpoints');
  const changeView = (view) => {
    switch (view) {
      case 'focalpoints':
        setView('focalpoints');
        break;
      case 'shared':
        setView('shared');
        break;
      case 'pinned':
        setView('pinned');
        break;
      default:
        setView('focalpoints');
        break;
    }
  };
  /* const changeView = (value) => {
    setView(value);
  }; */

  let imageSet = [
    financeLogo,
    musicLogo,
    hikingLogo,
    musicLogo,
    fitnessLogo,
    biohackingLogo,
  ];

  const handleAddFP = async (title, description) => {
    setCardList([...cardList, { title: title, description }]);

    try {
      await axios.post(`http://localhost:3000/user/${username}/focalpoints`, {
        title: title,
        description: description,
        email: email,
      });

      focalpoints = cardList;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFP = async (selectedToDelete) => {
    try {
      await axios.delete(
        `http://localhost:3000/user/${username}/focalpoints/`,
        {
          params: {
            email: email,
            selected_id: selectedToDelete,
          },
        }
      );
      setCardList(
        cardList.filter((card) => !selectedToDelete.includes(card._id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFP = async (index, editedName, editedDescription) => {
    const oldId = cardList[index]._id;
    const oldInsights = cardList[index].insights;

    const updatedCardList = [
      ...cardList.slice(0, index), // Copy elements before the updated index
      {
        _id: oldId,
        title: editedName,
        insights: oldInsights,
        description: editedDescription,
      },
      ...cardList.slice(index + 1), // Copy elements after the updated index
    ];

    const updatedId = updatedCardList[index]._id;
    setCardList(updatedCardList);

    try {
      /* DELETE the ids of the FP's you want to delete   */
      await axios.patch(`http://localhost:3000/user/${username}/focalpoints`, {
        email: email,
        focalpointToEdit: updatedId,
        editedName: editedName,
        editedDescription: editedDescription,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <MainContainer>
      <NavContainer>
        <Nav
          justify
          variant='tabs'
          style={{
            textDecoration: 'none',
            backgroundColor: '#0b0d09',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottom: 'none',
          }}
          defaultActiveKey='link-1'
        >
          <Nav.Item>
            <Nav.Link
              eventKey='link-1'
              style={{
                backgroundColor: '#0b0d09',
                color: '#eaf8fe',
                borderBottom: 'none',
              }}
              onClick={() => changeView('focalpoints')}
            >
              Focal Points
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link-2'
              style={{
                backgroundColor: '#0b0d09',
                color: '#eaf8fe',
                borderBottom: 'none',
              }}
              onClick={() => changeView('shared')}
            >
              Shared
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link-3'
              style={{
                backgroundColor: '#0b0d09',
                color: '#eaf8fe',
                borderBottom: 'none',
              }}
              onClick={() => changeView('pinned')}
            >
              Pinned Insights
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </NavContainer>
      {view === 'focalpoints' ? (
        // render focal points section
        <Container>
          <HeaderAndButtons>
            <Title>Focal Points</Title>
            <AddButton username={username} addFp={handleAddFP} />
            <SearchBar />
          </HeaderAndButtons>

          <Row xs={1} md={2} className='g-4'>
            {cardList
              ? cardList.map((focalpoint, index) => (
                  <Col key={focalpoint._id}>
                    <Link
                      to={`/user/${username}/focalpoints/${focalpoint._id}`}
                      onClick={toggleHome}
                      style={{
                        textDecoration: 'none', // remove underline
                        color: 'inherit', // use default text color
                        cursor: 'pointer', // use pointer cursor
                        borderRadius: '15px',
                      }}
                    >
                      <Card
                        bg='dark'
                        text='light'
                        style={{
                          borderRadius: '15px',
                          width: '100%',
                        }}
                      >
                        <Card.Img
                          variant='top'
                          src={imageSet[index]}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '25vh',
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: '15px 15px 0px 0px',
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{focalpoint.title}</Card.Title>
                          <Card.Text>{focalpoint.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      ) : view === 'shared' ? (
        // render shared section
        <Container>
          <HeaderAndButtons>
            <Title>Shared Focal Points</Title>
            <AddButton username={username} addFp={handleAddFP} />
            <SearchBar />
          </HeaderAndButtons>

          <Row xs={1} md={2} className='g-4'>
            {cardList
              ? cardList.map((focalpoint, index) => (
                  <Col key={focalpoint._id}>
                    <Link
                      to={`/user/${username}/focalpoints/${focalpoint._id}`}
                      onClick={toggleHome}
                      style={{
                        textDecoration: 'none', // remove underline
                        color: 'inherit', // use default text color
                        cursor: 'pointer', // use pointer cursor
                        borderRadius: '15px',
                      }}
                    >
                      <Card
                        bg='dark'
                        text='light'
                        style={{
                          borderRadius: '15px',
                          width: '100%',
                        }}
                      >
                        <Card.Img
                          variant='top'
                          src={imageSet[index]}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '25vh',
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: '15px 15px 0px 0px',
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{focalpoint.title}</Card.Title>
                          <Card.Text>{focalpoint.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      ) : view === 'pinned' ? (
        // render pinned section
        <Container>
          <HeaderAndButtons>
            <Title>Pinned Insights</Title>
            <AddButton username={username} addFp={handleAddFP} />
            <SearchBar />
          </HeaderAndButtons>

          <Row xs={1} md={2} className='g-4'>
            {pinned_insights
              ? pinned_insights.map((insight, index) => (
                  <div key={index}>
                    <YouTubeVideo
                      key={index}
                      className='pinned-insight'
                      videoId={insight.video_id}
                      height='250'
                      width='300'
                    />
                    <Spacer />
                  </div>
                ))
              : null}
          </Row>
        </Container>
      ) : (
        // default case - render focal points section
        <Container>
          <HeaderAndButtons>
            <Title>Focal Points</Title>
            <AddButton username={username} addFp={handleAddFP} />
            <SearchBar />
          </HeaderAndButtons>

          <Row xs={1} md={2} className='g-4'>
            {cardList
              ? cardList.map((focalpoint, index) => (
                  <Col key={focalpoint._id}>
                    <Link
                      to={`/user/${username}/focalpoints/${focalpoint._id}`}
                      onClick={toggleHome}
                      style={{
                        textDecoration: 'none', // remove underline
                        color: 'inherit', // use default text color
                        cursor: 'pointer', // use pointer cursor
                        borderRadius: '15px',
                      }}
                    >
                      <Card
                        bg='dark'
                        text='light'
                        style={{
                          borderRadius: '15px',
                          width: '100%',
                        }}
                      >
                        <Card.Img
                          variant='top'
                          src={imageSet[index]}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '25vh',
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: '15px 15px 0px 0px',
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{focalpoint.title}</Card.Title>
                          <Card.Text>{focalpoint.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

export default FocalPoints;
export { CardList };

/* {view === 'focalpoints' || view === undefined ? (
        <Container>
          <HeaderAndButtons>
            <Title>Focal Points</Title>
            <AddButton username={username} addFp={handleAddFP} />
            <SearchBar />
          </HeaderAndButtons>

          <Row xs={1} md={2} className='g-4'>
            {cardList
              ? cardList.map((focalpoint, index) => (
                  <Col key={focalpoint._id}>
                    <Link
                      to={`/user/${username}/focalpoints/${focalpoint._id}`}
                      onClick={toggleHome}
                      style={{
                        textDecoration: 'none', // remove underline
                        color: 'inherit', // use default text color
                        cursor: 'pointer', // use pointer cursor
                        borderRadius: '15px',
                      }}
                    >
                      <Card
                        bg='dark'
                        text='light'
                        style={{
                          borderRadius: '15px',
                          width: '100%',
                        }}
                      >
                        <Card.Img
                          variant='top'
                          src={imageSet[index]}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '25vh',
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: '15px 15px 0px 0px',
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{focalpoint.title}</Card.Title>
                          <Card.Text>{focalpoint.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      ) : (
        <Container>
          <HeaderAndButtons>
            <Title>Shared Focal Points</Title>
            <AddButton username={username} addFp={handleAddFP} />
            <SearchBar />
          </HeaderAndButtons>

          <Row xs={1} md={2} className='g-4'>
            {cardList
              ? cardList.map((focalpoint, index) => (
                  <Col key={focalpoint._id}>
                    <Link
                      to={`/user/${username}/focalpoints/${focalpoint._id}`}
                      style={{
                        textDecoration: 'none', // remove underline
                        color: 'inherit', // use default text color
                        cursor: 'pointer', // use pointer cursor
                      }}
                    >
                      <Card bg='dark' text='light'>
                        <Card.Img variant='top' src={imageSet[index]} />
                        <Card.Body>
                          <Card.Title>{focalpoint.title}</Card.Title>
                          <Card.Text>{focalpoint.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      )} */
// </MainContainer>
