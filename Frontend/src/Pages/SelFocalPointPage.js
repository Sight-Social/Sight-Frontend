import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/PageComponents/NavBar';
import SelFocalPoint from '../components/SelFocalPoint/SelFocalPoint';
import Footer from '../components/PageComponents/Footer/Footer';
import Sidebar from '../components/PageComponents/Sidebar';
import WebAppNav from '../components/WebAppNav';
import styled from 'styled-components';

export function SelFocalPointPage(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.user);

  //Get the focalpointId from the url
  let [url, setUrl] = useState(window.location.href); // this?
  console.log('url: ' + url);
  useEffect(() => {
    setUrl(window.location.href); // update here
  }, []);
  let spliturl = url.split('/');
  let focalpointId = spliturl[spliturl.length - 1];
  console.log('selected focalpointId:' + focalpointId);
  //Get the focalpoint from the user object
  const selectedFP = user.focalpoints.find(
    (focalpoint) => focalpoint._id === focalpointId
  );
  console.log('selectedFP: ', selectedFP);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: black;
    width: 100%;
  `;

  return (
    <>
      <Wrapper>
        <WebAppNav />
        <SelFocalPoint />
      </Wrapper>
    </>
  );
};

export default SelFocalPointPage;
