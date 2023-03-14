import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { StyledDropdown, StyledItem, StyledBsPlus } from './FeedCardElements';

import { setUser } from '../../../user/userSlice';

export function Menu() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const insight = user.subscriptions[0].insights[0];
    async function addInsightToFP(focalpointId, insight){
        try {
            const res = await axios.post(`http://localhost:3000/user/${user.username}/focalpoints/${focalpointId}`, {
                username: user.username,
                email: user.email,
                focalpoint_id: focalpointId,
                videoId: insight.videoId,
                title: insight.title,
                description: insight.description,
                publishedAt: insight.publishedAt,
                thumbnail: insight.thumbnail,
                publishedAt: insight.publishedAt,
                viewCount: insight.viewCount + 1,
              });
              //update user in App.js
              dispatch(setUser(res.data));
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <StyledDropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <StyledBsPlus />
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {user.focalpoints.map((focalpoint) => (
            <StyledItem
                key={focalpoint._id}
                onClick={() => addInsightToFP(focalpoint._id, insight)}
            >{focalpoint.title}</StyledItem>
          ))}
          <StyledItem key="new">Add to new Focalpoint</StyledItem>
        </Dropdown.Menu>
      </StyledDropdown>
    </>
  );
}

export default Menu;
