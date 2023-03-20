import { useSelector, useDispatch } from 'react-redux';
import { deleteInsight } from '../../../features/focalpoints/focalpointSlice';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { StyledRiDeleteBinLine } from '../InsightGrid/InsightGridElements';

export function DeleteInsight({ insight }) {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname.split('/');
  const sightToken = useSelector((state) => state.profile.tokens.sightToken);
  const focalpointId = pathname[pathname.length - 1];
  let focalpointIndex = useSelector((state) =>
    state.focalpoint.fp_array.findIndex(
      (focalpoint) => focalpoint._id === focalpointId
    )
  );
  async function handleInsightDeletion() {
    console.log('insight: ', insight);
    console.log('focalpointId: ', focalpointId);
    await dispatch(
      deleteInsight({
        insight,
        focalpointId,
        focalpointIndex,
        sightToken,
      })
    );
    /* const newQueue = {focalpointIndex: focalpointIndex, queue: response.data} */
    /* dispatch(setQueue(newQueue)); */
  }

  return <StyledRiDeleteBinLine onClick={handleInsightDeletion} />;
}
