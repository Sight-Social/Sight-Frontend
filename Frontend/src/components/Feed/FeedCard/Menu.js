import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { StyledDropdown, StyledItem, StyledBsPlus } from './FeedCardElements';

import { addInsight } from '../../../features/focalpoints/focalpointSlice';

export function Menu({ insight }) {
  const cardInsight = insight;
  const focalpoints = useSelector((state) => state.focalpoint.fp_array); //list all focalpoints
  const username = useSelector((state) => state.profile.username); //for API call in addInsightToFocalPoint userThunk
  const dispatch = useDispatch();
  const sightToken = useSelector((state) => state.profile.tokens.sightToken);

  async function addInsightToFP(focalpointId, insight) {
    const focalpointIndex = focalpoints.findIndex(
      (focalpoint) => focalpoint._id.toString() === focalpointId.toString()
    );

    console.log('addInsightToFP insight: ', insight);
    try {
      dispatch(
        addInsight({
          username,
          focalpointId,
          insight,
          focalpointIndex,
          sightToken,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledDropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          <StyledBsPlus />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {focalpoints.map((focalpoint) => (
            <StyledItem
              key={focalpoint._id}
              onClick={() => addInsightToFP(focalpoint._id, cardInsight)}
            >
              {focalpoint.title}
            </StyledItem>
          ))}
          <StyledItem key='new'>Add to new Focalpoint</StyledItem>
        </Dropdown.Menu>
      </StyledDropdown>
    </>
  );
}

export default Menu;
