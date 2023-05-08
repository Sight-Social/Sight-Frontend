import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreCards, setQueue } from '../../../features/feed/feedSlice';
import { MdRefresh } from 'react-icons/md';

function RefreshButton() {
  const dispatch = useDispatch();
  const { catalog, queue, filters } = useSelector((state) => state.feed);

  async function handleClick() {
    /* console.log('refresh button clicked') */
    const action = await dispatch(
      loadMoreCards({
        catalog,
        queue,
        filters,
        numCardsToAdd: 3,
      })
    );
    const newQueue = action.payload;
    dispatch(setQueue(newQueue));
  }

  return <MdRefresh onClick={() => handleClick()} />;
}

export default RefreshButton;
