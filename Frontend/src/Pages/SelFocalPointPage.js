import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/PageComponents/NavBar';
import { SelFocalPoint } from '../components/SelFocalPoint/SelFocalPoint';
import Footer from '../components/PageComponents/Footer/Footer';
import { Sidebar } from '../components/PageComponents/Sidebar';
import WebAppNav from '../components/WebAppNav';
import styled from 'styled-components';

export function SelFocalPointPage() {
  const focalpoints = useSelector((state) => state.focalpoint.fp_array);

  //Get the focalpointId from the url
  let [url, setUrl] = useState(window.location.href); // this?
  
  useEffect(() => {
    setUrl(window.location.href); // update here
  }, []);
  let spliturl = url.split('/');
  let focalpointId = spliturl[spliturl.length - 1];
  //Get the focalpoint from the user object
  const selectedFP = focalpoints.find(
    (focalpoint) => focalpoint._id === focalpointId
  );

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
}
