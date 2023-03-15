import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { StyledDropdown, StyledItem, StyledBsPlus } from './FeedCardElements';

import { setUser } from '../../../user/userSlice';
import { addInsightToFocalPoint } from '../../../user/userThunk';

export function Menu({ insight }) {
  const cardInsight = insight;
  const focalpoints = useSelector((state) => state.user.focalpoints); //list all focalpoints
  const username = useSelector((state) => state.user.username); //for API call in addInsightToFocalPoint userThunk
  const dispatch = useDispatch();

  async function addInsightToFP(focalpointId, insight){
    console.log('addInsightToFP insight: ', insight)
        try {                            
            dispatch(addInsightToFocalPoint({username, focalpointId, insight }));
        } catch (error) {
            console.log(error);
        }
  }

  console.log('Menu cardInsight: ', cardInsight)
  console.log('Menu focalpoints: ', focalpoints)
  return (
    <>
      <StyledDropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <StyledBsPlus />
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {focalpoints.map((focalpoint) => (
            <StyledItem
                key={focalpoint._id}
                onClick={() => addInsightToFP(focalpoint._id, cardInsight)}
            >{focalpoint.title}</StyledItem>
          ))}
          <StyledItem key="new">Add to new Focalpoint</StyledItem>
        </Dropdown.Menu>
      </StyledDropdown>
    </>
  );
}

export default Menu;
