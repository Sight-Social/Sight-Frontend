import React from 'react'
import { Dropdown, Form, Button, InputGroup, Input } from 'react-bootstrap'
import { HiOutlinePencil } from 'react-icons/hi'
import { CardContainer, NotesIcon, Footer } from './InsightCardElements'
import { DeleteInsight } from '../../InsightDelete/DeleteInsight'
import YouTubeVideo from '../../../YouTubeVideo/YouTubeVideo'
import { SpotifyEmbed } from '../../../SpotifyEmbed/SpotifyEmbed'



export function InsightCard({ insight }) {
    const [showNote, setShowNote] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [noteText, setNoteText] = React.useState(insight.note || '');

    const handleNoteClick = () => {
        setShowNote(!showNote);
    };

    const handleNoteSave = () => {
        console.log('saving note...');
        setShowNote(false);
        setNoteText('');
    };
    
    const source = insight.source;
    return (
        <>
            {source === 'YouTube' && (
                <CardContainer>
                    <CardContainer.Body>
                        <YouTubeVideo   
                            key={insight.videoId}
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
                    </CardContainer.Body>
                    <Footer>
                        <Dropdown>
                            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <InputGroup>
                                    <Form.Control
                                        as='textarea'
                                        placeholder='Add your insights...'
                                        value={noteText}
                                        onChange={(e) => setNoteText(e.target.value)}
                                    />
                                </InputGroup>
                            </Dropdown.Menu>
                        </Dropdown>
                        <DeleteInsight insight={insight} />
                    </Footer>
                </CardContainer>
            )}

            {source === 'Spotify' && (
                <CardContainer>
                    <CardContainer.Body>
                        <SpotifyEmbed
                            key={insight.videoId}
                            link={`https://open.spotify.com/episode/${insight.videoId}`}
                            width={300}
                            height={80}
                            view='list'
                            theme='black'
                        />
                    </CardContainer.Body>
                    <Footer>
                        <Dropdown>
                            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                Comment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <InputGroup>
                                    <Form.Control
                                        as='textarea'
                                        placeholder='Add your insights...'
                                        value={noteText}
                                        onChange={(e) => setNoteText(e.target.value)}
                                    />
                                </InputGroup>
                            </Dropdown.Menu>
                        </Dropdown>
                        <DeleteInsight insight={insight} />
                    </Footer>
                </CardContainer>
            )}
        </>
    )

}
  
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                   /* <InsightWrapper>                      
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
                          <ButtonRow>
                            <Dropdown>
                              <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                Comment
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <InputGroup>
                                  <InputIcon size={20} />
                                  <Form.Control
                                    as='textarea'
                                    placeholder='Add an insight'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                  />
                                </InputGroup>
                              </Dropdown.Menu>
                            </Dropdown>
                            <DeleteInsight insight={insight} />
                          </ButtonRow>
                        </InsightWrapper>
                      ) : insight.source === 'Spotify' ? (
                        <InsightWrapper>
                          <SpotifyEmbed
                            key={insight.videoId}
                            link={`https://open.spotify.com/episode/${insight.videoId}`}
                          />
                        </InsightWrapper> */